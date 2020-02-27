import React, { useReducer } from 'react';
import questionReducer from './questionReducer';
import QuestionContext from './questionContext';
import {GO_FULLSCREEN,
        EXIT_FULLSCREEN} from './types'

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
            answer: "",
            done: false
        },
        {
            value: 200,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 300,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 400,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 500,
            question: "",
            answer: "",
            done: false
        },
    ]
    },
    {
        title: "icloud9",
        questions: [{
            value: 100,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 200,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 300,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 400,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 500,
            question: "",
            answer: "",
            done: false
        },
    ]
    },
    {
        title: "What's Windows",
        questions: [{
            value: 100,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 200,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 300,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 400,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 500,
            question: "",
            answer: "",
            done: false
        },
    ]
    },
    {
        title: "Software Surprise",
        questions: [{
            value: 100,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 200,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 300,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 400,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 500,
            question: "",
            answer: "",
            done: false
        },
    ]
    },
    {
        title: "Locked Up",
        questions: [{
            value: 100,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 200,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 300,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 400,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 500,
            question: "How are you doing today",
            answer: "",
            done: false
        },
    ]
    },
    {
        title: "Missed Connections",
        questions: [{
            value: 100,
            question: "I am doing fine",
            answer: "",
            done: false
        },
        {
            value: 200,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 300,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 400,
            question: "",
            answer: "",
            done: false
        },
        {
            value: 500,
            question: "",
            answer: "",
            done: false
        },
    ]
        }
    ]
    }
    }
    const [state, dispatch] = useReducer(questionReducer, initialState);

    //go fullscreen
    const goFullscreen = (category, question)=>{
        dispatch({type: GO_FULLSCREEN, payload:[category, question]})
    }

    //go to answer

    // leave fullscreen
    const leaveFullscreen = (questionID)=>{
        dispatch({type: EXIT_FULLSCREEN, payload:questionID})
    }
    //set as answered

    //reset board
    return(
        <QuestionContext.Provider
        value = {{
            game: state.game,
            fullscreen: state.fullscreen,
            currentQuestion: state.currentQuestion,
            goFullscreen,
            leaveFullscreen
        }}>
            {props.children}
        </QuestionContext.Provider>

        
    )

}



export default QuestionState