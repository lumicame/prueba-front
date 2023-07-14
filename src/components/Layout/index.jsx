import './css.css'
import Logo from '../../assets/logo.png'
import CartButton from '../CartButton'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Product from '../Product'
import { useEffect } from 'react'
function Layout({ children, title,subTitle,selected,isCartView,isHomeView }) {
    const navigator = useNavigate()
    const products = useSelector(state => state.reducer.products)
    const cart = useSelector(state => state.reducer.cart)
    useEffect(()=>{
        console.log(cart)
    },[cart])
    return (
        <div className="component-layout-main">
            <p className='component-layout-title'>MINI MARKET <span className='component-layout-title-point'></span> {title}</p>
            <div className="component-layout-body">
                <div className='component-layout-header'>
                    <img className='component-layout-header-logo' src={Logo} onClick={() => navigator('/')} />
                    <div className='component-layout-header-cart'>
                        <CartButton isCartView={isCartView}/>
                    </div>
                </div>
                <div className="component-layout-content">
                    <div className={`component-layout-div1 ${!isHomeView?'mobile':''}`}> 
                     {products.map((product, i) =><Product selected={selected==product.id?true:false} key={i} product={product}/>)} 
                        </div>
                    <div className={`component-layout-div2 ${isHomeView?'mobile':''}`}>
                    <span className='component-layout-div2-title'>{subTitle}</span>
                        {children}</div>
                </div>
            </div>

        </div>
    )
}

export default Layout