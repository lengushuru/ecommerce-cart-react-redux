// import cartItems from "../cartItems"
import CartItem from "./cartItem"
import { useSelector,useDispatch } from 'react-redux'
import { openModal } from "../features/modal/modalSlice"

const CartContainer = () => {
  
  const dispatch = useDispatch()
  const { cartItems, amount, total } = useSelector((state) => state.cart)

  if (amount === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Your cart is empty</h2>
        </header>
        <p className="empty-cart">Your card is empty</p>
      </section>
    )
  }
  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => <CartItem key={item.id}{...item} />)}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total<span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={()=>dispatch(openModal())}>clear button</button>
      </footer>
    </section>
  )
}

export default CartContainer