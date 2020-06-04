import React, { Component, useState } from 'react';
import { Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Row, TabContent, TabPane, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const List2 = () => {

  const [activeTab, setActiveTab] = useState(1)
  const [answers, setAnswers] = useState([])

  const [options0] = useState([
    "respuesta 0 calif 0",
    "respuesta 0 calif 1",
    "respuesta 0 calif 2",
    "respuesta 0 calif 3",
    "respuesta 0 calif 4",
    "respuesta 0 calif 5"
  ])
  const [options1] = useState([
    "respuesta 1 calif 0",
    "respuesta 1 calif 1",
    "respuesta 1 calif 2",
    "respuesta 1 calif 3",
    "respuesta 1 calif 4",
    "respuesta 1 calif 5"
  ])
  const [options2] = useState([
    "respuesta 2 calif 0",
    "respuesta 2 calif 1",
    "respuesta 2 calif 2",
    "respuesta 2 calif 3",
    "respuesta 2 calif 4",
    "respuesta 2 calif 5"
  ])
  const [options3] = useState([
    "respuesta 3 calif 0",
    "respuesta 3 calif 1",
    "respuesta 3 calif 2",
    "respuesta 3 calif 3",
    "respuesta 3 calif 4",
    "respuesta 3 calif 5"
  ])
  const [options4] = useState([
    "respuesta 4 calif 0",
    "respuesta 4 calif 1",
    "respuesta 4 calif 2",
    "respuesta 4 calif 3",
    "respuesta 4 calif 4",
    "respuesta 4 calif 5"
  ])
  const [options5] = useState([
    "respuesta 5 calif 0",
    "respuesta 5 calif 1",
    "respuesta 5 calif 2",
    "respuesta 5 calif 3",
    "respuesta 5 calif 4",
    "respuesta 5 calif 5"
  ])
  const [options6] = useState([
    "respuesta 6 calif 0",
    "respuesta 6 calif 1",
    "respuesta 6 calif 2",
    "respuesta 6 calif 3",
    "respuesta 6 calif 4",
    "respuesta 6 calif 5"
  ])
  const [options7] = useState([
    "respuesta 7 calif 0",
    "respuesta 7 calif 1",
    "respuesta 7 calif 2",
    "respuesta 7 calif 3",
    "respuesta 7 calif 4",
    "respuesta 7 calif 5"
  ])
  const [options8] = useState([
    "respuesta 8 calif 0",
    "respuesta 8 calif 1",
    "respuesta 8 calif 2",
    "respuesta 8 calif 3",
    "respuesta 8 calif 4",
    "respuesta 8 calif 5"
  ])
  const [options9] = useState([
    "respuesta 9 calif 0",
    "respuesta 9 calif 1",
    "respuesta 9 calif 2",
    "respuesta 9 calif 3",
    "respuesta 9 calif 4",
    "respuesta 9 calif 5"
  ])
  const [options10] = useState([
    "respuesta 10 calif 0",
    "respuesta 10 calif 1",
    "respuesta 10 calif 2",
    "respuesta 10 calif 3",
    "respuesta 10 calif 4",
    "respuesta 10 calif 5"
  ])
  const [options11] = useState([
    "respuesta 11 calif 0",
    "respuesta 11 calif 1",
    "respuesta 11 calif 2",
    "respuesta 11 calif 3",
    "respuesta 11 calif 4",
    "respuesta 11 calif 5"
  ])
  const [options12] = useState([
    "respuesta 12 calif 0",
    "respuesta 12 calif 1",
    "respuesta 12 calif 2",
    "respuesta 12 calif 3",
    "respuesta 12 calif 4",
    "respuesta 12 calif 5"
  ])
  const [options13] = useState([
    "respuesta 13 calif 0",
    "respuesta 13 calif 1",
    "respuesta 13 calif 2",
    "respuesta 13 calif 3",
    "respuesta 13 calif 4",
    "respuesta 13 calif 5"
  ])
  const [options14] = useState([
    "respuesta 14 calif 0",
    "respuesta 14 calif 1",
    "respuesta 14 calif 2",
    "respuesta 14 calif 3",
    "respuesta 14 calif 4",
    "respuesta 14 calif 5"
  ])
  const [options15] = useState([
    "respuesta 15 calif 0",
    "respuesta 15 calif 1",
    "respuesta 15 calif 2",
    "respuesta 15 calif 3",
    "respuesta 15 calif 4",
    "respuesta 15 calif 5"
  ])
  const [options16] = useState([
    "respuesta 16 calif 0",
    "respuesta 16 calif 1",
    "respuesta 16 calif 2",
    "respuesta 16 calif 3",
    "respuesta 16 calif 4",
    "respuesta 16 calif 5"
  ])
  const [options17] = useState([
    "respuesta 17 calif 0",
    "respuesta 17 calif 1",
    "respuesta 17 calif 2",
    "respuesta 17 calif 3",
    "respuesta 17 calif 4",
    "respuesta 17 calif 5"
  ])
  const [options18] = useState([
    "respuesta 18 calif 0",
    "respuesta 18 calif 1",
    "respuesta 18 calif 2",
    "respuesta 18 calif 3",
    "respuesta 18 calif 4",
    "respuesta 18 calif 5"
  ])
  const [options19] = useState([
    "respuesta 19 calif 0",
    "respuesta 19 calif 1",
    "respuesta 19 calif 2",
    "respuesta 19 calif 3",
    "respuesta 19 calif 4",
    "respuesta 19 calif 5"
  ])
  const [options20] = useState([
    "respuesta 20 calif 0",
    "respuesta 20 calif 1",
    "respuesta 20 calif 2",
    "respuesta 20 calif 3",
    "respuesta 20 calif 4",
    "respuesta 20 calif 5"
  ])
  const [options21] = useState([
    "respuesta 21 calif 0",
    "respuesta 21 calif 1",
    "respuesta 21 calif 2",
    "respuesta 21 calif 3",
    "respuesta 21 calif 4",
    "respuesta 21 calif 5"
  ])
  const [options22] = useState([
    "respuesta 22 calif 0",
    "respuesta 22 calif 1",
    "respuesta 22 calif 2",
    "respuesta 22 calif 3",
    "respuesta 22 calif 4",
    "respuesta 22 calif 5"
  ])
  const [options23] = useState([
    "respuesta 23 calif 0",
    "respuesta 23 calif 1",
    "respuesta 23 calif 2",
    "respuesta 23 calif 3",
    "respuesta 23 calif 4",
    "respuesta 23 calif 5"
  ])
  const [options24] = useState([
    "respuesta 24 calif 0",
    "respuesta 24 calif 1",
    "respuesta 24 calif 2",
    "respuesta 24 calif 3",
    "respuesta 24 calif 4",
    "respuesta 24 calif 5"
  ])
  const [options25] = useState([
    "respuesta 25 calif 0",
    "respuesta 25 calif 1",
    "respuesta 25 calif 2",
    "respuesta 25 calif 3",
    "respuesta 25 calif 4",
    "respuesta 25 calif 5"
  ])
  const [options26] = useState([
    "respuesta 26 calif 0",
    "respuesta 26 calif 1",
    "respuesta 26 calif 2",
    "respuesta 26 calif 3",
    "respuesta 26 calif 4",
    "respuesta 26 calif 5"
  ])


  const [answerslist2] = useState([options0, options1, options2, 
    options3, options4, options5, 
    options6, options7, options8, 
    options9, options10, options11, 
    options12,options13,options14,
    options15,options16,options17, 
    options18, options19, options20, 
    options21, options22, options23,
    options24, options25, options26])

  React.useEffect(() => {
    setAnswers(JSON.parse(localStorage.getItem("p2")))
  }, [])


  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader align="center">
              <h1>Retroalimentación APO</h1>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="12" md="4">
                  <ListGroup id="list-tab" role="tablist">
                    <ListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Uno</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Dos</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(3)} action active={activeTab === 3} >Tres</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(4)} action active={activeTab === 4} >Cuatro</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(5)} action active={activeTab === 5} >Cinco</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(6)} action active={activeTab === 6} >Seis</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(7)} action active={activeTab === 7} >Siete</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(8)} action active={activeTab === 8} >Ocho</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(9)} action active={activeTab === 9} >Nueve</ListGroupItem>
                  </ListGroup>
                </Col>
                <Col xs="12" md="8">
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId={1}>
                      {answerslist2[0][answers[0]]}
                    </TabPane>
                    <TabPane tabId={2}>
                      {answerslist2[1][answers[1]]}
                    </TabPane>
                    <TabPane tabId={3}>
                      {answerslist2[2][answers[2]]}
                    </TabPane>
                    <TabPane tabId={4}>
                      {answerslist2[3][answers[3]]}
                    </TabPane>
                    <TabPane tabId={5}>
                      {answerslist2[4][answers[4]]}
                    </TabPane>
                    <TabPane tabId={6}>
                      {answerslist2[5][answers[5]]}
                    </TabPane>
                    <TabPane tabId={7}>
                      {answerslist2[6][answers[6]]}
                    </TabPane>
                    <TabPane tabId={8}>
                      {answerslist2[7][answers[7]]}
                    </TabPane>
                    <TabPane tabId={9}>
                      {answerslist2[8][answers[8]]}
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>

              <Row>
                <Col xs="12" md="4">
                  <ListGroup id="list-tab" role="tablist">
                    <ListGroupItem onClick={() => setActiveTab(10)} action active={activeTab === 10} >Diez</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(11)} action active={activeTab === 11} >Once</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(12)} action active={activeTab === 12} >Doce</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(13)} action active={activeTab === 13} >Trece</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(14)} action active={activeTab === 14} >Catorce</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(15)} action active={activeTab === 15} >Quince</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(16)} action active={activeTab === 16} >Dieciseis</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(17)} action active={activeTab === 17} >Diecisiete</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(18)} action active={activeTab === 18} >Dieciocho</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(19)} action active={activeTab === 19} >Diecinueve</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(20)} action active={activeTab === 20} >Veinte</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(21)} action active={activeTab === 21} >Veintiuno</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(22)} action active={activeTab === 22} >Veintidos</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(23)} action active={activeTab === 23} >Veintitres</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(24)} action active={activeTab === 24} >Veinticuatro</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(25)} action active={activeTab === 25} >Veinticinco</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(26)} action active={activeTab === 26} >Veintiseis</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(27)} action active={activeTab === 27} >Veintisiete</ListGroupItem>
                  </ListGroup>
                </Col>
                <Col xs="12" md="8">
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId={10}>
                      {answerslist2[9][answers[9]]}
                    </TabPane>
                    <TabPane tabId={11}>
                      {answerslist2[10][answers[10]]}
                    </TabPane>
                    <TabPane tabId={12}>
                      {answerslist2[11][answers[11]]}
                    </TabPane>
                    <TabPane tabId={13}>
                      {answerslist2[12][answers[12]]}
                    </TabPane>
                    <TabPane tabId={14}>
                      {answerslist2[13][answers[13]]}
                    </TabPane>
                    <TabPane tabId={15}>
                      {answerslist2[14][answers[14]]}
                    </TabPane>
                    <TabPane tabId={16}>
                      {answerslist2[15][answers[15]]}
                    </TabPane>
                    <TabPane tabId={17}>
                      {answerslist2[16][answers[16]]}
                    </TabPane>
                    <TabPane tabId={18}>
                      {answerslist2[17][answers[17]]}
                    </TabPane>
                    <TabPane tabId={19}>
                      {answerslist2[18][answers[18]]}
                    </TabPane>
                    <TabPane tabId={20}>
                      {answerslist2[19][answers[19]]}
                    </TabPane>
                    <TabPane tabId={21}>
                      {answerslist2[20][answers[20]]}
                    </TabPane>
                    <TabPane tabId={22}>
                      {answerslist2[21][answers[21]]}
                    </TabPane>
                    <TabPane tabId={23}>
                      {answerslist2[22][answers[22]]}
                    </TabPane>
                    <TabPane tabId={24}>
                      {answerslist2[23][answers[23]]}
                    </TabPane>
                    <TabPane tabId={25}>
                      {answerslist2[24][answers[24]]}
                    </TabPane>
                    <TabPane tabId={26}>
                      {answerslist2[25][answers[25]]}
                    </TabPane>
                    <TabPane tabId={27}>
                      {answerslist2[26][answers[26]]}
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </CardBody>
            <Row style={{ justifyContent: 'center' }}>
              <Pagination aria-label="Page navigation example">
                <Link to="/base/list1">
                  <PaginationItem><PaginationLink style={{ color: '#43425D' }} previous></PaginationLink></PaginationItem>
                </Link>
                <PaginationItem>
                  <Link to="/base/list1">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">1</PaginationLink></PaginationItem>
                  </Link>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D', borderColor: '#43425D' }} tag="button">2</PaginationLink></PaginationItem>
                </PaginationItem>
                <PaginationItem>
                  <Link to="/base/list3">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">3</PaginationLink></PaginationItem>
                  </Link>
                </PaginationItem>
                <PaginationItem>
                  <Link to="/base/list4">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">4</PaginationLink></PaginationItem>
                  </Link>
                </PaginationItem>
                <PaginationItem>
                  <Link to="/base/list5">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">5</PaginationLink></PaginationItem>
                  </Link>
                </PaginationItem>
                <Link to="/base/list3">
                  <PaginationItem>
                    <PaginationLink next></PaginationLink>
                  </PaginationItem>
                </Link>
              </Pagination>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );

}

export default List2;
