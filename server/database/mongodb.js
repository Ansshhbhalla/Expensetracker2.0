import mongoose from "mongoose";
mongoose.set('strictQuery', false);
async function connect() {
  const username = process.env.MONGO_DB_USERNAME;
  const password = process.env.MONGO_DB_PASSWORD;
  const url = process.env.MONGO_DB_URL;
  await mongoose
    .connect(
      `mongodb+srv://${username}:${password}@${url}/?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => console.log("MongoDB connection is successful"));
}
//mongodb+srv://micrb942:<db_password>@/?retryWrites=true&w=majority&appName=Cluster0
export default connect;
