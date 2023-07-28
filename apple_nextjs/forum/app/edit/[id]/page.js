import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";

export default async function Edit(props) {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  // console.log(props.params.id);

  // await db.collection("post").updateOne({_id : result._id}, {$set : {title : }})


  return (
    <div>
      <h4>Edit article</h4>

      <div className="write">
        <form action="/api/post/edit" method="POST">
          <input name="title" defaultValue={result.title}></input>
          <input name="content" defaultValue={result.content}></input>
          <input style={{display : "none"}} name="_id" defaultValue={result._id.toString()}/>
          <button type="submit">posting</button>
        </form>
      </div>
    </div>
  );
}