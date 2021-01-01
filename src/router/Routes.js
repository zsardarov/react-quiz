import React from "react";
import {Route, Switch} from "react-router-dom";
import Quiz from "../components/Quiz";
import Menu from "../components/Menu";
import {connect} from "react-redux";
import {QUIZ_STATUSES} from "../enums";
import Result from "../components/Result";

const Routes = ({quizStatus}) => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    {
                        quizStatus === QUIZ_STATUSES.NOT_STARTED ? <Menu/> : (quizStatus === QUIZ_STATUSES.STARTED ?
                            <Quiz/> : <Result/>)
                    }
                </Route>
            </Switch>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        quizStatus: state.quiz.status
    };
};

export default connect(mapStateToProps, null)(Routes);
