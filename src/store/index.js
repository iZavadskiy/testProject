import { combineReducers } from 'redux';
import navigation from "./navigation";
import images from "./getImages";


const mainReducer = combineReducers({
    navigation,
    images
});


export default mainReducer;