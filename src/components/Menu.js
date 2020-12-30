import React from "react";
import Axios from "axios";
import {connect} from "react-redux";
import {storeCategories, storeQuestions, startQuiz} from "../redux/actions";

const Menu = ({categories, storeCategories, storeQuestions, startQuiz}) => {
    React.useEffect( () => {
        const fetchCategories = async () => {
            const result = await Axios(
                'https://opentdb.com/api_category.php',
            );
            storeCategories(result.data.trivia_categories);
        };
        if (categories.length === 0) {
            fetchCategories();
        }
    });

    const categoryRef = React.createRef();
    const difficultyRef = React.createRef();

    const onMenuSubmit = (event) => {
        event.preventDefault();
        let categoryValue = categoryRef.current.value;
        let difficultyValue = difficultyRef.current.value;

        Axios(`https://opentdb.com/api.php?amount=10&type=multiple&category=${categoryValue}&difficulty=${difficultyValue}`)
            .then((result) => {
                storeQuestions(result.data.results);
                startQuiz();
            });
    };

    return (
        <>
            <h1 className="text-center mb-4">Quiz App</h1>
            <div className="row">
                <div className="offset-md-4 col-md-4">
                    <form onSubmit={onMenuSubmit}>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select className="form-control" id="category" ref={categoryRef}>
                                {
                                    categories.map((category) => {
                                        return (
                                            <option key={category.id} value={category.id}>{category.name}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="difficulty">Difficulty</label>
                            <select className="form-control" id="difficulty" ref={difficultyRef}>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                        <button className="btn btn-success w-100">Start Quiz</button>
                    </form>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.menu.categories
    };
};

export default connect(mapStateToProps, {storeCategories, storeQuestions, startQuiz})(Menu);
