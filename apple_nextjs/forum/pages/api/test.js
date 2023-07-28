import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  // console.log(result);

  if (req.method == "POST") {
    return res.status(200).json('good status')
  } else if (req.method == "GET") {
    return res.status(200).json(result)
  }
}