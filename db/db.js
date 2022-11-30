const mongoose = require("mongoose");

const connectDB = async (uri) => {
  try {
    
        const conn = await mongoose.connect(process.env.MONGO_URI, {
      //must add in order to not get any error masseges:
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`mongo database is connected!!! ${conn.connection.host} `);
//     await mongoose.connect(uri);
//     console.log("DB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
