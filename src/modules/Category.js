import React from 'react'
import Question from './question'

const Category = ({ category, number }) => {
    const { questions } = category;
    return (
        <div className = "topic">
            <div className = "category-title">{category.title}</div>
            {questions.map((question, index)=><Question categoryKey = {number} question = {question} key = {index}/>)
            }
        </div>
    )
}

export default Category
