import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Row from "./row";
import {moveRight, moveLeft, moveDown, moveUp} from '../reducers/actions'
import { getPhotos } from '../api/api';

let isDelay = false;
function debounce(func, delay) {
    return () => {
        if (isDelay) {
            return false;
        }else {
            isDelay = true;
            func();
            setTimeout(() => {
                isDelay = false
            }, delay);
        }
    };
}

const Page = props => {

    const handleKeys = event => {
      switch(event.key) {
          case 'ArrowUp':
              event.preventDefault();
              props.moveToUp();
              break;
          case 'ArrowDown':
              event.preventDefault();
              props.moveToDown();
              break;
          case 'ArrowLeft':
              event.preventDefault();
              props.moveToLeft();
              break;
          case 'ArrowRight':
              event.preventDefault();
              props.moveToRight();
              break;
          default: event.preventDefault();
      }

        if(props.position.row === props.images.length-2){
            props.loadMore();
        }
    }

    const handleScroll =  (e) => {
        if(e.deltaY > 0){
            props.moveToDown();
        }else{
            props.moveToUp();
        }
    }

   useEffect(()=>{
       props.getData();
   },[]);

    return(
        <div className="App"
             onKeyDown={handleKeys}
             onWheel={e=>debounce(()=>handleScroll(e),500)()}
             tabIndex="0">
            {props.images && props.images.map((imgs, index)=>(
                <Row key={imgs.id} images={imgs} position={props.position.row === index && props.position}/>
            )) }
        </div>
    )
}

const mapImagesToRow = array => {
    let rowSize = 5;
    let subarray = [];
    for (let i = 0; i <array.length/rowSize; i++){
        subarray[i] = array.slice((i*rowSize), (i*rowSize) + rowSize);
    }
    return subarray;
}

const props = state => ({
    position: state.navigation,
    images: mapImagesToRow(state.images.images),
});

const actions = dispatch => ({
    moveToRight: () => dispatch(moveRight()),
    moveToLeft: () => dispatch(moveLeft()),
    moveToDown: () => dispatch(moveDown()),
    moveToUp: () => dispatch(moveUp()),
    getData: () => dispatch(getPhotos(50)),
    loadMore: () => dispatch(getPhotos(40)),
})


export default connect(props, actions)(Page);