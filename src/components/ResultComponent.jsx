import mainStore from "../store/mainStore";

function ResultComponent() {
  const { game } = mainStore();

  const today = new Date();
  const date = today.toLocaleDateString();
  const time = today.toLocaleTimeString();

  return (
    <div className="result">
      <div className="title">Result</div>
      <div className="results-list">
        {game
          .map((g, index) => (
            <div
              key={index}
              style={{
                backgroundColor:
                  g.result === "player"
                    ? "#94ff945e"
                    : g.result === "computer"
                    ? "#ff6b6b52"
                    : "",
                padding: "4px 7px",
                border: "1px  solid lightgrey",
                borderRadius: "5px",
              }}
            >
              {date} {time}
              <div>
                Player: {g.playerHand} | Computer: {g.computerHand} | Result:
                {g.result === "player"
                  ? " Player won"
                  : g.result === "computer"
                  ? " Computer won"
                  : " Draw"}
              </div>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
}

export default ResultComponent;
