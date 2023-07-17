import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://jghff700:jyh0914@cluster0.0b1xqw7.mongodb.net/?retryWrites=true&w=majority";
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  // 변수에 저장해놓고 MongoClient는 여러번 호출 X
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
