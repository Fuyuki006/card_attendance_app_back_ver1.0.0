env = require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const { json } = require('body-parser');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = {
    fetchData: async (req, res, next) => {
      try {
        let { data, error } = await supabase
          .from('demousers')
          .select("*");
        
        if (error) {
          return res.status(500).send(error);
        }
  
        if (!data) {
          return res.status(404).send('No data found');
        }
        
        res.send(data);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
    }
    
  };
