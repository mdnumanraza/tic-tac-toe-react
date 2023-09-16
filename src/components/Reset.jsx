import GameState from "./GameState";
import replay from '../replay.png'

function Reset({ gameState, onReset }) {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    <div className="reset">

    <button onClick={onReset} className="reset-button">
      Play Again  &nbsp; <img src={replay} alt="🔁" />
    </button>
    </div>
  );
}

export default Reset;
