var arrNum = [];
for (let i = 0; i < 45; i++) {
    arrNum[i] = i + 1;
}// 45배열

//하나뽑기 함수
var num = 1;
function pickOrdered(){
    var target = document.getElementById("lotto"+num);
    num++;
    if (arrNum.length > 39){
        var randIdx = parseInt(Math.random() * arrNum.length);
        target.innerHTML = arrNum[randIdx];
        arrNum.splice(randIdx, 1);
    }
    else{
        alert('6개 다 뽑았습니다.')
    }
}

//전부 뽑기
function pickAllLotto(){
    const arrNum = [];
    const myNum = [];

    for (let i = 0; i < 45; i++) {
        arrNum[i] = i + 1;
    }// 45배열

    for (let i = 0; i < 6; i++) {
        const randIdx = parseInt(Math.random() * arrNum.length);
        myNum.push(arrNum[randIdx]); //내 배열에 넣고
        arrNum.splice(randIdx, 1); //주머니 속의 그 숫자 제거
    }
    console.log(myNum);
    for (let i = 0; i <= 5; i++){
        var target = document.getElementById("lotto" + (i+1));
        target.innerHTML = myNum[i];
    }
    alert('6개 다 뽑았습니다.');
}

//버튼 별로 무작위 뽑기
function pickOne(clikedname){
    var target = document.getElementById("lotto"+clikedname);
    if (arrNum.length > 39){
        var randIdx = parseInt(Math.random() * arrNum.length);
        target.innerHTML = arrNum[randIdx];
        arrNum.splice(randIdx, 1);
    }
    else{
        alert('6개 다 뽑았습니다.');
    }
}