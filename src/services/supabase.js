
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tywyvtesrtgxybsksxed.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5d3l2dGVzcnRneHlic2tzeGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMTg5NDIsImV4cCI6MjA0MjY5NDk0Mn0.1gZI6daCza5vyyjHzjlkHwOEoJ5Cn0_OHOHZ6sVBZvg"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase