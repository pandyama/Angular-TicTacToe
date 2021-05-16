import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gameplay",
  templateUrl: "./gameplay.component.html",
  styleUrls: ["./gameplay.component.scss"],
})
export class GameplayComponent implements OnInit {
  clicked = false;
  activePlayer = true;

  winner = "NONE";

  gameDone = false;

  winMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  squares: String[];

  playerX = [];
  playerO = [];

  constructor() {}

  ngOnInit() {
    this.squares = Array(9).fill(null);
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.activePlayer = true;
    this.gameDone = false;
    this.winner = "NONE";
  }

  pressed(input) {
    if (this.activePlayer) {
      console.log(input);
      if (this.squares[input] == null) {
        this.squares[input] = "X";
        console.log(this.squares);
        this.playerX.push(input);
        this.activePlayer = !this.activePlayer;
      }
    } else {
      if (this.squares[input] == null) {
        this.squares[input] = "O";
        this.playerO.push(input);
        this.activePlayer = !this.activePlayer;
      }
    }

    console.log("-------------");
    console.log(this.playerX);
    console.log(this.playerO);
    console.log("-------------");

    // const [a,b,c] = this.winMoves[0];

    for (let i in this.winMoves) {
      const [a, b, c] = this.winMoves[i];
      if (
        this.squares[a] == "X" &&
        this.squares[b] == "X" &&
        this.squares[c] == "X"
      ) {
        console.log("X won");
        this.gameDone = true;
        this.winner = "X";
        this.newGame();
      } else if (
        this.squares[a] == "O" &&
        this.squares[b] == "O" &&
        this.squares[c] == "O"
      ) {
        console.log("O won");
        this.gameDone = true;
        this.winner = "O";
        this.newGame();
      }
    }
  }
}
