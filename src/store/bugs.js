import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            });
        },
        bugRemoved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs.splice(index, 1);
        }
    }
});

console.log(slice);

export const {bugAdded, bugRemoved} = slice.actions;
export default slice.reducer;


//2nd way

import { createAction, createReducer } from "@reduxjs/toolkit";

// const BUG_ADDED = "bugAdded";
// const BUG_RESOLVED = "bugResolved";
// const BUG_REMOVED = "bugRemoved";

// export const bugAdded = createAction(BUG_ADDED);
// export const bugRemoved = createAction(BUG_REMOVED);
// export const bugResolved = createAction(BUG_RESOLVED);

// let lastId = 0;


// export default createReducer([], {
//     [bugAdded.type]: (state, action) => { //computed value
//         state.push({
//             id: ++lastId,
//             description: action.payload.description,
//             resolved: false
//         });
//     },
//     bugRemoved: (state, action) => {
//         const index = state.findIndex(bug => bug.id === action.payload.id);
//         state.splice(index, 1);
//     }
// });


//one of the many ways
// export function reducer(state = [], action) {
//     switch(action.type) {
//         case bugAdded.type:
//             return [
//                 ...state,
//                 {
//                     id: ++lastId,
//                     description: action.payload.description,
//                     resolved: false
//                 }
//             ];
//         case bugRemoved.type:
//             return state.filter (bug => bug.id != action.payload.id);
//         default:
//             return state;
//     }
// }