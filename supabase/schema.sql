-- 1. Custom Types
CREATE TYPE user_role AS ENUM ('patient', 'doctor', 'lab_tech', 'admin');
CREATE TYPE report_status AS ENUM ('processing', 'ready');
CREATE TYPE queue_status AS ENUM ('waiting', 'ready_to_see', 'completed');
CREATE TYPE audit_action AS ENUM ('uploaded', 'viewed', 'downloaded');

-- 2. Profiles Table (extends auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  role user_role DEFAULT 'patient'::user_role NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Reports Table
CREATE TABLE reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  doctor_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  lab_tech_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  file_path TEXT NOT NULL, -- Path in Supabase Storage
  status report_status DEFAULT 'processing'::report_status NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Queue / Appointments Table
CREATE TABLE appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  doctor_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  status queue_status DEFAULT 'waiting'::queue_status NOT NULL,
  scheduled_for TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Audit Logs Table
CREATE TABLE audit_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  report_id UUID REFERENCES reports(id) ON DELETE CASCADE,
  action audit_action NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Storage Bucket for PDFs
INSERT INTO storage.buckets (id, name, public) VALUES ('secure_reports', 'secure_reports', false);

-- Enable Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Setup Realtime
ALTER PUBLICATION supabase_realtime ADD TABLE reports;
ALTER PUBLICATION supabase_realtime ADD TABLE appointments;

-------------------------------------------------------------------------
-- RLS POLICIES
-------------------------------------------------------------------------

-- PROFILES
CREATE POLICY "Profiles are viewable by self, doctors, and lab techs" 
ON profiles FOR SELECT 
USING (
  auth.uid() = id OR 
  (SELECT role FROM profiles WHERE id = auth.uid()) IN ('doctor', 'lab_tech')
);

-- REPORTS
CREATE POLICY "Patients view own reports" 
ON reports FOR SELECT 
USING (patient_id = auth.uid());

CREATE POLICY "Doctors view assigned reports" 
ON reports FOR SELECT 
USING (doctor_id = auth.uid());

CREATE POLICY "Lab techs have full access to reports" 
ON reports FOR ALL 
USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'lab_tech');

-- STORAGE POLICIES
CREATE POLICY "Patients can view own report files"
ON storage.objects FOR SELECT
USING ( bucket_id = 'secure_reports' AND auth.uid() = (SELECT patient_id FROM reports WHERE file_path = name) );

CREATE POLICY "Doctors can view assigned report files"
ON storage.objects FOR SELECT
USING ( bucket_id = 'secure_reports' AND auth.uid() = (SELECT doctor_id FROM reports WHERE file_path = name) );

CREATE POLICY "Lab techs can upload report files"
ON storage.objects FOR INSERT
WITH CHECK ( bucket_id = 'secure_reports' AND (SELECT role FROM profiles WHERE id = auth.uid()) = 'lab_tech' );
