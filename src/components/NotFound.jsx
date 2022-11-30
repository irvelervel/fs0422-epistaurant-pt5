import { Col, Container, Row } from 'react-bootstrap'

const NotFound = () => (
  <Container>
    <Row className="justify-content-center mt-3">
      <Col xs={12} md={6} className="text-center">
        <h1>PAGE NOT FOUND</h1>
        <h3>Click here to go home</h3>
      </Col>
    </Row>
  </Container>
)

export default NotFound
