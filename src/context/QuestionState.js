import React, { useReducer } from 'react';
import questionReducer from './questionReducer';
import QuestionContext from './questionContext';

const QuestionState = props =>{

const initialState = {
    category1: {
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
    category2: {
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
    category3: {
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
    category4: {
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
    category5: {
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
    category6: {
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
    }
    const [state, dispatch] = useReducer(questionReducer, initialState);

    return(
        <QuestionContext.Provider
        value = {{
            category1: state.category1,
            category2: state.category2,
            category3: state.category3,
            category4: state.category4,
            category5: state.category5,
            category6: state.category6
        }}>
            {props.children}
        </QuestionContext.Provider>

        
    )

}



export default QuestionState