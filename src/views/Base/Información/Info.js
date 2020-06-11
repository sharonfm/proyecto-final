import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Row } from 'reactstrap';
import Image1 from './Slides/imagen1.png';
import Image2 from './Slides/imagen2.png';
import Image3 from './Slides/imagen3.png';

const items = [
  {
    src: Image1,
    altText: 'Slide 1',
  },
  {
    src: Image2,
    altText: 'Slide 2',
  },
  {
    src: Image3,
    altText: 'Slide 3',
  },
];

class Carousels extends Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    // this.state = {
    //   user: null,
    // }

    //this.authListener = this.authListener.bind(this);
  }
  // componentDidMount() {
  //   this.authListener();
  // }
  // authListener() {
  //   fire.auth().onAuthStateChanged((user) => {
  //     if(user) {
  //       this.setState({ user })
  //     } else {
  //       this.setState( {user: null})
  //     }
  //   })

  // }

  

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides2 = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="d-block w-100" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div className="animated fadeIn">
        <Row style={{justifyContent: 'center', marginBottom:'30px'}}>  
          <Col xs="12" sm="9">    
            <Card className="text-center">
              <CardHeader style={{color:'#43425D'}}>
                <h1><strong>Gobierno y Gestión de TI</strong> </h1>
              </CardHeader>
              <CardBody>
                <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                  <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                  {slides2}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h1 style={{color:'#43425D', textAlign:'center', marginBottom:'30px'}}> Definición de los dominios activos en G&G TI </h1>
        <Card className=" text-center">
            <CardHeader style={{backgroundColor:'#696791'}}></CardHeader>
            <CardBody><h3 style={{color:'#43425D'}}>EDM→ Evaluar, Dirigir y Monitorizar</h3></CardBody>
        </Card>
        
        <Row >
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className='text-center'>
              <h4 style={{color:'#43425D'}}>EDM01</h4> 
              </CardHeader>
              <CardBody className= 'text-center'>
                Garantizar el establecimiento y mantenimiento del marco de gobierno
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>EDM03</h4> 
              </CardHeader>
              <CardBody className= 'text-center'>
                Asegurar la optimización del riesgo
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>EDM04</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
                Asegurar la optimización de los recursos
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>EDM05</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Asegurar la transparencia de las partes interesadas
              </CardBody>
              </Card>
          </Col>
        </Row>

        <Card className="text-center">
            <CardHeader style={{backgroundColor:'#696791'}}></CardHeader>
            <CardBody><h3 style={{color:'#43425D'}}>APO→ Alinear, Planificar y Organizar</h3></CardBody>
        </Card>

        <Row style={{justifyContent: 'center'}}>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>APO01</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar el marco de gestión de I&T
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>APO03</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar la arquitectura empresarial
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>APO04</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar la arquitectura empresarial
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>APO06</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar el presupuesto y los costes
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>APO08</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar las relaciones
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>APO09</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar los acuerdos de servicio
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>APO11</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar la calidad
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>APO13</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar la seguridad
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>APO14</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar los datos
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Card className="text-center">
            <CardHeader style={{backgroundColor:'#696791'}}></CardHeader>
            <CardBody><h3 style={{color:'#43425D'}}>BAI→ Construir, Adquirir e Implementar</h3></CardBody>
        </Card>
        
        <Row>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>BAI01</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar los programas
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>BAI02</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar la definición de requerimientos
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>BAI03</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar la identificación y construcción de soluciones
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>BAI04</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar la disponibilidad y capacidad
              </CardBody>
              </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>BAI05</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar los cambios organizativos
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>BAI06</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar los cambios de TI
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>BAI07</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar la aceptación y la transición de los cambios de TI
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>BAI11</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar los proyectos
              </CardBody>
              </Card>
          </Col>
        </Row>

        <Card className="text-center">
            <CardHeader style={{backgroundColor:'#696791'}}></CardHeader>
            <CardBody><h3 style={{color:'#43425D'}}>DSS→ Entregar, Dar Servicio y Soporte</h3></CardBody>
        </Card>
        
        <Row style={{justifyContent: 'center'}}>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>DSS01</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar las operaciones
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>DSS02</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar las peticiones y los incidentes del servicio
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>DSS05</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar los servicios de seguridad
              </CardBody>
            </Card>
          </Col>
        </Row>
      
        <Card className="text-center">
            <CardHeader style={{backgroundColor:'#696791'}}></CardHeader>
            <CardBody><h3 style={{color:'#43425D'}}>MEA→ Monitorizar, Evaluar y Valorar</h3></CardBody>
        </Card>
        
        <Row>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>MEA01</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar la monitorización del rendimiento y la conformidad
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>MEA02</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar el sistema de control interno
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>MEA03</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar el cumplimiento de los requerimientos externos
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>MEA04</h4>
              </CardHeader>
              <CardBody className= 'text-center'>
              Gestionar el aseguramiento
              </CardBody>
              </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Carousels;