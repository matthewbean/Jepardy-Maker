import React, { useContext } from 'react'
import Category from './Category'
import QuestionContext from '../context/questionContext'
import Fullscreen from './fullscreen';

const Board = () => {
    const questionContext = useContext(QuestionContext);
    const { game, fullscreen } = questionContext;
    const { catagories } = game;

    if(fullscreen){
        return(
            <div className = "board">
            <Fullscreen />
            </div>
        )
    }
    return (
        <div className = "board">
{catagories.map((catagory, index)=><Category category = {catagory} key = {index}/>)
            }
        </div>
    )
}

export default Board
