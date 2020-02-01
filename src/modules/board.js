import React, { useContext } from 'react'
import Category from './Category'
import QuestionContext from '../context/questionContext'
import Fullscreen from './fullscreen';

const Board = () => {
    const questionContext = useContext(QuestionContext);
    const { game, fullscreen } = questionContext;
    const { categories } = game;

    if(fullscreen){
        return(
            <div className = "board">
            <Fullscreen />
            </div>
        )
    }
    return (
        <div className = "board">
{categories.map((catagory, index)=><Category number = {index} category = {catagory} key = {index}/>)
            }
        </div>
    )
}

export default Board
