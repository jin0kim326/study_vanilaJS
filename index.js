/*
1.variable
2.variable data type
3.Arrays + Object
4.Function
*/


/* #1.variable# */
/*
const a = 221;
let b = a - 5;
a = 4
console.log(b,a);
/*

/* #2.variable data type# */
//string 
/*
const what = "jinyoung";
console.log(what);

//boolean
const what = true;


//number
const what = 777;

//Float
const what =55.1;

*/

/*3.Arrays + Object*/
/*
const day = ["mon", "thu", "wed","thu", "fri", "sat", "sun"];
console.log(day[2]);


const jyInfo = {name:"jinyoung", age:"25", gender:"male",
                favFood:[{name:"kimchi",isSpicy:true},
                        {name:"Koki",isSpicy:false}]        
}
console.log(jyInfo);
console.log(jyInfo.favFood[0].name);

// 위에서알수있듯이 console.log에서 console은 Object임
// console.log -> 내장함수!
// console.log(console)
*/

/* 4.Function */
/*
function sayHello(name, age){
    console.log("Hello! " + name + " your age is " + age);
}
//sayHello("jinyoung", 25);


function sayHello2(name,age){
    console.log( `Hello! ${name} your age is ${age}`);
}
sayHello2("jinyoung", 25);
const greetJinyoung = sayHello2("jinyoung", 25);
console.log(greetJinyoung);


function return_sayHello(name,age){
    return `Hello! ${name} your age is ${age}`;
}

greetJinyoung = return_sayHello("jinyoung",25);
console.log(greetJinyoung);
console.log(greetJinyoung);


const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    }   
}


const add_result = calculator.add(5,3);
const sub_result = calculator.sub(5,3);
console.log(add_result, sub_result);
*/

/* 5.DOM(Document Object Module) */
// 페이지에서 자바스크립트로 선택한 것은  '객체'가 된다!!!
/*
const title = document.getElementById("title");
title.innerHTML= "ex javascrip power";
title.style.color="red"
document.title = "js - study "
console.dir(title);

//---------------------------------------------------//


const title = document.querySelector("#title");
//title.style.color="red";

function handleResize(){
        console.log("I have been resized");
}

window.addEventListener("resize", handleResize);
//window.addEventListener("resize", handleResize());  와차이 
// handleResize() -> 함수를바로호출 , handleResize는 조건에 맞아야 실행
// 즉 ()는 페이지가 실행되자마자 호출되고, handleResize는 윈도우사이즈를 변경해야 호출됨

//---------------------------------------------------//

const title = document.querySelector("#title");
function handleClick(event){
    title.style.color="blue"
}
title.addEventListener("click", handleClick);

*/


/* 6. if(조건문) */
/*

if ("10" === 10){
    console.log("hiiii");
} else if("10"==="11") {
    console.log("ho");
}else {
    console.log("lalalala");
}

//피연산자 : &&,|| 

//---------------------------------------------------//

const age = prompt("How old are you?");
if (age >=18 && age<=21) {
    console.log("you can drink but you should not")
}else if (age > 21){
    console.log("go ahead")
}else {
    console.log("too young")
}

console.log(age);

//---------------------------------------------------//

//event를 찾을때는 MDN을 찾아보자!
const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "rgb(41, 128, 185)";
function handleClick(){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();
//---------------------------------------------------//




const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";


function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}
/* 토클이 돌아가는 원리!!
function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS);
    
    if (hasClass){
        title.classList.remove(CLICKED_CLASS);
    } else{
        title.classList.add(CLICKED_CLASS);
    }
}

function init(){    
    title.addEventListener("click", handleClick);
}
init();

*/
