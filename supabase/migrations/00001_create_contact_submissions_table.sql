-- Create contact form submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Enable RLS (Row Level Security)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form submission)
CREATE POLICY "Allow public insert" ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read (for admin purposes)
CREATE POLICY "Allow authenticated read" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);