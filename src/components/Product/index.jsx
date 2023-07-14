import { useNavigate } from 'react-router-dom'
import './css.css'
import Badge from '../Badge'
import { useSelector } from 'react-redux'
import { getOneProduct } from '../../helper'
function Product({product,selected}) {
  const navigator = useNavigate()
  const cart = useSelector(state=>state.reducer.cart)
  return (
    <div className={`component-product-main ${selected ?'active':'' }`} onClick={()=>navigator('/details',{state:{product:product}})}>
      {/* {console.log(cart.filter(item => item.id == product.id).length)} */}
      {getOneProduct(cart,product.id) && <Badge value={getOneProduct(cart,product.id).stock} style={{right: '5px',top: '5px',position:'absolute'}}/>}
      <img className="component-product-img" src={product.image} />
      <span className='component-product-title'>{product.title}</span>
    </div>
  )
}

export default Product