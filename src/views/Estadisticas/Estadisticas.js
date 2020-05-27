import React, { Component, useState} from 'react';
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




const Estadisticas= () => {

  const [answers1,setAnswers1] = useState([])
  const [answers2,setAnswers2] = useState([])
  const [answers3,setAnswers3] = useState([])
  const [answers4,setAnswers4] = useState([])
  const [answers5,setAnswers5] = useState([])


  const [dropdownOpen,setDropDownOpen] = useState(false)
  const [radioSelected,setRadioSelected] = useState(2)
  const toggle = () => {setDropDownOpen((previousState)=>!previousState)}
  const onRadioBtnClick = (value) => {setRadioSelected(value)}

  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  React.useEffect(()=>{
    setAnswers1(JSON.parse(localStorage.getItem("p1")))
    setAnswers2(JSON.parse(localStorage.getItem("p2")))
    setAnswers3(JSON.parse(localStorage.getItem("p3")))
    setAnswers4(JSON.parse(localStorage.getItem("p4")))
    setAnswers5(JSON.parse(localStorage.getItem("p5")))

    console.log(JSON.parse(localStorage.getItem("p1")))
    console.log(JSON.parse(localStorage.getItem("p2")))
    console.log(JSON.parse(localStorage.getItem("p3")))
    console.log(JSON.parse(localStorage.getItem("p4")))
    console.log(JSON.parse(localStorage.getItem("p5")))
  },[])


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

const cardChartData1 = {
  labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5'/* , 'Pregunta 6', 'Pregunta 7', 'Pregunta 8', 'Pregunta 9', 'Pregunta 10', 'Pregunta 11', 'Pregunta 12' */],
  datasets: [
    {
      label: 'Resultado',
      backgroundColor: '#43425D',
      borderColor: '#F2F2F2',
      data:  Object.values(answers1),
    },
  ],
};

const cardChartData2 = {
  labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5'/* , 'Pregunta 6', 'Pregunta 7', 'Pregunta 8', 'Pregunta 9', 'Pregunta 10', 'Pregunta 11', 'Pregunta 12' */],
  datasets: [
    {
      label: 'Resultado',
      backgroundColor: '#3b6978',
      borderColor: '#F2F2F2',
      data: Object.values(answers2),
    },
  ],
};

const cardChartData3 = {
  labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5'/* , 'Pregunta 6', 'Pregunta 7', 'Pregunta 8', 'Pregunta 9', 'Pregunta 10', 'Pregunta 11', 'Pregunta 12' */],
  datasets: [
    {
      label: 'Resultado',
      backgroundColor: '#43425D',
      borderColor: '#F2F2F2',
      data:  Object.values(answers3),
    },
  ],
};

const cardChartData4 = {
  labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5'/* , 'Pregunta 6', 'Pregunta 7', 'Pregunta 8', 'Pregunta 9', 'Pregunta 10', 'Pregunta 11', 'Pregunta 12' */],
  datasets: [
    {
      label: 'Resultado',
      backgroundColor: '#3b6978',
      borderColor: '#F2F2F2',
      data: Object.values(answers4),
    },
  ],
};

const cardChartData5 = {
  labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5'/* , 'Pregunta 6', 'Pregunta 7', 'Pregunta 8', 'Pregunta 9', 'Pregunta 10', 'Pregunta 11', 'Pregunta 12' */],
  datasets: [
    {
      label: 'Resultado',
      backgroundColor: '#43425D',
      borderColor: '#F2F2F2',
      data:  Object.values(answers5),
    },
  ],
};


const radar = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing'],
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
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing'],
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
                     
                      <div className="text-value">#Valor (Calificación)</div>
                      <div>Área evaluada (APO, BAI, DSS o MEA)</div>
                    </CardBody>
                    <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                      <Line data={cardChartData3} options={cardChartOpts1} height={70} />
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
                     
                      <div className="text-value">#Valor (Calificación)</div>
                      <div>Área evaluada (APO, BAI, DSS o MEA)</div>
                    </CardBody>
                    <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                      <Line data={cardChartData4} options={cardChartOpts2} height={70} />
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
                     
                      <div className="text-value">#Valor (Calificación)</div>
                      <div>Área evaluada (APO, BAI, DSS o MEA)</div>
                    </CardBody>
                    <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                      <Line data={cardChartData5} options={cardChartOpts1} height={70} />
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

export default Estadisticas;
