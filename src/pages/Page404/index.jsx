import { Link } from "react-router-dom"

function Page404() {
  
    return (
      <div style={{width:'100vw',height:'100vh',display: 'grid',textAlign: 'center',alignContent: 'center'}}>
        <h1 style={{margin:'0px'}}>
        Page 404
      </h1>
      <Link to={'/'}>Go To Home</Link>
      </div>
      
    )
  }
  
  export default Page404