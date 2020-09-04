import axios from 'axios'
import {getImages} from "../reducers/actions";

const getUrl = count =>
    (`https://www.flickr.com/services/rest/?method=flickr.photos.getPopular&api_key=37c722755bfbfc32994675bcafd3ce31&user_id=35034348999%40N01&per_page=${count}&format=json&nojsoncallback=1`);


export const getPhotos = (count) => (dispatch) => {
    axios.get(getUrl(count))
        .then(function (response) {
            dispatch(getImages(response.data.photos.photo)) //тут вообще все надо было бы сделать через красивый pipe
        })
        .catch(function (error) {
            console.log(error);
        })
}
