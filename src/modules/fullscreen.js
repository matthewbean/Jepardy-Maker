import React, { useContext } from 'react'
import QuestionContext from "../context/questionContext"

const Fullscreen = () => {
    const questionContext = useContext(QuestionContext);
    const { currentQuestion } = questionContext
    return (
        <div className = "full">
            {currentQuestion !== null? currentQuestion.question: " "}
        </div>
    )
}

export default Fullscreen
