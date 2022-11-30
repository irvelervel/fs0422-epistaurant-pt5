import { Badge, Col, Container, Row } from 'react-bootstrap'
import items from '../data/menu.json'

const Menu = () => (
  <Container>
    {items.map((pasta) => (
      <Row className="justify-content-center mt-4" key={pasta.id}>
        <Col xs={12} md={6} className="text-center">
          <img src={pasta.image} alt={pasta.name} />
          <div>
            <h4>{pasta.name}</h4>
            <div>
              <Badge variant="warning" className="mx-2">
                {pasta.price}
              </Badge>
              <Badge variant="danger">{pasta.label}</Badge>
            </div>
          </div>
        </Col>
      </Row>
    ))}
  </Container>
)

export default Menu
