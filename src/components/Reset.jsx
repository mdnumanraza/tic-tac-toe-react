import GameState from "./GameState";
import replay from '../replay.png'

function Reset({ gameState, onReset,quote , handleClose}) {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    <>
    <div className="reset">

    <button onClick={ ()=>{
      onReset(); 
      handleClose();
    }}
      className="reset-button">
      Play Again  &nbsp; <img src={replay} alt="🔁" />
    </button>

      <div className="quotebox">
        <h3>Quote</h3>

     <i>	&ldquo;{quote.quote}&rdquo;</i> 
      </div>
    </div>
    </>
  );
}

export default Reset;
