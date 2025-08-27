// // פונקציה שמחזירה מספר רנדומלי בין 1 ל-100
export function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// מייצרת מערך של 49 מספרים רנדומליים
export function createBingoArray() {
  const bingoArr = [];
  while (bingoArr.length < 49) {
    const rnd = getRandomNumber();
    if (!bingoArr.includes(rnd)) {
      bingoArr.push(rnd);
    }
  }
  return bingoArr;
}

// מייצר את הטבלה
export function creaTable(numbers) {
  const table = document.getElementById("bingo-table");
  table.innerHTML = "";

  const size = 7;

  for (let i = 0; i < size; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < size; j++) {
      const cell = document.createElement("td");
      const index = i * size + j;
      cell.textContent = numbers[index];
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}

// בודק אם יש ניצחון
export function checkWin() {
  const size = 7;
  const table = document.getElementById("bingo-table");
  const cells = table.getElementsByTagName("td");

  // לבדוק שורות
  for (let i = 0; i < size; i++) {
    let win = true;
    for (let j = 0; j < size; j++) {
      const index = i * size + j;
      if (!cells[index].classList.contains("marked")) {
        win = false;
        break;
      }
    }
    if (win) {
      setTimeout(() => alert("ניצחת בשורה!"), 100);
      disableBoard();
      return;
    }
  }

  // לבדוק טורים
  for (let j = 0; j < size; j++) {
    let win = true;
    for (let i = 0; i < size; i++) {
      const index = i * size + j;
      if (!cells[index].classList.contains("marked")) {
        win = false;
        break;
      }
    }
    if (win) {
      setTimeout(() => alert("ניצחת בטור!"), 100);
      disableBoard();
      return;
    }
  }
}

// מנטרל את הלוח
export function disableBoard() {
  const cells = document.querySelectorAll("#bingo-table td");
  cells.forEach((c) => (c.style.pointerEvents = "none"));
}
