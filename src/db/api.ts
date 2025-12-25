import { supabase } from './supabase';

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
}

export const contactApi = {
  // Submit contact form
  submitContactForm: async (data: Omit<ContactSubmission, 'id' | 'created_at'>) => {
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert([data])
      .select()
      .maybeSingle();

    if (error) throw error;
    return result;
  },

  // Get all submissions (for admin purposes)
  getAllSubmissions: async () => {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },
};
