import { age, name } from "./page.js";

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem />
    </div>
  );
}

// Component
function CartItem(props) {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

// return 안에는 최상단 태그 하나만

// server component(default), client component 종류 나뉨
// 'use client' 파일 맨 위에
