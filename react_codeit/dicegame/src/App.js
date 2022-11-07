import Dice from "./Dice";

function App() {
  return (
    <div>
      <Dice color="red" num={2} />
    </div>
  );
}

export default App;

/*

이번 실습에서는 앞에서 만들었던 HandIcon 컴포넌트에다 Props 를 적용해봅시다.

Prop 의 값에 따라 가위, 바위, 보 이미지를 보여줄 건데요.

아래를 참고해서 HandIcon.js 에 컴포넌트를 작성해주세요.

HandIcon 컴포넌트에는 value 라는 prop 이 있습니다.
img 태그의 src 속성은 value 의 값에 따라 다음과 같이 지정해주세요.
'rock' 인 경우 rockImg 를 보여줍니다.
'scissor' 인 경우 scissorImg 를 보여줍니다.
'paper' 인 경우 paperImg 를 보여줍니다.
img 태그의 alt 속성은 value 값으로 지정해주세요.


*/
