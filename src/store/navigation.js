
const initState = {
    row: 0,
    table: 0,
}

const navigation = (state = initState, { type }) => {
    switch (type) {
        case 'MOVE_UP':
            return  state.row > 0 ?
                {row: state.row - 1, table: state.table} :
                state;
        case 'SCROLL_UP':
            return  state.row > 0 ?
                {row: state.row - 1, table: state.table} :
                state;
        case 'MOVE_DOWN':
            return  {row: state.row + 1, table: state.table};
        case 'SCROLL_DOWN':
            return  {row: state.row + 1, table: state.table};
        case 'MOVE_LEFT':
            return state.table > 0 ?
                {row: state.row, table: state.table - 1} :
                state;
        case 'MOVE_RIGHT':
            return state.table < 4 ?
                {row: state.row, table: state.table + 1} :
                state;
        default:
            return state;
    }
};

export default navigation;