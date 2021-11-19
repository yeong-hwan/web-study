let today = new Date(2112, 8, 24);
let jaeSangStart = new Date(2109, 7, 1);

function workDayCalc(startDate) {
	diff = (today.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24 + 1;

	console.log(`오늘은 입사한 지 ${diff}일째 되는 날 입니다.`);
};

workDayCalc(jaeSangStart);