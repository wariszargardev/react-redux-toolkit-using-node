const createSlice= require('@reduxjs/toolkit').createSlice;

const initialState= {
    noOfIceCream: 20
}

const iceCreamSlice = createSlice({
   name: "iceCream",
   initialState,
   reducers:{
       buyIceCream: (state) => {
           state.noOfIceCream--
       },

       reStockIceCream: (state, action) => {
           state.noOfIceCream += action.payload
       }
   }
});

module.exports = iceCreamSlice.reducer
module.exports.iceCreamAction = iceCreamSlice.actions