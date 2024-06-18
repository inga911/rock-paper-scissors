import mainStore from "../store/mainStore";

function ChooseComponent({ updateHand }) {
  const { hands, setMessage } = mainStore();

  function handleClick(hand) {
    updateHand(hand);
    setMessage("");
  }
  return (
    <div className="choose-comp">
      {hands.map((x, i) => (
        <div className="hand" key={i} onClick={() => handleClick(x)}>
          {x}
        </div>
      ))}
    </div>
  );
}

export default ChooseComponent;
