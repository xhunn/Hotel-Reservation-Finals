import { Form, Button, Row, Col, Container } from "react-bootstrap"
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [signName, setSignName] = useState('');
   const [signEmail, setSignEmail] = useState('');
   const [signPassword, setSignPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const hisotry = useHistory();

   return (
      <>
         <Container>
            <p className="display-3 text-center"> Login </p>
         </Container>
         <Row className="justify-content-center p-5">
            <Col xs={5}>
               <Form onSubmit={e => hisotry.push('/reserve')}>
                  <Form.Group controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" placeholder="Enter email" value={email} onChange={v => setEmail(v.target.value)} required/>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder="Password" value={password} onChange={v => setPassword(v.target.value)} />
                  </Form.Group>
                  <Button variant="dark" type="submit">
                     Submit
                  </Button>
               </Form>
            </Col>
         </Row>
         <Container>
            <p className="display-3 text-center"> Sign-up </p>
         </Container>
         <Row className="justify-content-center p-5">
            <Col xs={8}>
               <Form onSubmit={e => hisotry.push('/reserve')}>
                  <Form.Group controlId="name">
                     <Form.Label>Name</Form.Label>
                     <Form.Control placeholder="Juan D. Dela Cruz" required/>
                  </Form.Group>
                  <Form.Row>
                     <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={signEmail} onChange={v => setSignEmail(v.target.value)} required/>
                     </Form.Group>

                     <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={signPassword} onChange={v => setSignPassword(v.target.value)} required/>
                     </Form.Group>
                     
                     <Form.Group as={Col} controlId="formGridPassword">
                        {signPassword === confirmPassword ? 
                           signPassword.length === 0 ? 
                              <Form.Label>Confirm Password </Form.Label> : <Form.Label>Confirm Password <strong className="text-success">Success!</strong></Form.Label> :<Form.Label>Confirm Password</Form.Label>}
                        <Form.Control type="password" placeholder="Password" value={confirmPassword} onChange={v => setConfirmPassword(v.target.value)} required/>
                     </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridAddress1">
                     <Form.Label>Address</Form.Label>
                     <Form.Control placeholder="1234 Main St"  required/>
                  </Form.Group>
                  <Button variant="dark" type="submit">
                     Submit
                  </Button>
               </Form>
            </Col>
         </Row>
      </>
   )
}

export default Login;