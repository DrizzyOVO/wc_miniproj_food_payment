"use client" 
import { Col, Row } from "react-bootstrap"
import { Button, Card } from "react-bootstrap"
import { StoreItem } from "../../components/Meals/Try";  
import storeItems from "../data/items.json"; 
import { formatCurrency } from "./formatCurrency"; 
import { useShoppingCart } from "../../components/context/ShoppingCartContext"; 
import Try from "../../components/Meals/Try"; 

function Store() {

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()

  // const quantity = getItemQuantity(id)
  const quantity = 0

  return (
    <>
      <h1>Store</h1>
      <div md={2} xs={1} lg={3} className="g-3"> 
            <div className="mt-10"> 
              
              {/* <div className='w-11/12 m-auto mt-40 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 md:gap-0'>
                  <input onChange={handleChange} type='text' placeholder='Search...' className="form-control"/>
              </div> */}

              <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100">
                  <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 sm:grid-cols-2">
                      {storeItems.map((item) => ( 
                        <Try id={item.id} name={item.name} price={item.price} imgUrl={item.imgUrl}/> 
                      ))}
                  </div>
              </div> 
            </div> 
        </div>  
    </>
  )
}

export default Store; 

{/* <div key={det.id} className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500 rounded-3xl" style={{backgroundImage: det.imgUrl}} href="#">
                              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                                  <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-3xl font-semibold tracki uppercase text-white bgundefined">{det.name}</a>
                                  <div className="flex flex-col justify-start text-center dark:text-gray-100">
                                  </div>
                              </div>

                              <div className="d-flex flex-column bg-slate-50 w-100 rounded-3xl">
                                <div className="d-flex justify-content-between align-items-baseline mb-4">
                                  <span className="fs-2 text-black ml-2">{det.name}</span>
                                  <span className="ms-2 text-slate-950">{formatCurrency(det.price)}</span>   
                                </div>

                                <div className=" align-center"> 
                                      {quantity === 0 ? (
                                        <button type="button" class="w-100 text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => increaseCartQuantity(det.id)}
                                        >+ Add to cart</button>
                                      )
                                      : <div className="d-flex items-center flex-column" style={{gap: ".5rem"}}> 
                                          <div className="d-flex items-center justify-center" style={{gap: ".5rem"}}>
                                              <button type="button" className="text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => decreaseCartQuantity(det.id)}
                                              >-</button> 
                                              <div>
                                                <span className="fs-3">{quantity}</span> in cart  
                                              </div>
                                              <button type="button" className="text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => increaseCartQuantity(det.id)}
                                              >+</button>
                                          </div>
                                          <button type="button" className="focus:outline-none text-white bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => removeFromCart(id)}
                                          >Remove</button>  
                                      </div>} 
                                </div> 
                              </div>
                          </div> */}