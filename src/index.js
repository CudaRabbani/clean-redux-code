// import { bugAdded } from "./store/bugs";
// import store from "./store/store";


// store.dispatch(bugAdded("Bug 1"));

// console.log(store.getState());

import { bugRemoved } from "./store/bugs";
import { bugAdded } from "./store/bugs";
import configureBugStore from "./store/configureStore";
import { projectAdded } from "./store/projects";

const store = configureBugStore();

console.log(store.getState());

store.subscribe(() => {
    console.log("Store updated ", store.getState())
});

store.dispatch(bugAdded({description: "Test Bug 1"}));
store.dispatch(bugAdded({description: "Test BUG 2"}));
store.dispatch(bugAdded({description: "Test BUG 3"}));
store.dispatch(bugAdded({description: "Test BUG 4"}));
store.dispatch(bugRemoved({id: 3}));

store.dispatch(projectAdded({title: "First Project"}));

console.log(store.getState());
