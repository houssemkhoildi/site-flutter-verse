// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qxslsizwibsihhfznmrc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4c2xzaXp3aWJzaWhoZnpubXJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3MTk3OTYsImV4cCI6MjA2MDI5NTc5Nn0.BpkiO6jl3tVs9bDsDMnzR6ECW-ul4VXNrfn6D1xteDI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);