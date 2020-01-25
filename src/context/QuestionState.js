import React, { useReducer } from 'react';
import questionReducer from './questionReducer';
import QuestionContext from './questionContext';

const QuestionState = props =>{

const initialState = {
    fullscreen: false,
    game:{
        title: "Jepardy",
        catagories: [
    {
        title: "Repair Roulette",
        questions: [{
            value: 100,
            question: "",
            answer: ""
        },
        {
            value: 200,
            question: "",
            answer: ""
        },
        {
            value: 300,
            question: "",
            answer: ""
        },
        {
            value: 400,
            question: "",
            answer: ""
        },
        {
            value: 500,
            question: "",
            answer: ""
        },
    ]
    },
    {
        title: "icloud9",
        questions: [{
            value: 100,
            question: "",
            answer: ""
        },
        {
            value: 200,
            question: "",
            answer: ""
        },
        {
            value: 300,
            question: "",
            answer: ""
        },
        {
            value: 400,
            question: "",
            answer: ""
        },
        {
            value: 500,
            question: "",
            answer: ""
        },
    ]
    },
    {
        title: "What's Windows",
        questions: [{
            value: 100,
            question: "",
            answer: ""
        },
        {
            value: 200,
            question: "",
            answer: ""
        },
        {
            value: 300,
            question: "",
            answer: ""
        },
        {
            value: 400,
            question: "",
            answer: ""
        },
        {
            value: 500,
            question: "",
            answer: ""
        },
    ]
    },
    {
        title: "Software Surprise",
        questions: [{
            value: 100,
            question: "",
            answer: ""
        },
        {
            value: 200,
            question: "",
            answer: ""
        },
        {
            value: 300,
            question: "",
            answer: ""
        },
        {
            value: 400,
            question: "",
            answer: ""
        },
        {
            value: 500,
            question: "",
            answer: ""
        },
    ]
    },
    {
        title: "Locked Up",
        questions: [{
            value: 100,
            question: "",
            answer: ""
        },
        {
            value: 200,
            question: "",
            answer: ""
        },
        {
            value: 300,
            question: "",
            answer: ""
        },
        {
            value: 400,
            question: "",
            answer: ""
        },
        {
            value: 500,
            question: "",
            answer: ""
        },
    ]
    },
    {
        title: "Missed Connections",
        questions: [{
            value: 100,
            question: "",
            answer: ""
        },
        {
            value: 200,
            question: "",
            answer: ""
        },
        {
            value: 300,
            question: "",
            answer: ""
        },
        {
            value: 400,
            question: "",
            answer: ""
        },
        {
            value: 500,
            question: "",
            answer: ""
        },
    ]
        }
    ]
    }
    }
    const [state, dispatch] = useReducer(questionReducer, initialState);

    return(
        <QuestionContext.Provider
        value = {{
            game: state.game,
            fullscreen: state.fullscreen
        }}>
            {props.children}
        </QuestionContext.Provider>

        
    )

}



export default QuestionState