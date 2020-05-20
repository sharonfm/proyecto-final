import React, { Component} from 'react';
import { Line, Pie, Radar } from 'react-chartjs-2';
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  DropdownToggle,
  Row,
  CardGroup,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';



// Card Chart 1 (Contiene cardChartData1 y cardChartOpts1)
const cardChartData1 = {
  labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5'],
  datasets: [
    {
      label: 'Resultado',
      backgroundColor: '#3b6978',
      borderColor: '#F2F2F2',
      data: [30, 10, 15, 22, 23],
    },
  ],
};



const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2 (Contiene cardChartData2 y cardChartOpts2)
const cardChartData2 = {
  labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5'],
  datasets: [
    {
      label: 'Resultado',
      backgroundColor: '#43425D',
      borderColor: '#F2F2F2',
      data: [30, 10, 15, 22, 23],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

const pie = {
  labels: [
    'P1',
    'P2',
    'P3',
    'P4',
    'P5',
  ],
  datasets: [
    {
      data: [30, 10, 15, 22, 23],
      backgroundColor: [
        '#43425D',
        '#413c69',
        '#3b6978',
        '#ad62aa',
        '#eab9c9',
      ],
    }],
};
const pie2 = {
  labels: [
    'P1',
    'P2',
    'P3',
    'P4',
    'P5',
  ],
  datasets: [
    {
      data: [30, 10, 15, 22, 23],
      backgroundColor: [
        '#21243d',
        '#512b58',
        '#b80d57',
        '#ea9085',
        '#ffa372',
      ],
    }],
};

const radar = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First dataset',
      //backgroundColor: '#43425D',
      borderColor: '#43425D',
      pointBackgroundColor: '#43425D',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#43425D',
      data: [5, 2, 3, 5, 3, 4, 1],
    },
    
  ],
};
const radar2 = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
      {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [1, 4, 5, 3, 4, 4, 5],
    },
  ],
};


class Estadisticas extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row style={{ justifyContent: 'center' }}>
          <Col xs="12" sm="10">
            <Card>
              <CardHeader align="center" style={{ color: '#43425D' }}>
                <h1>Estadísticas de los resultados </h1>
              </CardHeader>
              <CardBody>
                <CardGroup>
                  <Card className="text-white" style={{backgroundColor:'#43425D'}}>
                    <CardBody className="pb-0">
                      <ButtonGroup className="float-right">
                        <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                          <DropdownToggle caret className="p-0" color="transparent">
                            <i className="icon-info"></i>
                          </DropdownToggle>
                          <DropdownMenu right>
                          <DropdownItem>Click en algún punto de la gráfica para observar la calificación</DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </ButtonGroup>
                      <div className="text-value">#Valor (Calificación)</div>
                      <div>Área evaluada (APO, BAI, DSS o MEA)</div>
                    </CardBody>
                    <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                      <Line data={cardChartData2} options={cardChartOpts2} height={70} />
                    </div>
                  </Card>
                  <Card>
                    <CardHeader>
                    <h5 align='center'>Datos</h5>
                    <p align='center'>Haga click en un color para observar la calificación</p>
                    </CardHeader>
                    <CardBody>
                      <div className="chart-wrapper">
                        <Radar data={radar} />
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
              </CardBody>
              <CardBody>
                <CardGroup>
                  <Card className="text-white " style={{backgroundColor:'#3b6978'}}>
                    <CardBody className="pb-0">
                      <ButtonGroup className="float-right">
                        <ButtonDropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                          <DropdownToggle caret className="p-0" color="transparent">
                            <i className="icon-info"></i>
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem>Haga click en un color para observar la calificación</DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </ButtonGroup>
                      <div className="text-value">#Valor (Calificación)</div>
                      <div>Área evaluada (APO, BAI, DSS o MEA)</div>
                    </CardBody>
                    <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                      <Line data={cardChartData1} options={cardChartOpts1} height={70} />
                    </div>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h5 align='center'>Datos</h5>
                      <p align='center'>Haga click en un color para observar la calificación</p>
                    </CardHeader>
                    <CardBody>
                      <div className="chart-wrapper">
                        <Radar data={radar2} />
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
              </CardBody>
              <CardBody>
                <CardGroup>
                  <Card className="text-white" style={{backgroundColor:'#43425D'}}>
                    <CardBody className="pb-0">
                      <ButtonGroup className="float-right">
                        <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                          <DropdownToggle caret className="p-0" color="transparent">
                            <i className="icon-info"></i>
                          </DropdownToggle>
                          <DropdownMenu right>
                          <DropdownItem>Click en algún punto de la gráfica para observar la calificación</DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </ButtonGroup>
                      <div className="text-value">#Valor (Calificación)</div>
                      <div>Área evaluada (APO, BAI, DSS o MEA)</div>
                    </CardBody>
                    <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                      <Line data={cardChartData2} options={cardChartOpts2} height={70} />
                    </div>
                  </Card>
                  <Card>
                  <CardHeader>
                      <h5 align='center'>Datos</h5>
                      <p align='center'>Haga click en un color para observar la calificación</p>
                    </CardHeader>
                    <CardBody>
                      <div className="chart-wrapper">
                        <Radar data={radar} />
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
              </CardBody>
              <CardBody>
                <CardGroup>
                  <Card className="text-white " style={{backgroundColor:'#3b6978'}}>
                    <CardBody className="pb-0">
                      <ButtonGroup className="float-right">
                        <ButtonDropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                          <DropdownToggle caret className="p-0" color="transparent">
                            <i className="icon-info"></i>
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem>Haga click en un color para observar la calificación</DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </ButtonGroup>
                      <div className="text-value">#Valor (Calificación)</div>
                      <div>Área evaluada (APO, BAI, DSS o MEA)</div>
                    </CardBody>
                    <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                      <Line data={cardChartData1} options={cardChartOpts1} height={70} />
                    </div>
                  </Card>
                  <Card>
                  <CardHeader>
                      <h5 align='center'>Datos</h5>
                      <p align='center'>Haga click en un color para observar la calificación</p>
                    </CardHeader>
                    <CardBody>
                      <div className="chart-wrapper">
                        <Radar data={radar2} />
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
              </CardBody>
              <CardBody>
                <CardGroup>
                  <Card className="text-white" style={{backgroundColor:'#43425D'}}>
                    <CardBody className="pb-0">
                      <ButtonGroup className="float-right"> 
                        <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                          <DropdownToggle caret className="p-0" color="transparent">
                            <i className="icon-info"></i>
                          </DropdownToggle>
                          <DropdownMenu right>
                          <DropdownItem>Click en algún punto de la gráfica para observar la calificación</DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </ButtonGroup>
                      <div className="text-value">#Valor (Calificación)</div>
                      <div>Área evaluada (APO, BAI, DSS o MEA)</div>
                    </CardBody>
                    <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                      <Line data={cardChartData2} options={cardChartOpts2} height={70} />
                    </div>
                  </Card>
                  <Card>
                  <CardHeader>
                      <h5 align='center'>Datos</h5>
                      <p align='center'>Haga click en un color para observar la calificación</p>
                    </CardHeader>
                    <CardBody>
                      <div className="chart-wrapper">
                        <Radar data={radar} />
                      </div>
                    </CardBody>
                  </Card> 
                </CardGroup>
              </CardBody>
              
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Estadisticas;
