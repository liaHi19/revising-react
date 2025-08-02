const FinishScreen = ({ points, maxPossiblePoints, highScore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)} %)
      </p>
      <p className="highscore">Your high score is: {highScore}</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Restart
      </button>
    </>
  );
};

export default FinishScreen;
