const express = require('express');
const router = express.Router();
const env = require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

router.get('/', async (req, res) => {
  const { data, error } = await supabaseClient.from('users').select('*');
  
  if (error) {
    return res.status(500).json({ error: 'Error fetching data from Supabase' });
  }

  res.json(data);
});

module.exports = router;
