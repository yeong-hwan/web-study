import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  // res.status(200).json(req.body)
  if (req.method == "DELETE") {
      const client = await connectDB;
      const db = client.db("forum");
      
      // let updateThing = {title : req.body.title, content : req.body.content}
      let result = await db.collection("post").deleteOne({_id : new ObjectId(req.body) });
      
      console.log(result)

      res.status(200).json("Deletion complete")
      
      res.redirect(302, "/list");
  }
}