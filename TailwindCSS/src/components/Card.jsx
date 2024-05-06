const Card = () => {
  return (
    <div className='p-2 max-w-md mx-auto rounded-xl shadow-xl flex items-center space-x-10 border mt-3.5'>
    <div className='flex items-center justify-item-center m-auto'>
        <div>
            <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" />
        </div>
        <div style={{padding:"20px"}} >
            <h1 style={{fontSize:"25px",textAlign:"start"}} >Kalvium Store</h1>
            <h4 style={{color:"grey"}}>You have a new course!</h4>    
        </div>
    </div>

    </div>
  )
}

export default Card