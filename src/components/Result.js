import React from "react";
import {connect} from "react-redux";
import {restartQuiz} from "../redux/actions";

const Result = ({quiz, questions, restartQuiz}) => {
    return (
        <>
            <h1 className="text-center">Results</h1>
            <div className="row">
                <div className="offset-md-2 col-md-8 text-center">
                    <p>Score: {quiz.score} / {questions.length}</p>
                    <p>Time: {quiz.endTime.diff(quiz.startTime, 'minutes', true).toFixed(2)} minutes</p>
                    <button className="btn btn-success" onClick={restartQuiz}>Restart Quiz</button>
                </div>
            </div>
        </>

    );
};

const mapStateToProps  = (state) => {
    return {
        quiz: state.quiz,
        questions: state.menu.questions
    }
};

export default connect(mapStateToProps, {restartQuiz})(Result);
