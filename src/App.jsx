import "./App.css";
import ChooseComponent from "./components/ChooseComponent.jsx";
import GameComponent from "./components/GameComponent.jsx";
import ResultComponent from "./components/ResultComponent.jsx";
import mainStore from "./store/mainStore.jsx";

function App() {
  const { hand, setHand } = mainStore();

  function updateHand(newHand) {
    setHand(newHand);
  }
  return (
    <div className="App">
      <div className="main-game">
        <GameComponent hand={hand} />
        <ChooseComponent updateHand={updateHand} />
      </div>
      <ResultComponent />
    </div>
  );
}

export default App;
