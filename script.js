const choices = ["Rock", "Paper", "Scissors"];
const comDiv = document.querySelector("#com");
const userInput = document.querySelector("#userInput");
const result = document.querySelector("#result");
const playBtn = document.querySelector("#playBtn");

playBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * 3);
    const selection = userInput.value.toLowerCase();

    comDiv.innerHTML = `<h2>COM: ${choices[randomIndex]}</h2>`;

    if (selection === choices[randomIndex].toLowerCase()) {
        result.textContent = "It's a Tie!";
    } else if (
        (selection === "rock" && choices[randomIndex] === "Scissors") ||
        (selection === "paper" && choices[randomIndex] === "Rock") ||
        (selection === "scissors" && choices[randomIndex] === "Paper")
    ) {
        result.textContent = "You Win!";
    } else {
        result.textContent = "You Lose!";
    }
});