import React from "react";
import {connect} from "react-redux";
import {finishQuiz, saveAnswer} from "../redux/actions";
import {htmlDecode, shuffleArray} from "../utils";

const Quiz = ({quiz, questions, saveAnswer, finishQuiz}) => {
    const [pickedAnswer, setPickedAnswer] = React.useState('');
    const [answers, setAnswers] = React.useState([]);
    const [correctAnswer, setCorrectAnswer] = React.useState('')
    const [question, setQuestion] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        if (questions.length - 1 === quiz.currentPosition) {
            saveAnswer(correctAnswer, pickedAnswer);
            finishQuiz();
        }
        else {
            saveAnswer(correctAnswer, pickedAnswer);
            setPickedAnswer('');
        }
    };

    const onRadioChange = (event) => {
        setPickedAnswer(event.target.value);
    };

    React.useEffect(() => {
        let questionObj = questions.filter((item, index) => {
            return index === quiz.currentPosition;
        })[0];
        let answers = shuffleArray(questionObj['incorrect_answers'].concat([questionObj['correct_answer']]));

        setCorrectAnswer(questionObj['correct_answer']);
        setAnswers(answers);
        setQuestion(questionObj.question);
    }, [questions, quiz.currentPosition]);

    return (
        <>
            <h1 className="text-center mb-4">Question</h1>
            <div className="row">
                <div className="offset-md-2 col-md-8">
                    <>
                        <blockquote className="blockquote text-center" >
                            <p className="mb-0">{htmlDecode(question)}</p>
                        </blockquote>
                        <form className="text-center" onSubmit={onSubmit}>
                            {
                                answers.map((answer, index) => {
                                    return (
                                        <div className="custom-control custom-radio" key={index}>
                                            <input type="radio" id={'answer' + index} name="answer" value={answer} onChange={onRadioChange}
                                                   className="custom-control-input" checked={(pickedAnswer === answer)}/>
                                            <label className="custom-control-label"
                                                   htmlFor={'answer' + index}>{htmlDecode(answer)}</label>
                                        </div>
                                    )
                                })
                            }
                            <button type="submit" className="btn btn-success mt-4" disabled={!pickedAnswer}>Answer</button>
                        </form>
                    </>
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

export default connect(mapStateToProps, {saveAnswer, finishQuiz})(Quiz);
