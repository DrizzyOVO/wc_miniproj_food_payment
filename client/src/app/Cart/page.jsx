"use client" 
import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../components/context/ShoppingCartContext"; 
import { formatCurrency } from "../store/formatCurrency"; 
import { CartItem } from "../../components/ShoppingCart/CartItem"
import storeItems from "../data/items.json"


export default function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart()
  return (
        <div gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} id={item.id} quantity={props.quantity} /> 
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </div> 
  )
}