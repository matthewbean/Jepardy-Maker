import {GO_FULLSCREEN,
        EXIT_FULLSCREEN} from './types'
import Category from '../modules/Category';


export default(state, action)=>{
    switch(action.type){
        case GO_FULLSCREEN:
            let newCurrent = {...state.game.categories[action.payload[0]].questions[action.payload[1]]};
            console.log(newCurrent);
            newCurrent.questionID = [action.payload[0], action.payload[1]]
            return{
                ...state,
                currentQuestion: newCurrent,           
                fullscreen:true
            }
        case EXIT_FULLSCREEN:
            let newQuestions = {...state.game.categories};
            console.log(newQuestions);
            newQuestions[action.payload[0]].questions[action.payload[1]].done = true;
            return{
                ...state,
                categories: newQuestions,
                fullscreen:false
            }

        default:
            return state;
    }
}