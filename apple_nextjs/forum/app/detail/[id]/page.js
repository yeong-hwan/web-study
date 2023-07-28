import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";

export default async function Detail(props) {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  // console.log(props.params.id);

  return (
    <div>
      <h4>Detail page</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
