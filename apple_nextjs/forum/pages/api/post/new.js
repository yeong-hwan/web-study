import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  // res.status(200).json(req.body)
  if (req.method == "POST") {
    const client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection('post').insertOne(req.body) 
    // console.log(result)
    res.redirect(302, '/list')
  }
}