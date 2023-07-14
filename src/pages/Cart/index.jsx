import { useDispatch, useSelector } from "react-redux"
import Layout from "../../components/Layout"
import Badge from "../../components/Badge"
import './css.css'
import { updateCart } from "../../actions"
import { getTotalCart } from "../../helper"
import ButtonPay from "../../components/ButtonWompi"
function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.reducer.cart)
  const CartItem = ({item}) =>(
    <div className="component-cart-item-main">
      <div className="component-cart-item-badge">
        <Badge value={item.stock} />
      </div>
      
      <img className="component-cart-item-img" src={item.image}/>
      <span style={{marginRight:'25px',marginLeft:'5px'}}>{item.title} - <span style={{color:'var(--main-color)',fontWeight:'600'}}>${item.stock*item.price}</span></span>
      <Badge onClick={()=>dispatch(updateCart(item,-item.stock))} value={'X'} style={{position:'absolute',right:'5px',top:'5px',background:'#bb2f2f',cursor: 'pointer'}}/>
      </div>
      
  )
    return (
      <Layout isCartView title={'CART'} subTitle={'Shopping Cart'}>
      <div className="page-cart-main">
        <div className="page-cart-body">
          {cart.length>0 ? cart.map((item,i)=>
            <CartItem key={i} item={item} />
            
          ):
          <p>Shopping cart is empty</p>}
         <div className="page-cart-total">
          <span style={{color:'#0e0e0e'}}>Total:</span> ${getTotalCart(cart)}
          </div> 
          {cart.length>0 && 
          <div style={{textAlign:'center',marginTop:'10px',marginBottom:'10px'}}>
          <ButtonPay value={getTotalCart(cart)}/>
        </div>
        }
          
          
        </div>
    </div>
    </Layout>
    )
  }
  
  export default Cart