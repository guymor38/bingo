import {
  createBingoArray,
  creaTable,
  getRandomNumber,
  checkWin,
  disableBoard,
} from "./functions.js";

// משתנים
let numbersArray = [];
let fails = 0;
let currentRandom = null;

// בלחיצה על כפתור מופעלות 2 פונקציות (1 ליצור מערך והשניה ליצור טבלה)
document.getElementById("play").addEventListener("click", () => {
  numbersArray = createBingoArray();
  creaTable(numbersArray);
  fails = 0;
  currentRandom = null;
  document.getElementById("fails").textContent = "fails: 0";
  document.getElementById("random-result").textContent = "";

  const cells = document.querySelectorAll("#bingo-table td");

  // לולאה שמוסיפה קליק איוונט לכל תא בטבלה ובודקת אם הוא שווה למספר הרנדומלי
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (currentRandom === null) return;

      const value = parseInt(cell.textContent);

      if (value === currentRandom) {
        alert("Correct!");
        cell.style.backgroundColor = "lightgreen"; // צובע
        cell.classList.add("marked"); // מוסיף קלאס
        checkWin();
      } else {
        fails++;
        document.getElementById("fails").textContent = `Fails: ${fails}`;
        if (fails < 3) {
          alert("Invalid Number!");
        }
        if (fails >= 3) {
          alert("Gamr Over!");
          disableBoard();
        }
      }
    });
  });
});

// כפתור לקבלת מספר רנדומלי (בלחיצה)
document.getElementById("random-number").addEventListener("click", () => {
  currentRandom = getRandomNumber();
  document.getElementById(
    "random-result"
  ).textContent = ` The number is: ${currentRandom}`;
});
