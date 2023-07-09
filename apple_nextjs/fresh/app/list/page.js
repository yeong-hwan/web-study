import Link from "next/link";

export default function List() {
  let goods = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {goods.map((a, i) => {
        return (
          <div className="food" key={i}>
            <h4>{a} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
