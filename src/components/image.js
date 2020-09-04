import React, {useEffect, useRef} from 'react';

const Image = ({image, highlight}) => {
    const ref = useRef();

    useEffect(()=> {
        highlight && ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    }, [highlight])

    return(
        <div className="image--preview" ref={ref}>
            <img
                src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`}
                className={`${highlight ? 'image--highlight' : ''}`}
                alt="loading"
                loading="lazy"
            />
        </div>
    )
}

export default Image;