import mongoose from "mongoose";

const uri = `${process.env.DBURI}/${process.env.DBNAME}`;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected✨");
  })
  .catch((err) => {
    console.log(err);
  });
