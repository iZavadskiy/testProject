import React, {useRef, useEffect, useState} from 'react';
import Image from "./Image";

const MAX_VIEW_POSITION = 1020;
const MIN_VIEW_POSITION = -300;

const Row = props => {
    const [isVisible, setIsVisible] = useState(true);
    const ref = useRef();

    useEffect(()=> {
        let rowPosition = ref.current.getBoundingClientRect().top;
        if(rowPosition > MAX_VIEW_POSITION || rowPosition < MIN_VIEW_POSITION){
            setIsVisible(false)
        }else{
            setIsVisible(true)
        }
    })

    return(
        <React.Fragment>
            <div className="images--row" ref={ref}>
                {
                    isVisible && props.images.map((image, index) => (
                        <Image key={image.id} image={image} highlight={index === props.position.table}/>
                    ))
                }
                </div>
        </React.Fragment>
    )
}

export default Row;