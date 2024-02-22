import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://koasnjphmiatqwhfufhg.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvYXNuanBobWlhdHF3aGZ1ZmhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1MTkwNzUsImV4cCI6MjAyNDA5NTA3NX0.vJ4B5HwMVmBaBvfoakvXTF7cI0qkqIcTMpHaI1m_tfU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
