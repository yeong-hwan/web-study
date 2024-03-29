import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions)
  

  if (session) {
    req.body.author = session.user.email
  }

  console.log(req.body)

  // res.status(200).json(req.body)
  if (req.method == "POST") {
    if (req.body.title == "") {
      res.status(500).json("Write title");
    } else {
      const client = await connectDB;
      const db = client.db("forum");
      let result = await db.collection("post").insertOne(req.body);
      // console.log(result)
      res.redirect(302, "/list");
    }
  }
}