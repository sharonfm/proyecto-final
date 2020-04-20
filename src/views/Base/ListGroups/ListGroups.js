import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem,  Row, TabContent, TabPane } from 'reactstrap';

class ListGroups extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Retroalimentación</strong> <small>with TabPanes</small>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="4">
                    <ListGroup id="list-tab" role="tablist">
                      <ListGroupItem onClick={() => this.toggle(1)} action active={this.state.activeTab === 1} >Uno</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(2)} action active={this.state.activeTab === 2} >Dos</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(3)} action active={this.state.activeTab === 3} >Tres</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(4)} action active={this.state.activeTab === 4} >Cuatro</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(5)} action active={this.state.activeTab === 5} >Cinco</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(6)} action active={this.state.activeTab === 6} >Seis</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(7)} action active={this.state.activeTab === 7} >Siete</ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col xs="8">
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId={1}>
                        <p>Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia
                          dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt
                          anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum
                          reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.</p>
                      </TabPane>
                      <TabPane tabId={2}>
                        <p>Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris
                          nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur
                          est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et
                          deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla
                          laborum elit adipisicing pariatur cillum.</p>
                      </TabPane>
                      <TabPane tabId={3}>
                        <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna
                          sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore
                          aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco
                          nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
                          eiusmod eu pariatur culpa mollit in irure.</p>
                      </TabPane>
                      <TabPane tabId={4}>
                        <p>Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia
                          dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt
                          anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum
                          reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.</p>
                      </TabPane>
                      <TabPane tabId={5}>
                        <p>Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris
                          nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur
                          est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et
                          deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla
                          laborum elit adipisicing pariatur cillum.</p>
                      </TabPane>
                      <TabPane tabId={6}>
                        <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna
                          sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore
                          aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco
                          nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
                          eiusmod eu pariatur culpa mollit in irure.</p>
                      </TabPane>
                      <TabPane tabId={7}>
                        <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna
                          sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore
                          aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco
                          nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
                          eiusmod eu pariatur culpa mollit in irure.</p>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>

                <Row>
                  <Col xs="4">
                    <ListGroup id="list-tab" role="tablist">
                      <ListGroupItem onClick={() => this.toggle(8)} action active={this.state.activeTab === 8} >Ocho</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(9)} action active={this.state.activeTab === 9} >Nueve</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(10)} action active={this.state.activeTab === 10} >Diez</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(11)} action active={this.state.activeTab === 11} >Once</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(12)} action active={this.state.activeTab === 12} >Doce</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(13)} action active={this.state.activeTab === 13} >Trece</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(14)} action active={this.state.activeTab === 14} >Catorce</ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col xs="8">
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId={8}>
                        <p>Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia
                          dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt
                          anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum
                          reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.</p>
                      </TabPane>
                      <TabPane tabId={9}>
                        <p>Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris
                          nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur
                          est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et
                          deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla
                          laborum elit adipisicing pariatur cillum.</p>
                      </TabPane>
                      <TabPane tabId={10}>
                        <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna
                          sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore
                          aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco
                          nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
                          eiusmod eu pariatur culpa mollit in irure.</p>
                      </TabPane>
                      <TabPane tabId={11}>
                        <p>Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia
                          dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt
                          anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum
                          reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.</p>
                      </TabPane>
                      <TabPane tabId={12}>
                        <p>Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris
                          nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur
                          est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et
                          deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla
                          laborum elit adipisicing pariatur cillum.</p>
                      </TabPane>
                      <TabPane tabId={13}>
                        <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna
                          sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore
                          aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco
                          nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
                          eiusmod eu pariatur culpa mollit in irure.</p>
                      </TabPane>
                      <TabPane tabId={14}>
                        <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna
                          sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore
                          aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco
                          nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
                          eiusmod eu pariatur culpa mollit in irure.</p>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListGroups;
