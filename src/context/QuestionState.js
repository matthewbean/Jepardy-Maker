import React, { useReducer } from 'react';
import questionReducer from './questionReducer';
import QuestionContext from './questionContext';
import {GO_FULLSCREEN} from './types'

const QuestionState = props =>{

const initialState = {
    fullscreen: false,
    currentQuestion: null,
    game:{
        title: "Jepardy",
        categories: [
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
            question: "How are you doing today",
            answer: ""
        },
    ]
    },
    {
        title: "Missed Connections",
        questions: [{
            value: 100,
            question: "I am doing fine",
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

    //go fullscreen
    const goFullscreen = (category, question)=>{
        dispatch({type: GO_FULLSCREEN, payload: [category, question]})
    }

    //go to answer

    //leave fullscreen

    //set as answered

    //reset board
    return(
        <QuestionContext.Provider
        value = {{
            game: state.game,
            fullscreen: state.fullscreen,
            currentQuestion: state.currentQuestion,
            goFullscreen
        }}>
            {props.children}
        </QuestionContext.Provider>

        
    )

}



export default QuestionState