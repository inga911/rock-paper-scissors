import { useEffect, useState } from "react";
import mainStore from "../store/mainStore";

function GameComponent({ hand }) {
  const {
    hands,
    setHand,
    setMessage,
    message,
    playerResult,
    computerResult,
    addPlayerResult,
    addComputerResult,
    playedGame,
    game,
  } = mainStore();

  const [computerHand, setComputerHand] = useState("");

  function getRandomHand() {
    const randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];
  }

  useEffect(() => {
    if (hand) {
      const randomHand = getRandomHand();
      setComputerHand(randomHand);
    }
  }, [hand]);

  function resetGame() {
    setTimeout(() => {
      setComputerHand("");
      setHand("");
      setMessage("");
    }, 1000);
  }

  function playGame() {
    if (hand === "") {
      return setMessage("Plese choose your hand");
    }
    setTimeout(() => {
      gameLogic();
      resetGame();
    }, 200);
  }

  function gameLogic() {
    let result;
    if (computerHand === hand) {
      result = "draw";
      setMessage("It's a draw!");
    } else if (
      (computerHand === "✊" && hand === "✌️") ||
      (computerHand === "✌️" && hand === "🫱") ||
      (computerHand === "🫱" && hand === "✊")
    ) {
      result = "computer";
      setMessage("Computer won!");
      addComputerResult();
    } else {
      result = "player";
      setMessage("You won!");
      addPlayerResult();
      playedGame({ playerHand: hand, computerHand, result });
    }
  }

  return (
    <div className="game-comp">
      <div className="game-result">
        <span class="material-symbols-outlined">computer</span> {computerResult}{" "}
        - {playerResult} <span class="material-symbols-outlined">person</span>
        <span style={{ fontSize: "15px" }}>(round {game.length})</span>
      </div>
      <div className="top">
        <div className="computer box">{computerHand}</div>
        <div className="info-msg">{message}</div>
        <div className="player box">{hand}</div>
      </div>
      <button onClick={playGame}>Play</button>
    </div>
  );
}

export default GameComponent;
