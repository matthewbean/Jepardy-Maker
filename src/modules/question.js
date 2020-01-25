import React, { useContext } from 'react'


const Question = ({question}) => {
    

    const click = ()=>console.log("clicked");
    
    return (

        <button className = "question" onClick = {click}>
            {question.value}
        </button>
    )
}

export default Question
