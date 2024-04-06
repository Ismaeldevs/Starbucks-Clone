import {Col, Card} from 'react-bootstrap'

const CardCasa = ({title, image}) => {
  return (
    <Col md={4} fluid className='mt-3'>
          <Card className='cards' style={{ width: '18rem' }}>
            <div className='img-content'>
      <Card.Img className='img' variant="top" src={image} />
            </div>
      <Card.Body>
        <Card.Title className='text-content text-center' >{title}</Card.Title>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default CardCasa
