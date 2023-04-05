import { useDispatch } from "react-redux"
import { clearCart } from "./features/cart/cartSlice"
import { closeModal } from "./features/modal/modalSlice"

const Modal = () => {
  const dispatch = useDispatch()
  return (
    <div className="modal-container">
    <div className="modal">
     <h4>remove all items from your shopping cart</h4>
     <div className="btn-container">
      <button type="button" className="btn confirm-btn"onClick={()=>{dispatch(closeModal())
      dispatch(clearCart())}}>Comfirm</button>
      <button type="button" className="btn clear-btn" onClick={()=>{dispatch(closeModal())}}>Go back</button>
     </div>
    </div>
    </div>
  )
}

export default Modal