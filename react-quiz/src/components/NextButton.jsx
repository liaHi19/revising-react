const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  if (answer === null) return null;
  const isNextBtn = index < numQuestions - 1;

  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        isNextBtn
          ? dispatch({ type: "nextQuestion" })
          : dispatch({ type: "finish" });
      }}
    >
      {isNextBtn ? "Next" : "Finish"}
    </button>
  );
};

export default NextButton;
