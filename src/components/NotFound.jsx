import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  // here we can use hooks, at the top level!

  const navigate = useNavigate()
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6} className="text-center">
          <h1>PAGE NOT FOUND</h1>
          <Button variant="info" onClick={() => navigate('/')}>
            Click here to go home
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
