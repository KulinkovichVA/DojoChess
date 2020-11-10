let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

let chessBoard = letters.map(letter => {
    let row = [];
    for (let i = 0; i < letters.length; i++) {
        row.push(`${letter} - ${i + 1}`);
    }
    return row;
});
console.log(chessBoard);

divChess = document.querySelector(".Chess");
for (let i = 0; i < 8; i++)
{
  const row = document.createElement("p");
  for (let j = 0; j < 8; j++){
    const cell = document.createElement("span");
    cell.classList.add("cell");
    cell.innerHTML = chessBoard[i][j];
    row.appendChild(cell);
  }
  divChess.appendChild(row);
}