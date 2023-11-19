env = require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = {
    insertData: async (req, res, next) => {
        const columnKey = `tagWall${req.body.contentType}`;
      try {
        
        const { data, error } = await supabase
        .from('users')
        .select(columnKey)
        .eq('email',req.body.email);

        if (error) {
          return res.status(500).send(error);
        }
  
        if (!data) {
          return res.status(404).send('No data found');
        }
        res.send(data[0]);
      } catch (err) {
        res.status(500).send('Internal Server Error');
      }
    },
    update: async (req, res, next) => {
        const columnKey = `tagWall${req.body.contentType}`;
        const columnValue = req.body.value;
      try {
        
        const { error } = await supabase
            .from('users')
            .update({ [columnKey]: columnValue})
            .eq('email', req.body.email);
                    
        if (error) {
          return res.status(500).send(error);
        }
      } catch (err) {
        res.status(500).send('Internal Server Error');
      }
    }
  };
  
