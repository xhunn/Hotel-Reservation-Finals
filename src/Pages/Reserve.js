import { Col, Row, Container } from "react-bootstrap";
import Banner from "../Components/Banner/Banner";
import { useEffect, useState } from "react";
import Browse from "../Components/Book/Browse";
import Book from "../Components/Book/Book";

const Reserve = () => {
const [toBook, setBook] = useState({})

   const onAdd = (book) => {
      setBook(book)
   }
   
   const onSubtract = () => {
   setBook({})
   }

   useEffect(() => {
      console.log(Object.keys(toBook).length)
   }, [])

   // const onAdd = (product) => {
   //    const exist = toBook.find(x => x.id === product.id);
   //    if (exist) {
   //       setBook(toBook.map(x => x.id === product.id ? {
   //          ...exist, qty: exist.qty + 1
   //       } : x))
   //    } else {
   //       setBook([...toBook, {...product, qty: 1}])
   //    }
   // }

   // const onSubtract = (product) => {
   //    const exist = toBook.find(x => x.id === product.id);
   //    if (exist.qty === 1) {
   //       setBook(toBook.filter(x => x.id !== product.id));
   //    } else {
   //       setBook(toBook.map(x => x.id === product.id ? {
   //          ...exist, qty: exist.qty - 1
   //       } : x));
   //    }
   // }

   return (
      <>
         <Row>
            <Col xs={8}>
               <Container className="d-flex justify-content-center">
                  <Banner props={{
                     title: "HOLIVA",
                     tagline: "Reserve the best hotel rooms and villas today!"
                  }}/>
               </Container>
               <Browse props={{
                  name: "Hotel 625",
                  bathroom: 1,
                  bedroom: 1,
                  price: 10000,
                  src: "./ModernHotel.jpg",
                  id: 1,
                  onAdd: onAdd
               }} key={1}/>

               <Browse props={{
                  name: "Lakeside Villa",
                  bathroom: 2,
                  bedroom: 4,
                  price: 15000,
                  src: "./LakesideVilla.jpg",
                  id: 2,
                  onAdd: onAdd
               }} key={2}/>

               <Browse props={{
                  name: "High-Rise",
                  bathroom: 5,
                  bedroom: 5,
                  price: 20000,
                  src: "./HighRise.jpg",
                  id: 3,
                  onAdd: onAdd
               }} key={3}/>
            </Col>
            <Col xs={4} className="bg-dark border border-dark text-center">
               <h1 className="text-light display-4 mt-5">BOOK</h1>
               {Object.keys(toBook).length !== 0 ? 
                  <>
                     <Book props={{
                        book: toBook
                     }}/>
                  </>
               : <></>}
            </Col>
         </Row>
      </>
   )
}

export default Reserve;