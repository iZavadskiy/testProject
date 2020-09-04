

export const moveRight = () => ({
    type: "MOVE_RIGHT"
});

export const moveLeft = () => ({
    type: 'MOVE_LEFT'
});

export const moveDown = () => ({
    type: 'MOVE_DOWN'
});

export const moveUp = () => ({
    type: 'MOVE_UP'
});

export const getImages = (images) => ({
    type: 'GET_IMAGES',
    payload: images,
})