import './css.css'
function Badge({value,style,onClick}) {
    return (
        <span onClick={onClick} className='component-badge-main' style={style}>{value}</span>
    )
  }
  
  export default Badge