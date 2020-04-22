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
                                <h1>Criterios de evaluación para la Gestión </h1> <h1>del desempeño de los procesos</h1>
                            </CardHeader>
                            <CardBody>
                                <Row style={{ justifyContent: "center" }}>
                                    <Col xs="12" sm="9" >
                                        <CardGroup>
                                            <Card className="text-white  py-5 d-md-down-none" style={{ width: '50%', backgroundColor: '#43425D' }}>
                                                <CardBody className="text-center">
                                                    <div>
                                                        <h2>Niveles de capacidad para los procesos</h2>
                                                        <p>Existen 5 diferentes opciones para calificar</p>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                            <Card>
                                                <CardBody>
                                                    <div>
                                                        <h4>
                                                            Something
                                                    </h4>
                                                    </div>
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
                                                    <div>
                                                        <h4>
                                                            Something
                                                    </h4>
                                                    </div>
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
                                                        <p>Existen 5 diferentes opciones para calificar</p>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                            <Card>
                                                <CardBody>
                                                    <div>
                                                        <h4>
                                                            Something
                                                        </h4>
                                                    </div>
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