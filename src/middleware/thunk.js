export default store => next => action => {

    if(typeof action !== 'function'){
        return next(action);
    }

    return action(store.dispatch);
}

// function thunk(store){
//     return function(next){
//         return function(action){
//             // Code goes here
//         }
//     }
// }
