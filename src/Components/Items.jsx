import {Container, Row} from 'react-bootstrap'
import axios from 'axios'
import '../css/Menu.css'
import { useEffect, useState } from 'react'
import CardBebidas from './CardBebidas'
import CardComida from './CardComida'
import CardCasa from './CardCasa'

const Items = () => {

    const [bebidas,setBebidas] = useState([])
    const [comidas,setComidas] = useState([])
    const [itemCasa, setItemCasa] = useState([])

  const obtenerBebidas = async () => {
    const response = await axios.get('http://localhost:3001/bebidas')
    setBebidas(response.data)
  }

  const obtenerComidas = async () => {
    const response = await axios.get('http://localhost:3001/comida')
    setComidas(response.data)
  }

  const obtenerItemsCasa = async () => {
    const response = await axios.get('http://localhost:3001/casa')
    setItemCasa(response.data)
  }

useEffect(() => {
  obtenerBebidas()
  obtenerComidas()
  obtenerItemsCasa()
}, [])

  return (
    <Container fluid>
        <div className="text-main">
      <h5>¡Disfrutalos!</h5>
      <p>Conoce nuestras bebidas y alimentos de temporada</p>
        </div>
        <div className='title-bebidas'>
            <br />
            <br />
            <hr className='mb-3'/>
            <h5>Bebidas</h5>
            <hr className='mt-4' />
        </div>
        <div className='items-bebidas'>
          <Row>
            {bebidas.map(bebida => (
              <CardBebidas key={bebida.id} {...bebida} id={bebida.id} />
            ))}
            </Row>
        </div>
        <div className='title-comida'>
          <br />
          <hr className='mb-3' />
          <h5>Comida</h5>
          <hr  className='mt-4'/>
        </div>
        <div className='items-comida'>
          <Row>
            {comidas.map(comida => (
              <CardComida key={comida.id} {...comida} id={comida.id} />
            ))}
          </Row>
        </div>
        <div className='title-casa'>
          <br />
          <hr className='mb-3' />
          <h5>En Casa</h5>
          <hr className='mt-4' />
        </div>
        <div className='items-casa'>
          <Row>
            {itemCasa.map(casa => (
              <CardCasa key={casa.id} {...casa} id={casa.id} />
            ))}
          </Row>
        </div>
    </Container>
  )
}

export default Items
