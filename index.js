const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamAction = require('./features/icecream/iceCreamSlice').iceCreamAction

console.log("Initial state", store.getState())

store.subscribe(()=> {
    console.log("Updated state", store.getState())
});

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())

store.dispatch(iceCreamAction.buyIceCream())
store.dispatch(iceCreamAction.buyIceCream())
store.dispatch(iceCreamAction.buyIceCream())

store.dispatch(iceCreamAction.reStockIceCream(3))

store.dispatch(cakeActions.reStockCake(3))
