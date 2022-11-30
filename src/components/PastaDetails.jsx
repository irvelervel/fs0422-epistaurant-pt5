import { useEffect, useState } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import items from '../data/menu.json'
import DishComments from './DishComments'

const PastaDetails = () => {
  const params = useParams()
  console.log('PARAMS', params)
  console.log('pastaId is', params.pastaId)

  const [pasta, setPasta] = useState(null)

  const navigate = useNavigate()

  // equivalent to a componentDidMount
  useEffect(() => {
    let detailsToShow = items.find((p) => p.id.toString() === params.pastaId)
    console.log('detailsToShow', detailsToShow)
    // detailsToShow will be a valid pasta object if found
    // or it will become undefined if the URL is messed up, and no corresponding
    // pasta is found...
    setPasta(detailsToShow)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6} className="text-center">
          <h1>Pasta Details:</h1>
          {/* if pasta is truthy... */}
          {pasta && (
            <Card>
              <Card.Img variant="top" src={pasta.image} />
              <Card.Body>
                <Card.Title>{pasta.name}</Card.Title>
                <div>
                  <div>{pasta.description}</div>
                  <div>Category: {pasta.category}</div>
                </div>
                <Button
                  className="mt-3"
                  variant="primary"
                  onClick={() => navigate('/menu')}
                >
                  Go Back
                </Button>
              </Card.Body>
            </Card>
          )}
          {/* let's put an error 404 message if the user
          tries to find an off-menu pasta :) */}
          {typeof pasta === 'undefined' && (
            <h1 className="mt-5">PASTA NOT FOUND</h1>
          )}
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6} className="text-center">
          <DishComments selectedPasta={pasta} />
        </Col>
      </Row>
    </Container>
  )
}

export default PastaDetails
