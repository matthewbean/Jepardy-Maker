import React, { useContext } from 'react'
import QuestionContext from '../context/questionContext';

const Question = ({question, categoryKey}) => {
    const questionContext = useContext(QuestionContext);
    const { goFullscreen } = questionContext;
    const click = ()=>{
        goFullscreen(categoryKey, (question.value/100-1));
    };
    
    return (

        <button className = "question" onClick = {click}>
    {question.value}
            </button>
    )
}

export default Question
