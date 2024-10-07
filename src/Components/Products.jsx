import React,{useState,useEffect} from 'react';
import Navbar from '../Components/Nav';
export default function Products(){
  let[api,setApi]=useState({product:[]})
  let[search,setTit]=useState("")

  useEffect(()=>{
    let api=fetch("https://fakestoreapi.com/products")
    api.then(x=>x.json()).then(x=>{
           console.log(x);  
        setApi({product:x})
    })
  },[])


  let valueSearch=(e)=>{
    setTit(e.target.value);
  }


    return(
        <>
        <Navbar></Navbar>
           <div style={{position:"relative"}}>
           <input type="text" onChange={valueSearch} placeholder="Serach by category" style={{height:"50px",width:"50%",marginLeft:"25%", border:"2px solid", borderRadius:"10px",marginBottom:"20px",marginTop:"20px"}} />
           <span style={{position:"absolute",left:"72%",top:"35%"}}><i class="fa-solid fa-magnifying-glass"></i></span>
           </div>
           <div id='main'>
           {api.product.filter(x=>x.category.toLowerCase().includes(search)).map(x=>{
            return(
                <>
                <div id='inner'>
                <img src={x.image} alt="img"  style={{height:"200px",width:"200px",marginTop:"5px"}}/>
                <p>{x.title}</p>
                <h4>Price:{x.price}</h4>
               
                <button id='btn1'>Add to Cart</button>
                <button id='btn2'>Buy now</button>
                </div>
                </>
            
            )
           })}
          </div>
          
        </>
    )
}