import { LOGIN ,LOGTO} from "../constants/login"

export default function login(state = {},action){
    switch(action.type){
        case LOGIN:
            return state = action.data;
        case LOGTO:
            return state = action.data;
        default :
            return state;
    }
}
