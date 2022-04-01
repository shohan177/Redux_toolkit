
import React from 'react'
import { Card, Container,Row,Col, Form,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { chnageName,chnageEmail,chnagePhoto } from '../redux/userSlice'

const Home = () => {
    const data = useSelector(state => state.user)
    const dispatch = useDispatch();
   
  return (
      <Container className='my-5'>
          <Row className=" justify-content-center">
              <Col md={5}>
                  <Card className='shadow'>
                      <Card.Body>
                          <Form>
                              <Form.Group className='my-3'>
                                  <Form.Label>Name</Form.Label>
                                  <Form.Control value={data.name} onChange={(e) =>dispatch(chnageName({name: e.target.value}))}></Form.Control>
                            </Form.Group>
                              <Form.Group className='my-3'>
                                  <Form.Label>Email</Form.Label>
                                  <Form.Control value={data.email} onChange={(e) =>dispatch(chnageEmail({email: e.target.value}))}></Form.Control>
                            </Form.Group>
                              <Form.Group className='my-3'>
                                  <Form.Label>Photo</Form.Label>
                                  <Form.Control value={data.photo} onChange={(e) =>dispatch(chnagePhoto({photo: e.target.value}))}></Form.Control>
                            </Form.Group>
                              <Form.Group className='my-3'>
                                 <Button variant="primary">Add User</Button>
                            </Form.Group>
                          </Form>  
                      </Card.Body>
                  </Card>
              </Col>
          </Row>    
      </Container>
  )
}

export default Home
