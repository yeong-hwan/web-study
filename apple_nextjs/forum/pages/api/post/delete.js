import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {

  if (req.method == "DELETE") {
    let session = await getServerSession(req, res, authOptions)
    // console.log(session)

    const db = (await connectDB).db('forum')
    let current = await db.collection('post').findOne({ _id : new ObjectId(req.body) })

    
    // let updateThing = {title : req.body.title, content : req.body.content}
    if (session) {
      // console.log(current.author)
      // console.log(session.user.email)

      if(current.author == session.user.email){
        let result = await db.collection("post").deleteOne({_id : new ObjectId(req.body) });
        // res.status(200).json("Deletion complete")
        res.redirect(302, "/list");
        // console.log(result)
      } else {
        return res.status(500).json("Author discrepancy")
      }
    }
  }
}