import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

const Cart = ({props}) => {
   const { cart, onAdd, onSubtract, total } = props;
   const [onPurchase, setOnPurchase] = useState(false);
   
   return (
      <>
         <Row className="mt-5 text-light text-left lead align-items-center justify-content-between">
            <Col xs={3}><h4>Product</h4></Col>
            <Col xs={3}><h4 className="text-center">Quantity</h4></Col>
            <Col xs={2}><h4>Price</h4></Col>
            <Col xs={3}><h4>Total</h4></Col>
         </Row>
         {cart.map(product => {
            return (
               <Row className="text-light text-left lead align-items-center justify-content-between" key={product.id}>
                  <Col xs={3}><p>{product.name}</p></Col>
                  <Col xs={1} as={Button} variant="dark" onClick={() => onAdd(product)}>
                     +
                  </Col>
                  <Col xs={1} as={Button} variant="dark" onClick={() => onSubtract(product)}>
                     -
                  </Col>
                  <Col xs={1}><p>{product.qty}</p></Col>
                  <Col xs={2}><p>P{product.price}</p></Col>
                  <Col xs={3}><p>P{product.price * product.qty}</p></Col>
               </Row>
            )
         })}
         {cart.length !== 0 ? 
            <>
               <Row className="justify-content-end text-light">
                  <Col xs={8}></Col>
                  <Col xs={3}><h5 className="text-left">P{total}</h5></Col>
               </Row>
               <Row className="mt-4 justify-content-center">
                  <Col xs={9} as={Button} variant="dark" onClick={() => setOnPurchase(true)}><h5>Purchase</h5></Col>
                  <Col xs={1}></Col>
               </Row>
            </>
            : <></>}
         {onPurchase ? 
            <>
               <Row className="justify-content-center">
                  <Col xs={9}><p className="lead text-success">{"Item(s) purchased"}</p></Col>   
                  <Col xs={1}></Col>
               </Row>
            </>
            : <></>}
      </>
   )
}

export default Cart;