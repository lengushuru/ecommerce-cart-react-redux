import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
  cartItems,
  amount:0,
  total:0,
  isloading:false, //eventually we will read data from an api
}

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    clearCart: (state) =>{state.cartItems = []},
    removeItem:(state,action)=>{
    
      state.cartItems = state.cartItems.filter((item)=>{return item.id!==action.payload})
    },
    increase:(state,{payload})=>{
      const cartItem = state.cartItems.find((item)=>{return item.id === payload.id})
      cartItem.amount=cartItem.amount + 1
    },
    decrease:(state,{payload})=>{
      const cartItem = state.cartItems.find((item)=>{return item.id === payload.id})
      cartItem.amount=cartItem.amount - 1
    },
    calculateTotal:(state)=>{
      let amount = 0
      let total = 0
      state.cartItems.forEach(item =>{
        amount+=item.amount
        total+=item.amount*item.price
      })
      state.amount = amount
      state.total = total.toFixed(2);
    }
  },
  extraReducers:{
  [getCartItems.pending]:(state)=>{state.isloading  = false},
  [getCartItems.fulfilled]:(state,action)=>{
    state.cartItems = action.payload
    state.isloading  = false},
  [getCartItems.rejected]:(state)=>{state.isloading  = false},
  }
 
})

export const {clearCart, removeItem, increase, decrease, calculateTotal} = cartSlice.actions 

export default cartSlice.reducer