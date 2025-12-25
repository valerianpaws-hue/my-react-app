// Type definitions for the application

export interface User {
  id: string;
  email: string;
  username?: string;
  created_at?: string;
}

export interface Profile {
  id: string;
  username?: string;
  email?: string;
  avatar_url?: string;
  created_at?: string;
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
}
