let myVoca = {
  addVoca: function (voca, value) {
    myVoca[voca] = value;
  },
  deleteVoca: function (key) {
    delete myVoca[key];
  },
  printVoca: function (voca) {
    console.log(`"${voca}"의 뜻은 "${myVoca[voca]}"입니다.`)
  }
};

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');

// {
//   addVoca: [Function: addVoca],
//   deleteVoca: [Function: deleteVoca],
//   printVoca: [Function: printVoca],
//   key: '속성'
// }
// {
//   addVoca: [Function: addVoca],
//   deleteVoca: [Function: deleteVoca],
//   printVoca: [Function: printVoca]
// }
// undefined