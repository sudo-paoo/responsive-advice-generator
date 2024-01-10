const adviceId = document.getElementById("advice-id");
const adviceContent = document.getElementById("advice-content");
const adviceBtn = document.getElementById("generate-btn");
const api = "https://api.adviceslip.com/advice";

async function getAdvice() {
    const res = await fetch(api);
    const {slip:{id,advice}} = await res.json();
    adviceId.innerText = id;
    adviceContent.innerText = advice;
}

getAdvice();

adviceBtn.addEventListener("click",getAdvice);