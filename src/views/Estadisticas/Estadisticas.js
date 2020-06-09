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

  const [answers1,setAnswers1] = useState({0: "0", 1: "0", 2: "0", 3: "0", 4: "0", 5: "0", 6: "0", 7: "0", 8: "0", 9: "0", 10: "0", 11: "0"})
  const [answers2,setAnswers2] = useState({0: "0", 1: "0", 2: "0", 3: "0", 4: "0", 5: "0", 6: "0", 7: "0", 8: "0", 9: "0", 10: "0", 11: "0", 12: "0", 13: "0", 14: "0", 15: "0", 16: "0", 17: "0", 18: "0", 19: "0", 20: "0", 21: "0", 22: "0", 23: "0", 24: "0", 25: "0", 26: "0"})
  const [answers3,setAnswers3] = useState({0: "0", 1: "0", 2: "0", 3: "0", 4: "0", 5: "0", 6: "0", 7: "0", 8: "0", 9: "0", 10: "0", 11: "0", 12: "0", 13: "0", 14: "0", 15: "0", 16: "0", 17: "0", 18: "0", 19: "0", 20: "0", 21: "0", 22: "0", 23: "0"})
  const [answers4,setAnswers4] = useState({0: "0", 1: "0", 2: "0", 3: "0", 4: "0", 5: "0", 6: "0", 7: "0", 8: "0"})
  const [answers5,setAnswers5] = useState({0: "0", 1: "0", 2: "0", 3: "0", 4: "0", 5: "0", 6: "0", 7: "0", 8: "0", 9: "0", 10: "0", 11: "0"})


  const [dropdownOpen,setDropDownOpen] = useState(false)
  const [radioSelected,setRadioSelected] = useState(2)
  const toggle = () => {setDropDownOpen((previousState)=>!previousState)}
  const onRadioBtnClick = (value) => {setRadioSelected(value)}

  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  React.useEffect(()=>{
    if(localStorage.getItem("p1")==null){
      console.log("cristianesmarica")
    }else{
      setAnswers1(JSON.parse(localStorage.getItem("p1")))
    }

    if(localStorage.getItem("p2")==null){
      console.log("cristianesmarica")
    }else{
      setAnswers2(JSON.parse(localStorage.getItem("p2")))
    }
    
    if(localStorage.getItem("p3")==null){
      console.log("cristianesmarica")
    }else{
      setAnswers3(JSON.parse(localStorage.getItem("p3")))
    }

    if(localStorage.getItem("p4")==null){
      console.log("cristianesmarica")
    }else{
      setAnswers4(JSON.parse(localStorage.getItem("p4")))
    }

    if(localStorage.getItem("p5")==null){
      console.log("cristianesmarica")
    }else{
      setAnswers5(JSON.parse(localStorage.getItem("p5")))
    }

    console.log(answers1)
    console.log(answers2)
    console.log(answers3)
    console.log(answers4)
    console.log(answers5)
    /* if(answers1.length === 0){
      localStorage.setItem("p1", {0: "0", 1: "0", 2: "0", 3: "0", 4: "0", 5: "0", 6: "0", 7: "0", 8: "0", 9: "0", 10: "0", 11: "0"})
      setAnswers1(JSON.parse(localStorage.getItem("p1")))
      console.log("answ1")
    }
    if(answers2.length === 0){
      localStorage.setItem("p2", {0: "0", 1: "0", 2: "0", 3: "0", 4: "0", 5: "0", 6: "0", 7: "0", 8: "0", 9: "0", 10: "0", 11: "0", 12: "0", 13: "0", 14: "0", 15: "0", 16: "0", 17: "0", 18: "0", 19: "0", 20: "0", 21: "0", 22: "0", 23: "0", 24: "0", 25: "0", 26: "0"})
      setAnswers2(JSON.parse(localStorage.getItem("p2")))
      console.log("answ2")
    }
    if(answers3.length === 0){
      localStorage.setItem("p3", JSON.parse({0: "0", 1: "0", 2: "0", 3: "0", 4: "0", 5: "0", 6: "0", 7: "0", 8: "0", 9: "0", 10: "0", 11: "0", 12: "0", 13: "0", 14: "0", 15: "0", 16: "0", 17: "0", 18: "0", 19: "0", 20: "0", 21: "0", 22: "0", 23: "0"}))
      setAnswers3(JSON.parse(localStorage.getItem("p3")))
      console.log("answ3")
    }
    if(answers4.length === 0){
      localStorage.setItem("p4", JSON.parse({0: "0", 1: "0", 2: "0", 3: "0", 4: "0", 5: "0", 6: "0", 7: "0", 8: "0"}))
      setAnswers4(JSON.parse(localStorage.getItem("p4")))
      console.log("answ4")
    }
    if(answers5.length === 0){
      localStorage.setItem("p5", JSON.parse({0: "0", 1: "0", 2: "0", 3: "0", 4: "0", 5: "0", 6: "0", 7: "0", 8: "0", 9: "0", 10: "0", 11: "0"}))
      setAnswers5(JSON.parse(localStorage.getItem("p5")))
      console.log("answ5")
    } */
    console.log(JSON.parse(localStorage.getItem("p1")))
    console.log(JSON.parse(localStorage.getItem("p2")))
    console.log(JSON.parse(localStorage.getItem("p3")))
    console.log(JSON.parse(localStorage.getItem("p4")))
    console.log(JSON.parse(localStorage.getItem("p5")))
  },[])



  // Card Chart form 1
const cardChartData1 = {
  labels: ['EDM01', 'EDM01', 'EDM01', 'EDM03', 'EDM03' , 'EDM03', 'EDM04', 'EDM04', 'EDM04', 'EDM05', 'EDM05', 'EDM05' ],
  datasets: [
    {
      label: 'Resultado',
      backgroundColor: '#43425D',
      borderColor: '#F2F2F2',
      data:  Object.values(answers1),
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
  labels: ['APO1', 'APO1', 'APO1', 'APO3', 'APO3' , 'APO3', 'APO04', 'APO04', 'APO04', 'APO6', 'APO6', 'APO6', 'APO8', 'APO8', 'APO8', 'APO9', 'APO9', 'APO9', 'APO11', 'APO11', 'APO11', 'APO13', 'APO13', 'APO13', 'APO14', 'APO14', 'APO14'],
  datasets: [
    {
      label: 'Resultado',
      backgroundColor: '#3b6978',
      borderColor: '#F2F2F2',
      data: Object.values(answers2),
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

const cardChartData3 = {
  labels: ['BAI01', 'BAI01', 'BAI01', 'BAI02', 'BAI02' , 'BAI02', 'BAI003', 'BAI003', 'BAI003', 'BAI04', 'BAI04', 'BAI04', 'BAI05', 'BAI05', 'BAI05', 'BAI06', 'BAI06', 'BAI06', 'BAI07', 'BAI07', 'BAI07', 'BAI011', 'BAI011', 'BAI011'],
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
  labels: ['DSS01', 'DSS01', 'DSS01', 'DSS02', 'DSS02' , 'DSS02', 'DSS05', 'DSS05', 'DSS05'],
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
  labels: ['MEA01', 'MEA01', 'MEA01','MEA02', 'MEA02', 'MEA02', 'MEA03', 'MEA03' , 'MEA03', 'MEA04', 'MEA04', 'MEA04'],
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
  labels: ['', '', 'EDM01', '', 'EDM03' , '', '', '', 'EDM04', '', 'EDM05', ''],
  datasets: [
    {
      label: 'EDM',
      //backgroundColor: '#43425D',
      borderColor: '#43425D',
      pointBackgroundColor: '#43425D',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#43425D',
      data:  Object.values(answers1),
    },
    
  ],
};
const radar2 = {
  labels: ['APO1', '', '', 'APO3', '' , '', 'APO04', '', '', 'APO6', '', '', 'APO8', '', '', 'APO9', '', '', 'APO11', '', '', 'APO13', '', '', 'APO14', '', ''],
  datasets: [
      {
      label: 'APO',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data:Object.values(answers2),
    },
  ],
};

const radar3 = {
  labels: ['BAI01', '', '', 'BAI02', '' , '', 'BAI03', '', '', 'BAI04', '', '', 'BAI05', '', '', 'BAI06', '', '', 'BAI07', '', '', 'BAI011', '', ''],
  datasets: [
    {
      label: 'BAI',
      //backgroundColor: '#43425D',
      borderColor: '#43425D',
      pointBackgroundColor: '#43425D',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#43425D',
      data:  Object.values(answers3),
    },
    
  ],
};
const radar4 = {
  labels: ['DSS01', '', '', 'DSS02', '' , '', 'DSS05', '', ''],
  datasets: [
      {
      label: 'DSS',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data:Object.values(answers4),
    },
  ],
};
const radar5 = {
  labels: ['MEA01', '', '','MEA02', '', '', 'MEA03', '' , '', 'MEA04', '', ''],
  datasets: [
    {
      label: 'MEA',
      //backgroundColor: '#43425D',
      borderColor: '#43425D',
      pointBackgroundColor: '#43425D',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#43425D',
      data:  Object.values(answers5),
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
                      <div className="text-value">Calificación</div>
                      <div>Área evaluada: EDM</div>
                    </CardBody>
                    <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                      <Line data={cardChartData1} options={cardChartOpts1} height={70} />
                    </div>
                  </Card>
                  <Card>
                    <CardHeader>
                    <h5 align='center'>Datos</h5>
                    <p align='center'>Gráfica obtenida para EDM</p>
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
                     
                      <div className="text-value">Calificación</div>
                      <div>Área evaluada: APO</div>
                    </CardBody>
                    <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                      <Line data={cardChartData2} options={cardChartOpts2} height={70} />
                    </div>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h5 align='center'>Datos</h5>
                      <p align='center'>Gráfica obtenida para APO</p>
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
                     
                      <div className="text-value">Calificación</div>
                      <div>Área evaluada: BAI</div>
                    </CardBody>
                    <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                      <Line data={cardChartData3} options={cardChartOpts1} height={70} />
                    </div>
                  </Card>
                  <Card>
                  <CardHeader>
                      <h5 align='center'>Datos</h5>
                      <p align='center'>Gráfica obtenida para BAI</p>
                    </CardHeader>
                    <CardBody>
                      <div className="chart-wrapper">
                        <Radar data={radar3} />
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
              </CardBody>
              <CardBody>
                <CardGroup>
                  <Card className="text-white " style={{backgroundColor:'#3b6978'}}>
                    <CardBody className="pb-0">
                     
                      <div className="text-value">Calificación</div>
                      <div>Área evaluada: DSS</div>
                    </CardBody>
                    <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                      <Line data={cardChartData4} options={cardChartOpts2} height={70} />
                    </div>
                  </Card>
                  <Card>
                  <CardHeader>
                      <h5 align='center'>Datos</h5>
                      <p align='center'>Gráfica obtenida para DSS</p>
                    </CardHeader>
                    <CardBody>
                      <div className="chart-wrapper">
                        <Radar data={radar4} />
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
              </CardBody>
              <CardBody>
                <CardGroup>
                  <Card className="text-white" style={{backgroundColor:'#43425D'}}>
                    <CardBody className="pb-0">
                     
                      <div className="text-value">Calificación</div>
                      <div>Área evaluada: MEA</div>
                    </CardBody>
                    <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                      <Line data={cardChartData5} options={cardChartOpts1} height={70} />
                    </div>
                  </Card>
                  <Card>
                  <CardHeader>
                      <h5 align='center'>Datos</h5>
                      <p align='center'>Gráfica obtenida para MEA</p>
                    </CardHeader>
                    <CardBody>
                      <div className="chart-wrapper">
                        <Radar data={radar5} />
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
