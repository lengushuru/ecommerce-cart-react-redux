import Navbar from "./components/Navbar";
import CartContainer from "./components/cartContainer";
import { calculateTotal,getCartItems } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Modal from "./Modal";

function App() {
  const { cartItems,isloading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])

  useEffect(()=>{dispatch(getCartItems())},[])
  if(isloading){
    return(
      <div className="loading">
        <h1>loading...</h1>
      </div>
    )
  }
  return <main>
    <Navbar />
    {isOpen && <Modal />}

    <CartContainer />
  </main>;
}
export default App;
