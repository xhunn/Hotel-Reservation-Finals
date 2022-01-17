import { Col, Container, Row } from "react-bootstrap";
import Products from "../Components/Products/Products";
import { useEffect, useState } from "react";
import Cart from "../Components/Products/Cart";

const Catalog = () => {
   const [cartItems, setCartItems] = useState([])
   const total = cartItems.reduce((prevNum, currNum) => prevNum + currNum.qty * currNum.price, 0);

   const onAdd = (product) => {
      const exist = cartItems.find(x => x.id === product.id);
      if (exist) {
         setCartItems(cartItems.map(x => x.id === product.id ? {
            ...exist, qty: exist.qty + 1
         } : x))
      } else {
         setCartItems([...cartItems, {...product, qty: 1}])
      }
   }

   const onSubtract = (product) => {
      const exist = cartItems.find(x => x.id === product.id);
      if (exist.qty === 1) {
         setCartItems(cartItems.filter(x => x.id !== product.id));
      } else {
         setCartItems(cartItems.map(x => x.id === product.id ? {
            ...exist, qty: exist.qty - 1
         } : x));
      }
   }
   

   return (
      <>
         <Row>
            <Col xs={8}>
               <Products props={{
                  name: "Pancakes",
                  description: "A sweet breakfast to start the day",
                  price: 200,
                  src: "./pancakes.jpg",
                  id: 1,
                  onAdd: onAdd
               }} key={1}/>

               <Products props={{
                  name: "Tempura",
                  description: "An iconic japanese dish",
                  price: 400,
                  src: "./tempura.jpg",
                  id: 2,
                  onAdd: onAdd
               }} key={2}/>

               <Products props={{
                  name: "Iced Tea",
                  description: "A refreshing sweet blended iced tea",
                  price: 90,
                  src: "./icetea.jpeg",
                  id: 3,
                  onAdd: onAdd
               }} key={3}/>
            </Col>
            <Col xs={4} className="bg-dark border border-dark text-center">
               <h1 className="text-light display-3 mt-5">CART</h1>
               {cartItems ? 
                  <>
                     <Container>
                        <Cart props={{
                           cart: cartItems,
                           onAdd: onAdd,
                           onSubtract: onSubtract,
                           total: total
                        }}/>
                     </Container>
                  </>
               : <></>}
            </Col>
         </Row>
      </>
   )
}

export default Catalog;