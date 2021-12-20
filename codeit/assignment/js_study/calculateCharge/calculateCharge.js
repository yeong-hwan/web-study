function calculateChange(payment, cost) {
  let money = payment - cost;
  function bild(amount){
    const count = Math.floor(money/amount);
   money = money - count * amount;
    console.log(`${amount}원 지폐: ${count.toFixed(0)}장`);
  }
  bild(50000);
  bild(10000);
  bild(5000);
  bild(1000);
}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);