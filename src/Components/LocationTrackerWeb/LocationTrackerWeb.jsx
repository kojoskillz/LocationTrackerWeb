import React from 'react'
import './LocationTrackerWeb.css'


const LocationTrackerWeb = () => {
  return (
    <>
   
{/* navigation_bar */}
{/* <div>
    <nav>

    </nav>
</div> */}


    <div style={{
        padding:"30px",
        position:"absolute"
    }}>

    <div style={{
    paddingTop:"60px"
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
<div style={{
        display:"block",
        placeContent:"center",
        alignItems:"center",
        justifyContent:"center",
        marginTop:"18rem",

}}>

<button style={{
        backgroundColor:"red",
        width:"20rem",
        height:"4rem",
        borderRadius:"20px",
        position:"absolute",
        fontSize:"20px",
        fontWeight:"bolder",
        color:"white",

}}>
         Browse Location        
    </button>

</div>
    

    </div>



    {/* ends */}
    </>
    
  )
}




export default LocationTrackerWeb
