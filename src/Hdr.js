import React, { useEffect } from "react"
import tf from  './tf.png';


export default function Hdr()
{
  

const [mim,setmim]=React.useState({fn:"",ln:"",image:""}) 
  
 const [almim,setalmim]=React.useState([]) 

  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then (data => setalmim(data.data.memes))
  },[])
  
  function addim() {


    const num = Math.floor(Math.random() * almim.length)
    const url=almim[num].url
     setmim(prevmim => ({
            ...prevmim,
            image: url
        }))

    
  }
  
  function hc(event)
  {
    setmim(
      prevmim => {
        return {
          ...prevmim,[event.target.name]:event.target.value

        }
      }
    )
  }  

  
  
  
  
  
  
  return(
<div>
    <div className="hdr">

      <img className="mem" src={tf} />
<h2>Meme Generator</h2>

</div>

<div className="rd">

<form>

<input
  type="text" 
  className="r" 
  placeholder="Top text"
  name="fn"
  onChange={hc}
  value={mim.fn}
  />


</form>


<form>

<input 
  type="text" 
  className="r"
  placeholder="Bottom text"
  name="ln"
  onChange={hc}
  value={mim.ln}
  />


</form>

</div>

  <div>

  <div className="bt" onClick = {addim} >Get a new meme image</div>
    <div className="mi">

     <img className="x" src = {mim.image} />
     <h2 className="mm mtop">{mim.fn}</h2>
    <h2 className="mm mbottom">{mim.ln}</h2>
      
    </div>
  
  
  </div>






  
</div>
    
  )
}