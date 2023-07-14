import { useNavigate } from "react-router-dom"
import { CloseIcon, ShoppingCartIcon } from "../Icon"
import './css.css'
import { useDispatch, useSelector } from "react-redux"
import { getTotalCart } from "../../helper"
import { deleteCart } from "../../actions"
function CartButton({isCartView}) {
    const navigator = useNavigate()
    const cart = useSelector(state => state.reducer.cart)
    const dispatch = useDispatch()
    return (
      <>
      
      {isCartView ?
      <div style={{display:'flex'}}>
        <div className="component-cart-button-main cart" onClick={()=>navigator('/cart')}>
        <ShoppingCartIcon className='component-cart-button-icon'/>
        <span className='component-cart-button-price'>${getTotalCart(cart)}</span>
      </div>
      <div className="component-cart-button-close cart" onClick={()=>dispatch(deleteCart())}>
        <CloseIcon className='component-cart-button-icon'/>
      </div>
      </div>
      :<div className="component-cart-button-main" onClick={()=>navigator('/cart')}>
        <ShoppingCartIcon className='component-cart-button-icon'/>
        <span className='component-cart-button-price'>${getTotalCart(cart)}</span>
      </div>}
      
      </>
      

    )
  }
  
  export default CartButton