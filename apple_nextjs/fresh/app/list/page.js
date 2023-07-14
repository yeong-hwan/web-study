"use client";
// import Image from "next/image";
// import imageSet from "/public/food0.png";
import { useState } from "react";

export default function List() {
  let goods = ["Tomatoes", "Pasta", "Coconut"];
  let [cnt, setCnt] = useState([0, 0, 0]);
  let i = 0;

  return (
    <div>
      <h4 className="title">상품목록</h4>

      {goods.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{a} $40</h4>
            <button
              onClick={() => {
                let cntCopy = [...cnt];
                cntCopy[i]--;
                setCnt(cntCopy);
              }}
            >
              -
            </button>
            <span> {cnt[i]} </span>
            <button
              onClick={() => {
                let cntCopy = [...cnt];
                cntCopy[i]++;
                setCnt(cntCopy);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
