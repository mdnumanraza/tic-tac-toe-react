import GameState from "./GameState";


function GameOver({ gameState ,quote }) {


  switch (gameState) {
    case GameState.inProgress:
      return <></>;

    case GameState.playerOWins:
      return <div className="">
                  <div className="game-over">
                    O Wins 🎉
                  </div>
                    <div className="quotebox">
                      {quote.quote}
                    </div>
              </div>;

    case GameState.playerXWins:
      return <div className="">
                  <div className="game-over">
                    X Wins 🎉
                  </div>
                  <div className="quotebox">
                  {quote.quote}
                  </div>
              </div>;

    case GameState.draw:
      return <div className="game-over">Draw 🔄</div>;
    default:
      return <></>;
  }
}

export default GameOver;
