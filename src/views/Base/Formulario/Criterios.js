import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardGroup,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Pagination,
    PaginationItem,
    PaginationLink,
    Row,
} from 'reactstrap';
import Typography from '@material-ui/core/Typography';
class Forms2 extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }
    
    render() {
        return (
            <div className="animated fadeIn">
                <Row style={{ justifyContent: 'center' }}>
                    <Col xs="12" sm="10">
                        <Card>
                            <CardHeader align="center" style={{ color: '#43425D' }}>
                            <Row style={{ justifyContent: 'center' }}>
                                    <Pagination>
                                        <PaginationItem disabled><PaginationLink style={{ color: '#43425D' }} previous tag="button"></PaginationLink></PaginationItem>
                                        <PaginationItem active><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D' }} tag="button">Criterios</PaginationLink></PaginationItem>
                                        <Link to="/base/form">
                                            <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">1</PaginationLink></PaginationItem>
                                        </Link>
                                        <Link to="/base/form2">
                                            <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">2</PaginationLink></PaginationItem>
                                        </Link>
                                        <Link to="/base/form3">
                                            <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">3</PaginationLink></PaginationItem>
                                        </Link>
                                        <Link to="/base/form4">
                                            <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">4</PaginationLink></PaginationItem>
                                        </Link>
                                        <Link to="/base/form5">
                                            <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">5</PaginationLink></PaginationItem>
                                        </Link>
                                        <Link to="/base/form">
                                            <PaginationItem><PaginationLink style={{ color: '#43425D' }} next tag="button"></PaginationLink></PaginationItem>
                                        </Link>
                                    </Pagination>
                                </Row>
                                <h1>Criterios de evaluación para la Gestión </h1> <h1>del desempeño de los procesos</h1>
                            </CardHeader>
                            <CardBody>
                                <Row style={{ justifyContent: "center" }}>
                                    <Col xs="12" sm="9" >
                                        <CardGroup >
                                            <Card className="text-white  py-5 d-md-down-none" style={{ width: '50%', backgroundColor: '#43425D' }}>
                                                <CardBody className="text-center">
                                                    <div>
                                                        <h2>Niveles de capacidad para los procesos</h2>
                                                        <p>Existen 6 diferentes opciones para calificar</p>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                            <Card>
                                               <CardBody>
                                                   <Card>
                                                        <CardHeader align="center"><strong style={{color:'#43425D'}}>Calificaciones</strong></CardHeader>
                                                        <CardBody>
                                                            <Typography style={{textAlign:'center', color:"#43425D"}}  variant="body2">
                                                            <strong >CALIFICACIÓN CERO:</strong>
                                                            </Typography>
                                                            <Typography variant="body2" style={{color:"#43425D", textAlign:'justify'}}>
                                                            • Falta de cualquier capacidad básica.
                                                            </Typography>
                                                            <Typography variant="body2" style={{color:"#43425D", textAlign:'justify'}}>
                                                            • Estrategia incompleta para abordar el propósito de gobierno y gestión.
                                                            </Typography>
                                                            <Typography variant="body2" style={{color:"#43425D", textAlign:'justify'}}>
                                                            • La intención de todas las prácticas del proceso puede haberse definido o no.
                                                            </Typography>
                                                        </CardBody>
                                                        <CardBody>
                                                            <Typography style={{textAlign:'center', color:"#43425D"}}  variant="body2">
                                                            <strong >CALIFICACIÓN UNO:</strong>
                                                            </Typography>
                                                            <Typography  variant="body2" style={{color: '#43425D', textAlign:'justify'}}>
                                                            • El proceso logra más o menos su propósito a través de la aplicación 
                                                            de un conjunto de actividades incompleto que pueden caracterizarse como iniciales o intuitivas, no muy organizadas.
                                                            </Typography>
                                                        </CardBody>
                                                        <CardBody>
                                                            <Typography style={{textAlign:'center', color:"#43425D"}}  variant="body2">
                                                            <strong >CALIFICACIÓN DOS:</strong>
                                                            </Typography>
                                                            <Typography  variant="body2" style={{color: '#43425D', textAlign:'justify'}}>
                                                            • El proceso lograr su propósito a través de la aplicación de un conjunto 
                                                            de actividades básicas, pero completas, que pueden caracterizarse como realizadas.
                                                            </Typography>
                                                        </CardBody>
                                                        <CardBody>
                                                            <Typography style={{textAlign:'center', color:"#43425D"}}  variant="body2">
                                                            <strong >CALIFICACIÓN TRES:</strong>
                                                            </Typography>
                                                            <Typography  variant="body2" style={{color: '#43425D', textAlign:'justify'}}>
                                                            • El proceso logra su propósito de forma mucho más organizada usando
                                                            activos para la organización. Los procesos están, por lo general, bien definidos.
                                                            </Typography>
                                                        </CardBody>
                                                        <CardBody>
                                                            <Typography style={{textAlign:'center', color:"#43425D"}}  variant="body2">
                                                            <strong >CALIFICACIÓN CUATRO:</strong>
                                                            </Typography>
                                                            <Typography  variant="body2" style={{color: '#43425D', textAlign:'justify'}}>
                                                            • El proceso lograr su propósito, está bien definido, 
                                                            y su rendimiento se mide (de forma cuantitativa).
                                                            </Typography>
                                                        </CardBody>
                                                        <CardBody>
                                                            <Typography style={{textAlign:'center', color:"#43425D"}}  variant="body2">
                                                            <strong >CALIFICACIÓN CINCO:</strong>
                                                            </Typography>
                                                            <Typography  variant="body2" style={{color: '#43425D', textAlign:'justify'}}>
                                                            • El proceso lograr su propósito, está bien definido, su rendimiento se mide
                                                            para mejorar el desempeño y se persigue la mejora continua.
                                                            </Typography>
                                                        </CardBody>
                                                   </Card>
                                               </CardBody>
                                            </Card>
                                        </CardGroup>
                                    </Col>
                                </Row>

                            </CardBody>
                            <CardBody>
                                <Row style={{ justifyContent: "center" }}>
                                    <Col xs="12" sm="9" >
                                        <CardGroup>
                                            <Card className="text-white  py-5 d-md-down-none" style={{ width: '50%', backgroundColor: '#43425D' }}>
                                                <CardBody className="text-center">
                                                    <div>
                                                        <h2>Calificaciones para las actividades los procesos</h2>
                                                        <p>Existen 4 diferentes opciones para calificar</p>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                            <Card>
                                                <CardBody>
                                                   <Card>
                                                        <CardHeader align="center"><strong style={{color:'#43425D'}}>Calificaciones</strong></CardHeader>
                                                        <CardBody>
                                                            <Typography style={{textAlign:'center', color:"#43425D"}}  variant="body2">
                                                            <strong >COMPLETAMENTE:</strong>
                                                            </Typography>
                                                            <Typography variant="body2" style={{color:"#43425D", textAlign:'justify'}}>
                                                            • El nivel de capacidad se alcanza para más del 85 por ciento. 
                                                            (Este sigue siendo un juicio personal, pero puede corroborarse mediante
                                                            el examen o evaluación de los componentes del habilitador, como las actividades
                                                            del proceso, las metas del proceso o las buenas prácticas de la estructura 
                                                            organizativa).
                                                            </Typography>
                                                        </CardBody>
                                                        <CardBody>
                                                            <Typography style={{textAlign:'center', color:"#43425D"}}  variant="body2">
                                                            <strong >LARGAMENTE:</strong>
                                                            </Typography>
                                                            <Typography  variant="body2" style={{color: '#43425D', textAlign:'justify'}}>
                                                            • El nivel de capacidad se alcanza para entre el 50 por ciento y el 85 por ciento.
                                                            </Typography>
                                                        </CardBody>
                                                        <CardBody>
                                                            <Typography style={{textAlign:'center', color:"#43425D"}}  variant="body2">
                                                            <strong >PARCIALMENTE:</strong>
                                                            </Typography>
                                                            <Typography  variant="body2" style={{color: '#43425D', textAlign:'justify'}}>
                                                            • El nivel de capacidad se alcanza para entre el 15 por ciento y el 50 por ciento.
                                                            </Typography>
                                                        </CardBody>
                                                        <CardBody>
                                                            <Typography style={{textAlign:'center', color:"#43425D"}}  variant="body2">
                                                            <strong >NO:</strong>
                                                            </Typography>
                                                            <Typography  variant="body2" style={{color: '#43425D', textAlign:'justify'}}>
                                                            • El nivel de capacidad se alcanza para menos del 15 por ciento.
                                                            </Typography>
                                                        </CardBody>
                                                   </Card>
                                               </CardBody>
                                            </Card>
                                        </CardGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardBody>
                                <Row style={{ justifyContent: "center" }}>
                                    <Col xs="12" sm="9" >
                                        <CardGroup>
                                            <Card className="text-white  py-5 d-md-down-none" style={{ width: '50%', backgroundColor: '#43425D' }}>
                                                <CardBody className="text-center">
                                                    <div>
                                                        <h2>Niveles de madurez para áreas prioritarias</h2>
                                                        <p>Existen 6 diferentes opciones para calificar</p>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                            <Card>
                                            <CardBody>
                                                   <Card>
                                                        <CardHeader align="center"><strong style={{color:'#43425D'}}>Calificaciones</strong></CardHeader>
                                                        <CardBody>
                                                            <Typography style={{textAlign:'center', color:"#43425D"}}  variant="body2">
                                                            <strong >CALIFICACIÓN CERO: INCOMPLETO</strong>
                                                            </Typography>
                                                            <Typography variant="body2" style={{color:"#43425D", textAlign:'justify'}}>
                                                            • El trabajo podría o no completarse para lograr el propósito de los objetivos
                                                            de gobierno y gestión del área prioritaria.
                                                            </Typography>
                                                        </CardBody>
                                                        <CardBody>
                                                            <Typography style={{textAlign:'center', color:"#43425D"}}  variant="body2">
                                                            <strong >CALIFICACIÓN UNO: INICIAL</strong>
                                                            </Typography>
                                                            <Typography  variant="body2" style={{color: '#43425D', textAlign:'justify'}}>
                                                            • El trabajo se finaliza, pero el objetivo e intención del área prioritaria no se han logrado aún.
                                                            </Typography>
                                                        </CardBody>
                                                        <CardBody>
                                                            <Typography style={{textAlign:'center', color:"#43425D"}}  variant="body2">
                                                            <strong >CALIFICACIÓN DOS: GESTIONADO</strong>
                                                            </Typography>
                                                            <Typography  variant="body2" style={{color: '#43425D', textAlign:'justify'}}>
                                                            • La planificación y la medición se producen, aunque no de forma estandarizada.
                                                            </Typography>
                                                        </CardBody>
                                                        <CardBody>
                                                            <Typography style={{textAlign:'center', color:"#43425D"}}  variant="body2">
                                                            <strong >CALIFICACIÓN TRES: DEFINIDO</strong>
                                                            </Typography>
                                                            <Typography  variant="body2" style={{color: '#43425D', textAlign:'justify'}}>
                                                            • Los estándares a nivel de empresa proporcionan directrices para la empresa en su conjunto.
                                                            </Typography>
                                                        </CardBody>
                                                        <CardBody>
                                                            <Typography style={{textAlign:'center', color:"#43425D"}}  variant="body2">
                                                            <strong >CALIFICACIÓN CUATRO: CUANTAVO</strong>
                                                            </Typography>
                                                            <Typography  variant="body2" style={{color: '#43425D', textAlign:'justify'}}>
                                                            • La empresa se basa en los datos, con la mejora cualitativa del desempeño.
                                                            </Typography>
                                                        </CardBody>
                                                        <CardBody>
                                                            <Typography style={{textAlign:'center', color:"#43425D"}}  variant="body2">
                                                            <strong >CALIFICACIÓN CINCO: OPTIMIZACIÓN</strong>
                                                            </Typography>
                                                            <Typography  variant="body2" style={{color: '#43425D', textAlign:'justify'}}>
                                                            • La empresa se centra en la mejora continua.
                                                            </Typography>
                                                        </CardBody>
                                                   </Card>
                                               </CardBody>
                                            </Card>
                                        </CardGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <Row style={{ justifyContent: 'center' }}>
                                    <Pagination>
                                        <PaginationItem disabled><PaginationLink style={{ color: '#43425D' }} previous tag="button"></PaginationLink></PaginationItem>
                                        <PaginationItem active><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D' }} tag="button">Criterios</PaginationLink></PaginationItem>
                                        <Link to="/base/form">
                                            <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">1</PaginationLink></PaginationItem>
                                        </Link>
                                        <Link to="/base/form2">
                                            <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">2</PaginationLink></PaginationItem>
                                        </Link>
                                        <Link to="/base/form3">
                                            <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">3</PaginationLink></PaginationItem>
                                        </Link>
                                        <Link to="/base/form4">
                                            <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">4</PaginationLink></PaginationItem>
                                        </Link>
                                        <Link to="/base/form5">
                                            <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">5</PaginationLink></PaginationItem>
                                        </Link>
                                        <Link to="/base/form">
                                            <PaginationItem><PaginationLink style={{ color: '#43425D' }} next tag="button"></PaginationLink></PaginationItem>
                                        </Link>
                                    </Pagination>
                                </Row>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Forms2;