import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Row } from 'reactstrap';
import Image1 from './Slides/imagen1.png';
//import Image2 from './Slides/logo2.png';

const items = [
  {
    src: Image1,
    altText: 'Slide 1',
  },
  {
    src: Image1,
    altText: 'Slide 2',
  },
  {
    src: Image1,
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
  }

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
        <Row style={{justifyContent: 'center'}}>  
          <Col xs="12" sm="8">    
            <Card className="text-center">
              <CardHeader style={{color:'#43425D'}}>
                <h1><strong>Governance y Gestión de TI</strong> </h1>
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

        <Card className="card-accent-primary text-center">
            <CardHeader><h3 style={{color:'#43425D'}}>EDM→ Evaluar, Dirigir y Monitorizar</h3></CardHeader>
        </Card>
        
        <Row >
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>EDM01</h4> Garantizar el establecimiento y mantenimiento del marco de gobierno
              </CardHeader>
              <CardBody>
              Proporcionar un enfoque uniforme, integrado y alineado con el enfoque de gobierno de la empresa
              Las decisiones relacionadas con I&T deben hacerse en línea con las estrategias y objetivos de la empresa 
              y el valor esperado es alcanzado.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>EDM03</h4> Asegurar la optimización del riesgo
              </CardHeader>
              <CardBody>
                Asegurarse de que el riesgo de negocio relacionado con I&T no exceda el apetito 
                y tolerancia al riesgo de la empresa, que se identifique y gestione el impacto 
                del riesgo de I&T en el valor de negocio y que se minimicen los posibles fallos de cumplimiento.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>EDM04</h4> Asegurar la optimización de los recursos
              </CardHeader>
              <CardBody>
                Asegurarse de que las necesidades de recursos de la empresa se satisfagan de 
                manera óptima, que los costes de I&T se optimicen, y que exista una mayor probabilidad 
                de obtener beneficios y buena disposición para cambios futuros.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>EDM05</h4> Asegurar la transparencia de las partes interesadas
              </CardHeader>
              <CardBody>
                Asegurarse de que las partes interesadas apoyen la estrategia y la hoja de ruta de I&T, 
                que la comunicación con las partes interesadas sea eficaz y oportuna, y que se establezcan 
                las bases para los informes con el fin de aumentar el desempeño. Identificar las áreas de mejora y 
                confirmar que los objetivos y estrategias relacionados con I&T se ajusten a la estrategia de la empresa.
              </CardBody>
              </Card>
          </Col>
        </Row>

        <Card className="card-accent-primary text-center">
            <CardHeader><h3 style={{color:'#43425D'}}>APO→ Alinear, Planificar y Organizar</h3></CardHeader>
        </Card>

        <Row>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>APO01</h4> Gestionar el marco de gestión de I&T
              </CardHeader>
              <CardBody>
                Implementar un enfoque uniforme de gestión para permitir que se alcancen los requisitos de gobierno empresarial,
                 con cobertura de componentes de gobierno, como los procesos de gestión, las estructuras organizativas, 
                 los roles y las responsabilidades, las actividades confiables y repetibles, los elementos de información, 
                 las políticas y procedimientos, las habilidades y las competencias, la cultura y el comportamiento,
                  y los servicios, infraestructura y aplicaciones.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>APO03</h4> Gestionar la arquitectura empresarial
              </CardHeader>
              <CardBody>
                Representar los diferentes componentes que conforman la empresa y sus interrelaciones, 
                así como los principios que guían su diseño y evolución a lo largo del tiempo, para posibilitar 
                una prestación estándar, atenta y eficiente de los objetivos operativos y estratégicos.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>APO04</h4> Gestionar la arquitectura empresarial
              </CardHeader>
              <CardBody>
                Representar los diferentes componentes que conforman la empresa y sus interrelaciones,
                así como los principios que guían su diseño y evolución a lo largo del tiempo, para posibilitar
                una prestación estándar, atenta y eficiente de los objetivos operativos y estratégicos.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>APO06</h4> Gestionar el presupuesto y los costes
              </CardHeader>
              <CardBody>
                Fomentar la asociación entre TI y las partes interesadas de la empresa para permitir 
                el uso eficaz y eficiente de los recursos relacionados con I&T, y proporcionar transparencia y 
                rendición de cuentas sobre el coste y el valor de soluciones y servicios para el negocio. 
                Habilitar a la empresa para que tome decisiones informadas sobre el uso de soluciones y servicios de I&T.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>APO08</h4> Gestionar las relaciones
              </CardHeader>
              <CardBody>
              Facilitar el conocimiento, habilidades y comportamientos correctos para generar mejores resultados, 
              aumentar la credibilidad, la confianza mutua y el uso eficaz de los recursos para estimular una relación 
              productiva con las partes interesadas de la empresa.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>APO09</h4> Gestionar los acuerdos de servicio
              </CardHeader>
              <CardBody>
                Asegurarse de que los productos, servicios y niveles de servicio de I&T satisfagan
                las necesidades actuales y futuras de la empresa.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>APO11</h4> Gestionar la calidad
              </CardHeader>
              <CardBody>
                Asegurar la entrega consistente de soluciones y servicios tecnológicos 
                para satisfacer los requisitos de calidad de la empresa y las necesidades de las partes interesadas.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>APO13</h4> Gestionar la seguridad
              </CardHeader>
              <CardBody>
                Mantener el impacto y la existencia de incidentes de seguridad de la información 
                dentro de los niveles de apetito de riesgo de la empresa.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>APO14</h4> Gestionar los datos
              </CardHeader>
              <CardBody>
                Asegurar el uso eficaz de activos de datos críticos para lograr las metas y objetivos empresariales.
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Card className="card-accent-primary text-center">
            <CardHeader><h3 style={{color:'#43425D'}}>BAI→ Construir, Adquirir e Implementar</h3></CardHeader>
        </Card>
        
        <Row>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>BAI01</h4> Gestionar los programas
              </CardHeader>
              <CardBody>
              Obtener el valor de negocio deseado y reducir el riesgo de retrasos, costes y erosión de valor inesperados. 
              Para ello, se deben mejorar las comunicaciones y la participación del negocio y de los usuarios finales, 
              asegurar el valor y la calidad de los entregables de los programas y realizar un seguimiento de los proyectos
               dentro de los programas y maximizar la contribución del programa al portafolio de inversiones.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>BAI02</h4> Gestionar la definición de requerimientos
              </CardHeader>
              <CardBody>
              Crear soluciones óptimas que satisfagan las necesidades de la empresa, mientras se minimiza el riesgo.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>BAI03</h4> Gestionar la identificación y construcción de soluciones
              </CardHeader>
              <CardBody>
              Asegurar una entrega ágil y escalable de productos y servicios digitales. Establecer soluciones oportunas y 
              rentables (tecnología, procesos de negocio y flujos de trabajo) capaces de apoyar los objetivos estratégicos 
              y operativos de la empresa.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>BAI04</h4> Gestionar la disponibilidad y capacidad
              </CardHeader>
              <CardBody>
              Mantener la disponibilidad del servicio, la gestión eficiente de los recursos y la optimización 
              del rendimiento del sistema a través de la predicción de los requisitos futuros de rendimiento y capacidad.
              </CardBody>
              </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>BAI05</h4> Gestionar los cambios organizativos
              </CardHeader>
              <CardBody>
              Preparar y conseguir el compromiso a las partes interesadas para el cambio en el negocio y reducir el riesgo de fracaso.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>BAI06</h4> Gestionar los cambios de TI
              </CardHeader>
              <CardBody>
              Facilitar una ejecución de cambios rápida y confiable para el negocio. 
              Mitigar el riesgo de afectar negativamente a la estabilidad o integridad del entorno que se ha modificado.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>BAI07</h4> Gestionar la aceptación y la transición de los cambios de TI
              </CardHeader>
              <CardBody>
                Implementar soluciones seguras y conforme a las expectativas y resultados acordados.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>BAI11</h4> Gestionar los proyectos
              </CardHeader>
              <CardBody>
                Lograr los resultados definidos del proyecto y reducir el riesgo de retrasos inesperados, 
                costes y erosión del valor mediante la mejora de las comunicaciones y la participación del 
                negocio y de los usuarios finales. Asegurar el valor y la calidad de los entregables del 
                proyecto y maximizar su contribución a los programas y al portafolio de inversión definidos.
              </CardBody>
              </Card>
          </Col>
        </Row>

        <Card className="card-accent-primary text-center">
            <CardHeader><h3 style={{color:'#43425D'}}>DSS→ Entregar, Dar Servicio y Soporte</h3></CardHeader>
        </Card>
        
        <Row style={{justifyContent: 'center'}}>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>DSS01</h4> Gestionar las operaciones
              </CardHeader>
              <CardBody>
                Proporcionar los resultados de los productos y servicios operativos de I&T según lo planeado.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>DSS02</h4> Gestionar las peticiones y los incidentes del servicio
              </CardHeader>
              <CardBody>
                Lograr una mayor productividad y minimizar las interrupciones mediante 
                la resolución rápida de consultas e incidentes de los usuarios. Evaluar el impacto
                de los cambios y hacer frente a los incidentes del servicio. Resolver las solicitudes
                de los usuarios y restaurar el servicio como respuesta ante incidentes.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>DSS05</h4> Gestionar los servicios de seguridad
              </CardHeader>
              <CardBody>
                Minimizar el impacto en el negocio de las vulnerabilidades e incidentes operativos de seguridad de la información
              </CardBody>
            </Card>
          </Col>
        </Row>
      
        <Card className="card-accent-primary text-center">
            <CardHeader><h3 style={{color:'#43425D'}}>MEA→ Monitorizar, Evaluar y Valorar</h3></CardHeader>
        </Card>
        
        <Row>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>MEA01</h4> Gestionar la monitorización del rendimiento y la conformidad
              </CardHeader>
              <CardBody>
                Proporcionar transparencia en el desempeño y la conformidad e impulsar el logro de las metas.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>MEA02</h4> Gestionar el sistema de control interno
              </CardHeader>
              <CardBody>
                Dar información transparente a las partes interesadas clave sobre la idoneidad 
                del sistema de controles internos que permita, proporcionar credibilidad en las operaciones, 
                confianza en el logro de los objetivos de la empresa y una comprensión adecuada del riesgo residual.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>MEA03</h4> Gestionar el cumplimiento de los requerimientos externos
              </CardHeader>
              <CardBody>
                Asegurarse de que la empresa cumpla con todos los requisitos externos aplicables.
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="3" >
            <Card className="  text-justify">
              <CardHeader className="text-center">
              <h4 style={{color:'#43425D'}}>MEA04</h4> Gestionar el aseguramiento
              </CardHeader>
              <CardBody>
              Facilitar a la organización el diseño y desarrollo de iniciativas de aseguramiento eficaces
              y eficientes, proporcionando una guía sobre la planificación, alcance, ejecución y seguimiento
              de las revisiones de aseguramiento, usando una hoja de ruta basada en criterios de aseguramiento que sean bien acogidos.
              </CardBody>
              </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Carousels;