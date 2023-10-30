const BUG_ADDED = "bugAdded";

export const bugAdded = (description) => ({
    type: BUG_ADDED,
    payload : {
        description
    }
});

let lastId = 0;

export function reducer(state = [], action) {
    switch(action.type) {
        case BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        default:
            return state;
    }
}