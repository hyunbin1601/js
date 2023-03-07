//함수를 실행시켜 푸는 문제다.

var star = 0; //전역변수

function myFunction(input) {
    for(i=0; i<input; i++) {
        for(j=0; j<input-i-1; j++) {
            return " ";
        }
        return "*\n";
    }
}
myFunction(prompt()); //입력값을 받는다.