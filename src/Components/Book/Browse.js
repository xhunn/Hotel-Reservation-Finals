import { Button, Col, Image, Row } from "react-bootstrap";

const Browse = ({props}) => {
   const { name, bedroom, bathroom, price, src, id, onAdd } = props;
   const product = {
      name: name,
      price: price,
      bedroom: bedroom,
      bathroom: bathroom,
      src: src,
      id: id
   }
   
   return (
      <>
         <Row className="m-5 pb-5 border-bottom border-dark justify-content-between align-items-center">
            <Col xs={4} className="text-left">
               <Image height="300px" src={src}/>
            </Col>
            <Col xs={6} className="text-right">
               <h4>{name}</h4>
               <hr/>
               <p>{bedroom}x bedroom</p>
               <p>{bathroom}x bathroom</p>
               <p className="lead">P{price} a night</p>
               <Button variant="dark" key={id} onClick={() => onAdd(product)}>Book</Button>
            </Col>
         </Row>
      </>
   )
}

export default Browse;