import React from 'react'
import { Card, Container,Row,Col, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const View = () => {
    const data = useSelector(state => state.user)
  return (
    <Container className='my-5'>
    <Row className=" justify-content-center">
        <Col md={5}>
            <Card className='shadow'>
                <Card.Body>
                    <Table>
                              <tr>
                                 <td>Name</td>
                                  <td>{data.name}</td>
                              </tr>       
                              <tr>
                                 <td>Email</td>
                                 <td>{data.email}</td>
                              </tr>       
                              <tr>
                                 <td>Photo</td>
                                 <td>{data.photo}</td>
                              </tr>       
                   </Table>
                </Card.Body>
            </Card>
        </Col>
    </Row>    
    </Container>
  )
}

export default View
