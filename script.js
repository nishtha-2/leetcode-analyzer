const button = document.querySelector(".analyse");
const input = document.querySelector(".input");
const result = document.querySelector(".result");
const valid = /^[a-zA-Z0-9_-]+$/;
button.addEventListener("click", analyzeUser);

input.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        analyzeUser();
    }
});
result.innerHTML = "<h2>Analyzing LeetCode Profile...</h2>";
function analyzeUser(){

    const username = input.value.trim();

    if(!valid.test(username)){
        alert("Please enter a valid username");
        return;
    }

    const easy = 120;
    const medium = 80;
    const hard = 15;

    const total = easy + medium + hard;

    const easyPercent = Math.round((easy / total) * 100);
    const mediumPercent = Math.round((medium / total) * 100);
    const hardPercent = Math.round((hard / total) * 100);

    result.innerHTML = "<h2>Analyzing LeetCode Profile...</h2>";

setTimeout(() => {

    result.innerHTML = `
        <h2>${username}</h2>

        <div class="stats">

            <div class="card">
                <h3>Easy</h3>
                <p>${easy}</p>

                <div class="progress-container">
                    <div class="progress-bar"
                         style="width:${easyPercent}%">
                    </div>
                </div>

                <small>${easyPercent}%</small>
            </div>

            <div class="card">
                <h3>Medium</h3>
                <p>${medium}</p>

                <div class="progress-container">
                    <div class="progress-bar"
                         style="width:${mediumPercent}%">
                    </div>
                </div>

                <small>${mediumPercent}%</small>
            </div>

            <div class="card">
                <h3>Hard</h3>
                <p>${hard}</p>

                <div class="progress-container">
                    <div class="progress-bar"
                         style="width:${hardPercent}%">
                    </div>
                </div>

                <small>${hardPercent}%</small>
            </div>

        </div>

        <h3>Total Solved: ${total}</h3>
    `;

}, 15);
        
    setTimeout(() => {
        result.classList.add("Analyzing LeetCode profile...");
    }, 100);
}