import React, { Component, useState } from 'react';
import { Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Row, TabContent, TabPane, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const List4 = () => {

  const [activeTab, setActiveTab] = useState(1)

  const [answers, setAnswers] = useState({0: "6", 1: "6", 2: "6", 3: "6", 4: "6", 5: "6", 6: "6", 7: "6", 8: "6"})
  /*FEEDBACK DSS */ 
  const [options0] = useState([
    "Para una calificación de 0 en esta área se recomienda: Asegurar que los requisitos de procesamiento operacional del negocio y de TI de la empresa y las prioridades para la prestación de servicios cumplan con los contratos y SLA de hosting de terceros o proveedores de servicios.",
    "Para una calificación de 1 en esta área se recomienda: Asegurar que los requisitos de procesamiento operacional del negocio y de TI de la empresa y las prioridades para la prestación de servicios cumplan con los contratos y SLA de hosting de terceros o proveedores de servicios.",
    "Para una calificación de 2 en esta área se recomienda: Asegurar que los requisitos de los procesos de seguridad de la información de la empresa cumplan con los contratos y SLA de hosting de terceros o proveedores de servicios.",
    "Para una calificación de 3 en esta área se recomienda: Integrar los procesos de gestión de TI internos críticos con los de los proveedores de servicios externalizados. Esto debería cubrir, por ejemplo, la planificación de rendimiento y capacidad, gestión del cambio, gestión de la configuración, solicitud de servicios y gestión de incidentes, gestión de problemas, gestión de la seguridad, continuidad del negocio y monitorización del rendimiento y reporte del proceso.",
    "Para una calificación de 4 en esta área se recomienda: Planificar una auditoría independiente y el aseguramiento de los entornos operacionales de proveedores que proporcionen servicios externalizados para confirmar que se han abordado de forma adecuada los requisitos acordados.",
    "Para una calificación de 5 en esta área se recomienda: Planificar una auditoría independiente y el aseguramiento de los entornos operacionales de proveedores que proporcionen servicios externalizados para confirmar que se han abordado de forma adecuada los requisitos acordados.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options1] = useState([
    "Para una calificación de 0 en esta área se recomienda: Registrar los eventos. Identificar el nivel de información que debe registrarse, conforme a una consideración de riesgo y rendimiento.",
    "Para una calificación de 1 en esta área se recomienda: Definir e implementar reglas que identifiquen y registren incumplimientos de umbrales y los estados de eventos. Encontrar un equilibrio entre la generación de eventos menores insignificantes y eventos significativos para que los registros de eventos no estén sobrecargados de información innecesaria.",
    "Para una calificación de 2 en esta área se recomienda: Identificar y mantener una lista de activos de infraestructura que deben monitorizarse conforme a la criticidad del servicio y la relación entre los elementos de configuración y servicios que dependen de ellos.",
    "Para una calificación de 3 en esta área se recomienda: Producir registros de eventos y conservarlos durante un periodo de tiempo adecuado para que ayuden en futuras investigaciones.",
    "Para una calificación de 4 en esta área se recomienda: Garantizar que se creen tickets de incidentes en el plazo debido a la hora de monitorizar desviaciones identificadas en los umbrales definidos.",
    "Para una calificación de 5 en esta área se recomienda: Establecer procedimientos para monitorizar los registros de eventos. Llevar a cabo revisiones regulares.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options2] = useState([
    "Para una calificación de 0 en esta área se recomienda: Identificar los desastres naturales y causados por el hombre que podrían ocurrir en el área en la que se encuentran las instalaciones de TI. Evaluar el efecto potencial en las instalaciones de TI.",
    "Para una calificación de 1 en esta área se recomienda: Identificar cómo el equipo de I&T, incluido el equipo móvil y el off-site, se protege de las amenazas medioambientales. Asegurar que la política limita o excluye el consumo de comida, bebida y fumar en áreas sensibles, y prohibir el almacenamiento de artículos de papelería y otros suministros que suponen un peligro de incendio en las salas de ordenadores.",
    "Para una calificación de 2 en esta área se recomienda: Situar y construir las instalaciones de TI para minimizar y mitigar la susceptibilidad a las amenazas medioambientales (p. ej., robo, aire, incendio, humo, agua, vibración, terrorismo, vandalismo, químicos, explosivos). Considerar zonas de seguridad y/o células ignífugas específicas (p. ej., ubicar los entornos/servidores de producción y desarrollo apartado uno del otro).",
    "Para una calificación de 3 en esta área se recomienda: Responder a las alarmas medioambientales y a otras notificaciones. Documentar y probar los procedimientos, lo cual debería incluir la priorización de alarmas y contacto con las autoridades de respuesta a emergencia locales. Capacitar al personal en estos procedimientos.",
    "Para una calificación de 4 en esta área se recomienda: Comparar las medidas y planes de contingencia con los requisitos de las políticas de seguros y los resultados del informe. Abordar los puntos de incumplimiento en el plazo debido. ",
    "Para una calificación de 5 en esta área se recomienda: Monitorizar y mantener regularmente dispositivos que detecten proactivamente amenazas medioambientales (p. ej., fuego, agua, humo, humedad).",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options3] = useState([
    "Para una calificación de 0 en esta área se recomienda: Comprobar el derecho a las solicitudes de servicio, utilizando un flujo de proceso predefinido y cambios estándar, cuando sea posible.",
    "Para una calificación de 1 en esta área se recomienda: Comprobar el derecho a las solicitudes de servicio, utilizando un flujo de proceso predefinido y cambios estándar, cuando sea posible.",
    "Para una calificación de 2 en esta área se recomienda: Obtener la aprobación y confirmación financiera y funcional, si fuera necesario, o las aprobaciones predefinidas para los cambios estándar acordados.",
    "Para una calificación de 3 en esta área se recomienda: Obtener la aprobación y confirmación financiera y funcional, si fuera necesario, o las aprobaciones predefinidas para los cambios estándar acordados.",
    "Para una calificación de 4 en esta área se recomienda: Cumplir con las solicitudes realizando el proceso de solicitud seleccionado. Cuando sea posible, usar menús automáticos de autoayuda y modelos de solicitud predefinidas para elementos solicitados con frecuencia. ",
    "Para una calificación de 5 en esta área se recomienda: Cumplir con las solicitudes realizando el proceso de solicitud seleccionado. Cuando sea posible, usar menús automáticos de autoayuda y modelos de solicitud predefinidas para elementos solicitados con frecuencia.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options4] = useState([
    "Para una calificación de 0 en esta área se recomienda: Comprobar el derecho a las solicitudes de servicio, utilizando un flujo de proceso predefinido y cambios estándar, cuando sea posible.",
    "Para una calificación de 1 en esta área se recomienda: Comprobar el derecho a las solicitudes de servicio, utilizando un flujo de proceso predefinido y cambios estándar, cuando sea posible.",
    "Para una calificación de 2 en esta área se recomienda: Obtener la aprobación y confirmación financiera y funcional, si fuera necesario, o las aprobaciones predefinidas para los cambios estándar acordados.",
    "Para una calificación de 3 en esta área se recomienda: Obtener la aprobación y confirmación financiera y funcional, si fuera necesario, o las aprobaciones predefinidas para los cambios estándar acordados.",
    "Para una calificación de 4 en esta área se recomienda: Cumplir con las solicitudes realizando el proceso de solicitud seleccionado. Cuando sea posible, usar menús automáticos de autoayuda y modelos de solicitud predefinidas para elementos solicitados con frecuencia.",
    "Para una calificación de 5 en esta área se recomienda: Cumplir con las solicitudes realizando el proceso de solicitud seleccionado. Cuando sea posible, usar menús automáticos de autoayuda y modelos de solicitud predefinidas para elementos solicitados con frecuencia.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options5] = useState([
    "Para una calificación de 0 en esta área se recomienda: Comprobar con los usuarios afectados que la solicitud de servicio se ha cumplido de forma satisfactoria o el incidente se ha resuelto de forma satisfactoria dentro de un plazo de tiempo acordado/aceptable.",
    "Para una calificación de 1 en esta área se recomienda: Comprobar con los usuarios afectados que la solicitud de servicio se ha cumplido de forma satisfactoria o el incidente se ha resuelto de forma satisfactoria dentro de un plazo de tiempo acordado/aceptable.",
    "Para una calificación de 2 en esta área se recomienda: Comprobar con los usuarios afectados que la solicitud de servicio se ha cumplido de forma satisfactoria o el incidente se ha resuelto de forma satisfactoria dentro de un plazo de tiempo acordado/aceptable.",
    "Para una calificación de 3 en esta área se recomienda: Cerrar las peticiones e incidentes de servicio.",
    "Para una calificación de 4 en esta área se recomienda: Cerrar las peticiones e incidentes de servicio.",
    "Para una calificación de 5 en esta área se recomienda: Cerrar las peticiones e incidentes de servicio.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options6] = useState([
    "Para una calificación de 0 en esta área se recomienda: Configurar los sistemas operativos de forma segura. Implementar mecanismos de bloqueo de dispositivos.",
    "Para una calificación de 1 en esta área se recomienda: Proteger la integridad del sistema.",
    "Para una calificación de 2 en esta área se recomienda: Gestionar la configuración de red de forma segura. Implementar el filtrado de tráfico de red en dispositivos de punto final.",
    "Para una calificación de 3 en esta área se recomienda: Proporcionar protección física a los dispositivos de punto final.Eliminar de forma segura los dispositivos Endpoint.",
    "Para una calificación de 4 en esta área se recomienda: Gestionar el acceso malicioso a través del correo electrónico y los navegadores web. Por ejemplo, bloquear determinados sitios web y desactivar los clics a enlaces para los smartphones.",
    "Para una calificación de 5 en esta área se recomienda: Encriptar la información almacenada de acuerdo a su clasificación.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options7] = useState([
    "Para una calificación de 0 en esta área se recomienda: Registrar y monitorizar todos los puntos de entrada a las instalaciones de TI. Registrar a todos los visitantes al sitio, incluidos contratistas y proveedores.",
    "Para una calificación de 1 en esta área se recomienda: Restringir y monitorizar el acceso a instalaciones sensibles de TI, mediante el establecimiento de restricciones al perímetro, como vallas, paredes y dispositivos de seguridad en puertas interiores y exteriores.",
    "Para una calificación de 2 en esta área se recomienda: Requerir a los visitantes que estén acompañados en todo momento durante su estancia en las instalaciones.",
    "Para una calificación de 3 en esta área se recomienda: Garantizar que los perfiles de acceso permanezcan actualizados. Basar el acceso a las instalaciones de TI (sala de servidores, edificios, áreas o zonas) en el cargo y las responsabilidades.",
    "Para una calificación de 4 en esta área se recomienda: Gestionar solicitudes para permitir el acceso debidamente autorizado a las instalaciones de cómputo.",
    "Para una calificación de 5 en esta área se recomienda: Realizar formación sobre concienciación de la seguridad de la información física de forma regular.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options8] = useState([
    "Para una calificación de 0 en esta área se recomienda: Definir y comunicar escenarios de riesgo para que se puedan reconocer con facilidad y se pueda entender su probabilidad e impacto. ",
    "Para una calificación de 1 en esta área se recomienda: Usar de forma continua un portafolio de tecnologías, servicios y activos soportados (p. ej., escáneres de vulnerabilidad, fuzzers y sniffers, analizadores de protocolos) para identificar vulnerabilidades de seguridad de la información.",
    "Para una calificación de 2 en esta área se recomienda: Garantizar que se creen tickets relativos a incidentes de seguridad de forma oportuna cuando la monitorización identifique posibles incidentes.",
    "Para una calificación de 3 en esta área se recomienda: Revisar regularmente los logs de eventos para detectar posibles incidentes.",
    "Para una calificación de 4 en esta área se recomienda: Garantizar que se creen tickets relativos a incidentes de seguridad de forma oportuna cuando la monitorización identifique posibles incidentes.",
    "Para una calificación de 5 en esta área se recomienda: Garantizar que se creen tickets relativos a incidentes de seguridad de forma oportuna cuando la monitorización identifique posibles incidentes.",
    "No existe ninguna calificación para esta pregunta."
  ])

  const [answerslist4] = useState([options0, options1, options2, options3, options4, options5, options6, options7, options8])

  React.useEffect(() => {
    if(localStorage.getItem("p4")==null){
      //console.log("here")
    }else{
      setAnswers(JSON.parse(localStorage.getItem("p4")))
    }
  }, [])

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader align="center">
              <h1>Retroalimentación DSS</h1>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="12" md="4">
                  <ListGroup id="list-tab" role="tablist">
                    <ListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Feedback-Pregunta Uno</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Feedback-Pregunta Dos</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(3)} action active={activeTab === 3} >Feedback-Pregunta Tres</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(4)} action active={activeTab === 4} >Feedback-Pregunta Cuatro</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(5)} action active={activeTab === 5} >Feedback-Pregunta Cinco</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(6)} action active={activeTab === 6} >Feedback-Pregunta Seis</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(7)} action active={activeTab === 7} >Feedback-Pregunta Siete</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(8)} action active={activeTab === 8} >Feedback-Pregunta Ocho</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(9)} action active={activeTab === 9} >Feedback-Pregunta Nueve</ListGroupItem>
                  </ListGroup>
                </Col>
                <Col xs="12" md="8">
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId={1}>
                      {answerslist4[0][answers[0]]}
                    </TabPane>
                    <TabPane tabId={2}>
                      {answerslist4[1][answers[1]]}
                    </TabPane>
                    <TabPane tabId={3}>
                      {answerslist4[2][answers[2]]}
                    </TabPane>
                    <TabPane tabId={4}>
                      {answerslist4[3][answers[3]]}
                    </TabPane>
                    <TabPane tabId={5}>
                      {answerslist4[4][answers[4]]}
                    </TabPane>
                    <TabPane tabId={6}>
                      {answerslist4[5][answers[5]]}
                    </TabPane>
                    <TabPane tabId={7}>
                      {answerslist4[6][answers[6]]}
                    </TabPane>
                    <TabPane tabId={8}>
                      {answerslist4[7][answers[7]]}
                    </TabPane>
                    <TabPane tabId={9}>
                      {answerslist4[8][answers[8]]}
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </CardBody>
            <Row style={{ justifyContent: 'center' }}>
              <Pagination aria-label="Page navigation example">
                <Link to="/base/list3">
                  <PaginationItem><PaginationLink style={{ color: '#43425D' }} previous></PaginationLink></PaginationItem>
                </Link>
                <PaginationItem>
                  <Link to="/base/list1">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">1</PaginationLink></PaginationItem>
                  </Link>
                </PaginationItem>
                <PaginationItem>
                  <Link to="/base/list2">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">2</PaginationLink></PaginationItem>
                  </Link>
                </PaginationItem>
                <PaginationItem>
                  <Link to="/base/list3">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">3</PaginationLink></PaginationItem>
                  </Link>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D', borderColor: '#43425D' }} tag="button">4</PaginationLink></PaginationItem>
                </PaginationItem>
                <PaginationItem>
                  <Link to="/base/list5">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">5</PaginationLink></PaginationItem>
                  </Link>
                </PaginationItem>
                <Link to="/base/list5">
                  <PaginationItem><PaginationLink style={{ color: '#43425D' }} next></PaginationLink></PaginationItem>
                </Link>
              </Pagination>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );

}

export default List4;
