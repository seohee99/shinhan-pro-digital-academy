import dotenv from 'dotenv';

async function DBConnection(DBurl) {
    try {
      mongoose.connect(DBurl, {retryWrites: true, w: "majority", })
        .then((resp) => {
          console.log(resp);
          console.log("SUCCESS CONNECTION");
          // const DB = client.db("movie");
        });
        return DB;
    } catch (error) {
          // console.error(error);
          console.log("ERR")
          return null;
    }
  }
  
  async function watchaData(){
    

    dotenv.config();
    const DB_USER = process.env.DB_USER;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const DB_HOST = process.env.DB_HOST;
    const DB_NAME = process.env.DB_NAME;

    const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
    // const DB = DBConnection(DB_URL);
    
    // console.log(DB)
    
  }
  
  watchaData();
  