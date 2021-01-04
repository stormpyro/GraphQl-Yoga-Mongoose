import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/graphqltest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log(">>>>DB connected"))
  .catch((err) => console.log(err));
