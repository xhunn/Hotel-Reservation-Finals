import { Col, Row } from 'react-bootstrap';

const Banner = ({ props }) => {
   return (
      <>
         <Row>
            <Col xs={12} className='py-5 mt-4 text left'>
               <h1>{props.title}</h1>
               <p>{props.tagline}</p>
            </Col>
         </Row>
      </>
   )
}

export default Banner;