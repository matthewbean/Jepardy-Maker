import React, { useContext } from 'react'
import QuestionContext from "../context/questionContext"

const Fullscreen = () => {
    const questionContext = useContext(QuestionContext);
    const { currentQuestion, leaveFullscreen } = questionContext;
    const back = ()=>{
        console.log('go back');
        console.log(currentQuestion.questionID)
        leaveFullscreen(currentQuestion.questionID);

    }
    return (
        <div className = "full">
            {currentQuestion !== null? currentQuestion.question: " "}
            <button onClick = {back}>back</button>
        </div>
    )
}

export default Fullscreen
