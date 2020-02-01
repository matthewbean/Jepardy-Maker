import {GO_FULLSCREEN} from './types'
import Category from '../modules/Category';


export default(state, action)=>{
    switch(action.type){
        case GO_FULLSCREEN:
            return{
                ...state,
                question: "action.payload",
                currentQuestion: state.game.categories[action.payload[0]].questions[action.payload[1]],
                
                fullscreen:true
            }

        default:
            return state;
    }
}