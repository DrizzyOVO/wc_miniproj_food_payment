"use client"; 
import data from "./data";  
import { useState, useEffect } from "react";  
import head from "next/head"
import Link from "next/link"; 
// import Router from "next/router"; 
import { useRouter } from 'next/navigation'
import Router from "next/navigation"; 
import Navbar from "../Navbar/Navbar";
import { formatCurrency } from "@/app/store/formatCurrency";  
import { useShoppingCart } from "../context/ShoppingCartContext"; 
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"


export default function Index(props){  

    const router = useRouter()
    const [oneItem, setOneItem] = useState(0); 

    const sty = {
        backgroundImage: "url('https://source.unsplash.com/random/240x320')",
    }


    const [query, setQuery] = useState('');
    const [DATA, setDATA] = useState(data); 

    //Our search filter function
    const searchFilter = (array) => {
        return array.filter(
            (el) => el.name.toLowerCase().includes(query)
        )
    }

    const filtered = searchFilter(DATA)

    const handleChange = (e) => { 
        console.log(e); 
        setQuery(e.target.value)
    }

    function SendProps(){
        Router.push(
            "/specific", 
            {
                name: "Hello", 
                id: 5, 
            }
        )
    }

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      } = useShoppingCart()

      const quantity = getItemQuantity(props.id)
 

    return (
        <>

            <div key={props.id} className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500 rounded-3xl" style={{backgroundImage: props.imgUrl}} href="#">
                              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3 relative">
                                  {/* <div className="flex flex-col justify-start text-center dark:text-gray-100"> </div> */}

                                <div className="absolute bottom-0 left-0"> 

                                    <div className="w-100 d-flex flex-column bg-slate-50 rounded-3xl">
                                        <div className="d-flex justify-content-between align-items-baseline mb-4">
                                            <span className="fs-2 text-black ml-2">{props.name}</span>
                                            <span className="ms-2 text-slate-950">{formatCurrency(props.price)}</span>   
                                        </div>

                                        <div className="align-center"> 
                                            {quantity === 0 ? (
                                                <button type="button" className="w-100 text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => increaseCartQuantity(props.id)} 
                                                >+ Add to cart</button> 
                                            )
                                            : <div className="d-flex items-center flex-column" style={{gap: ".5rem"}}> 
                                                <div className="d-flex items-center justify-center" style={{gap: ".5rem"}}>
                                                    <button type="button" className="text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => decreaseCartQuantity(props.id)}
                                                    >-</button> 
                                                    <div>
                                                        <span className="fs-3">{quantity}</span> in cart  
                                                    </div>
                                                    <button type="button" className="text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => increaseCartQuantity(props.id)}
                                                    >+</button>
                                                </div>
                                                <button type="button" className="focus:outline-none text-white bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => removeFromCart(props.id)}
                                                >Remove</button>  
                                            </div>} 
                                        </div> 
                                    </div>
                                </div>
                            </div>

            </div>

                              {/* <div className="d-flex flex-column bg-slate-50 w-100 rounded-3xl">
                                <div className="d-flex justify-content-between align-items-baseline mb-4">
                                  <span className="fs-2 text-black ml-2">{props.name}</span>
                                  <span className="ms-2 text-slate-950">{formatCurrency(props.price)}</span>   
                                </div>

                                <div className=" align-center"> 
                                      {quantity === 0 ? (
                                        <>
                                        <button type="button" className="w-100 text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => increaseCartQuantity(props.id)} 
                                        >+ Add to cart</button> 
                                        <a >Hello</a>  
                                        </>
                                      )
                                      : <div className="d-flex items-center flex-column" style={{gap: ".5rem"}}> 
                                          <div className="d-flex items-center justify-center" style={{gap: ".5rem"}}>
                                              <button type="button" className="text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => decreaseCartQuantity(props.id)}
                                              >-</button> 
                                              <div>
                                                <span className="fs-3">{quantity}</span> in cart  
                                              </div>
                                              <button type="button" className="text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => increaseCartQuantity(props.id)}
                                              >+</button>
                                          </div>
                                          <button type="button" className="focus:outline-none text-white bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => removeFromCart(props.id)}
                                          >Remove</button>  
                                      </div>} 
                                </div> 
                              </div>
                          </div> */}
        

            {/* <div className='w-11/12 m-auto mt-40 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 md:gap-0'>
                <input onChange={handleChange} type='text' placeholder='Search...' className="form-control"/>
            </div> */}
        </>

    ); 
}

