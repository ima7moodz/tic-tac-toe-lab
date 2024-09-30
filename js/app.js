/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll(".sqr")
const messageEls = document.querySelector("#message")
const resetEls = document.querySelector(".reset")

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
]
/*---------------------------- Variables (state) ----------------------------*/
let board
let turn
let winner
let tie
/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
const init = () => {
  console.log("The game started!!!")
  board = ["", "", "", "", "", "", "", "", ""]
  turn = "X"
  winner = false
  tie = false
  render()
}

const handleClick = (event) => {
  const target = event.target
  const sqrIndex = parseInt(target.id)

  if (board[sqrIndex] !== "" || winner) {
    return
  }
  placePiece(sqrIndex)
  checkForTie()
  checkForWinner()
  switchPlayerTurn()
  render()
}

const placePiece = (index) => {
  board[index] = turn
  console.log(board)
}

const checkForWinner = () => {
  winningCombos.forEach((combo) => {
    const [a, b, c] = combo
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      winner = true
    }
  })
  console.log(`${winner} winner`)
}

const checkForTie = () => {
  if (winner) return
  tie = !board.includes("")
  console.log(`${tie} tie`)
}

const switchPlayerTurn = () => {
  if (winner) return
  turn = turn === "X" ? "O" : "X"
  console.log(turn)
}

const render = () => {
  updateBoard()
  updateMessage()
}

const updateBoard = () => {
  board.forEach((cell, index) => {
    const square = squareEls[index]
    square.textContent = cell
  })
}

const updateMessage = () => {
  if (winner) {
    messageEls.textContent = `${turn} is the winner`
  } else if (tie) {
    messageEls.textContent = `Game Tie`
  } else {
    messageEls.textContent = `${turn} Your turn`
  }
}

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach((square) => {
  square.addEventListener("click", handleClick)
})

resetEls.addEventListener("click", init)
window.onload = init

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
