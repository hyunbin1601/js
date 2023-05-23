var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';
//왜 싹다 문자열로 만들어 놨을까...?
//위의 변수를 활용하여 날짜와 시간 출력하기
var result = year.concat("/") + month.concat("/") + day +  hour.concat(":" + minute); + ": 27";
console.log(result); 
//아직 미완성, 자꾸 second 값이 뜨질 않는다