import { useLocation, useNavigate } from "react-router-dom"
import Layout from "../../components/Layout"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './css.css'
import Badge from "../../components/Badge";
import { updateCart } from "../../actions";
import { getOneProduct } from "../../helper";

function Detail() {
  const { state } = useLocation();
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const cart = useSelector(state=>state.reducer.cart)
  return (
    <>
    {!state ? navigator('/') :
    <Layout title={'PRODUCT DETAIL'} subTitle={'Product'} selected={state.product.id}>
    <div className="page-detail-main">
      <Badge value={getOneProduct(cart,state.product.id)?getOneProduct(cart,state.product.id).stock:0} style={{ left: '10px', top: '10px', position: 'absolute' }} />
      <div className="page-detail-body">
        <img src={state.product.image} className="page-detail-img" />
        <div className="page-detail-title">
          <div style={{display:'grid',flex:'1'}}>
            <span className="page-detail-name">{state.product.title}</span>
          </div>
          <div style={{display:'flex'}}>
          <span className="page-detail-price">${state.product.price}</span>
          <div style={{display:'flex'}}>
            <span className= "page-detail-button minus" onClick={()=>dispatch(updateCart(state.product,-1))}>-</span>
            <span className="page-detail-button plus" onClick={()=>dispatch(updateCart(state.product,1))}>+</span>
          </div>
          </div>
          
        </div>
        <div className="page-detail-description">
          <span>{state.product.description}</span>
        </div>
      </div>

    </div>
  </Layout>}
    </>
    
    
  )
}
export default Detail