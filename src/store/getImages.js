const initState = {
    images: []
}

const images = (state = initState, { type, payload }) => {
    switch (type) {
        case 'GET_IMAGES':
            return {images: state.images.concat(payload)};
        default:
            return state;
    }
};

export default images;