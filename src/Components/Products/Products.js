import { useEffect } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";

const Products = ({props}) => {
   const { name, description, price, src, id } = props;
   const { onAdd } = props
   const product = {
      name: name,
      price: price,
      id: id,
      qty: 0
   }
   useEffect(() => {
      console.log(typeof onAdd);
      console.log(typeof id)
      console.log(typeof name)
   }, [])
   return (
      <>
         <Row className="m-5 pb-5 border-bottom border-dark justify-content-between align-items-center">
            <Col xs={4} className="text-left">
               <Image height="300px" src={src}/>
            </Col>
            <Col xs={6} className="text-right">
               <h4>{name}</h4>
               <br />
               <p>{description}</p>
               <p className="lead">P{price}</p>
               <Button variant="dark" key={id} onClick={() => onAdd(product)}>Add to Cart</Button>
            </Col>
         </Row>
      </>
   )
}

export default Products;