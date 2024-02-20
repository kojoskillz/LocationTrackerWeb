import React from 'react'
import './Homepage.css'
import image from '../Assets/img2.png' 
import image1 from '../Assets/img3.jpg' 
import image2 from '../Assets/img5.jpg' 


const LocationTrackerWeb = () => {
  return (
    <>
   
    <div className='homepage_img' 
          style={{
        padding:"30px",
    }}>

    <div style={{
    paddingTop:"80px"
}}>
    <h1 style={{
        fontSize:"55px",
        color:"white",
        fontWeight:"bolder",

    }}>
        Get Ready To Find Your Location!
    </h1>
    </div>


{/* button */}

<button style={{
        width:"20rem",
        height:"4rem",
        borderRadius:"20px",
        position:"absolute",
        fontSize:"20px",
        marginTop:"38vh",
        fontWeight:"bolder",
        color:"white",
        marginLeft:"auto",
        marginRight:"auto"

}}>
         GET STARTED        
    </button>

    
    </div>
<div>

</div>


<div className='input'>
    <input type="text" placeholder='Search Your Location' />
    <img src={image} alt="" style={{
        width:"20px",
        position:"absolute",
        zIndex:"1",
        marginLeft:"15rem",
        marginTop:".5rem",

    }} />
</div>



<div className='img1'  style={{
    
}}>

    <img src= {image2} alt="" style={{
        width:"40vw",
        height:"30vh",
        objectFit:"cover",
        borderRadius:"9px",
        marginTop:"10rem",
        marginLeft:"2rem",
        position:"absolute",
        right:"4vh",
        top:"150vh"
    }} />

    <img src= {image2} alt="" style={{
        width:"40vw",
        height:"30vh",
        objectFit:"cover",
        borderRadius:"9px",
        marginTop:"10rem",
        marginLeft:"2rem",

}} />

</div>

    {/* ends */}
    </>
    
    


    
  )
}




export default LocationTrackerWeb
