
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mygmeickkgwoixxqmvnb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15Z21laWNra2d3b2l4eHFtdm5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4MTYwODgsImV4cCI6MjAxNDM5MjA4OH0.4VsDC1ttiN2qi1Op6gPOL3w5DQEQyoH3YSbc37GenX8'
const supabase = createClient(supabaseUrl, supabaseKey)

export {supabase}