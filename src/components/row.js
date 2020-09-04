import React, {useRef, useEffect, useState, useLayoutEffect} from 'react';
import ReactDOM from 'react-dom';
import Image from "./image";

const Row = props => {
    const [isVisible, setIsVisible] = useState(true);
    const ref = useRef();

    useEffect(()=> {
        let rowPosition = ref.current.getBoundingClientRect().top;
        if(rowPosition > 1020 || rowPosition < -300){
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