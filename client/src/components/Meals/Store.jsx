"use client"; 
// import { Button, Card } from "react-bootstrap";  
// import { useShoppingCart } from "../context/ShoppingCartContext"
// import { formatCurrency } from "../utilities/formatCurrency"


function StoreItem(props) {

  return (
    <div className="h-100">
      {/* <Card.Img
        variant="top"
        src={props.imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      /> */}
        <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
                <div key={det.id} className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500 rounded-3xl" style={{backgroundImage: props.imgUrl}} href="#"></div>  
            </div>
        </div> 

      {/* <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body> */}
    </div>
  )
}

export default StoreItem;