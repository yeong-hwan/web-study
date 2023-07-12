import Image from "next/image";
import imageSet from "/public/next.svg";

export default function List() {
  let goods = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {goods.map((a, i) => {
        return (
          <div className="food" key={i}>
            <Image src={imageSet} className="food-img" />
            <h4>{a} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
