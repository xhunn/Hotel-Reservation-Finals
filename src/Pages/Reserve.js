import { Col, Row } from "react-bootstrap";
import Products from "../Components/Products";

const Reserve = () => {
   const [cart, setCart] = useState([])

   const onAdd = (product) => {
      console.log(cart)
      const exist = cart.find(x => x.id === product.id);
      if (exist) {
         setCart[setCart.map(x => x.id === product.id ? {
            ...exist, qty: exist.qty + 1
         } : x)]
      } else {
         setCart([...cart, {...product, qty: 1}])
      }
   }

   return (
      <>
         <Row>
            <Col xs={8}>
               <Products details={{
                  name: "Pancakes",
                  description: "A sweet breakfast to start the day",
                  price: 200,
                  src: "./pancakes.jpg",
                  id: 1,
                  onAdd: onAdd
               }} onAdd={onAdd} key={1}/>
            </Col>
            <Col xs={4} className="bg-dark border border-dark text-center">
               <h1 className="text-light display-4 mt-5">CART</h1>
               <p>{cart}</p>
            </Col>
         </Row>
      </>
   )
}

export default Reserve;