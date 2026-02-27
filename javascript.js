const pa = document.getElementById("ye");
const button1 = document.getElementById("startTimer");
const button2 = document.getElementById("stopTimer");
const button3 = document.getElementById("resetTimer");
let vari = 0;
let mytimmy;
button1.addEventListener("click", funci);
button2.addEventListener("click", funciano);
button3.addEventListener("click", funcilero);
function funci() {
    mytimmy = setInterval(function funcittini() {pa.innerHTML = vari; vari++} , 1000);
};
function funciano() {
    clearInterval(mytimmy)
};
function funcilero() {
    funciano();
    vari = 0;
    pa.innerHTML = vari;
}