const pwdDp = document.querySelector("#pwdDisplay");
const genBtn = document.getElementById("genButton");
const neededStringInpt = document.querySelector("#neededStringInpt");
const lengthSlide = document.getElementById("lengthSlide");

/**필수 문자열과 최소 길이를 입력자로 수신, pwdDp에 출력 */
function genPwd(event){
    event.preventDefault();
    pwdDp.innerText = `${neededStringInpt.value}${Math.random().toString(36).substring(2,parseInt(lengthSlide.value)-neededStringInpt.value.length)}`;
}

genBtn.addEventListener("click",genPwd);