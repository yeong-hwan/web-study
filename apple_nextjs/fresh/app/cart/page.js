import { age, name } from "./page.js";

export default function Cart() {
  let basket_DB = ["Tomatoes", "Pasta"];

  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={basket_DB[0]} />
      <CartItem />
      <CartItem />
      <Banner content="hyondai" />
      <Banner content="samsung" />
      <Button buttonColor="blue" />
    </div>
  );
}

function Banner(props) {
  return <h5>{props.content} on sale</h5>;
}

function Button(props) {
  return <button style={{ color: props.buttonColor }}>Button</button>;
}

// Component
function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

// return 안에는 최상단 태그 하나만

// server component(default), client component 종류 나뉨
// 'use client' 파일 맨 위에
