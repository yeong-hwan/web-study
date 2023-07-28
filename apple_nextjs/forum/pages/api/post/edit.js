import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  // res.status(200).json(req.body)
  if (req.method == "POST") {
    if (req.body.title == "") {
      res.status(500).json("Write title");
    } else {
      const client = await connectDB;
      const db = client.db("forum");
      
      let updateThing = {title : req.body.title, content : req.body.content}
      let result = await db.collection("post").updateOne({_id : new ObjectId(req.body._id) }, {$set : updateThing});
      // console.log(result)
      res.redirect(302, "/list");
    }
  }
}