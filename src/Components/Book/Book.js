import { useEffect, useState } from "react";
import { Container, Button, Col, Row, Image, Form } from "react-bootstrap";

const Book = ({props}) => {
   const { book } = props;
   const [nights, setNights] = useState(1);
   const [ total, setTotal ] = useState(0);
   const { name, price, bedroom, bathroom, src, id } = book;
   const [onPurchase, setOnPurchase] = useState(false);
   useEffect(() => {
      if (nights <= 0) {
         setNights(1);
      }
      setTotal(nights * price)
      console.log(nights)
   }, [nights])
   
   return (
      <>
         <Container key={id}>
            <Container fluid className="border border-light bg-light p-4 lead">
               <Image height="350px" src={src} className="border border-dark"></Image>
               <h3 className="mt-4">{name}</h3>
               <Row className="justify-content-between align-items-center lead">
                  <Col xs={6}className="text-left">{bedroom}x Bedroom</Col>
                  <Col xs={6}className="text-right">{bathroom}x Bathroom</Col>
               </Row>
               <Row className="justify-content-between align-items-center lead">
                  <Col xs={6}className="text-left">Nights: {nights}</Col>
                  <Col xs={6} className="text-right">P{price} a night</Col>
               </Row>
               <Row className="mt-3 justify-content-between align-items-center lead">
                  <Col xs={6} className="text-left">
                     <Row className="justify-content-around align-items-center">
                        <Col xs={2} as={Button} variant="dark" onClick={() => {
                           setNights(nights + 1)
                        }}>+</Col>
                        <Col xs={2} as={Button} variant="dark" onClick={() => {
                           setNights(nights - 1)
                        }}>-</Col>
                     </Row>
                  </Col>
                  <Col xs={6} className="text-right">P{total}</Col>
               </Row>
               <Row className="mt-4 justify-content-center align-items-center">
                  <Col xs={10} as={Button} variant="dark" onClick={() => setOnPurchase(true)}><h5>Book</h5></Col>
               </Row>
            </Container>
            {onPurchase ? 
               <Container fluid className="mt-3">
                  <p className="lead text-center text-success">Successfully booked! Thank you!</p>
               </Container>
            : <></>}
         </Container>
      </>
   )
}

export default Book;