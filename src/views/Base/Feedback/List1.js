import React, { Component, useState } from 'react';
import { Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Row, TabContent, TabPane, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import Forms from '../Formulario/Formulario';



const List1 = () => {

  const [activeTab, setActiveTab] = useState(1)
  const [answers, setAnswers] = useState([])

  const [feedbackOption] = useState([
    "Cero",
    "Uno",
    "Dos",
    "Tres"/* ,
    "Cuatro",
    "Cinco" */
  ])


  const [feedbackAnswer] = useState([
    "respuesta 0",
    "respuesta 1",
    "respuesta 2",
    "respuesta 3"/* ,
    "respuesta 4",
    "respuesta 5" */
  ])

  const [options0] = useState([
    "Analizar e identificar los factores ambientales internos y externos (obligaciones legales, regulatorias y contractuales), así como las tendencias en el entorno de negocio que pueden influir en el diseño del gobierno.",
    "Analizar e identificar los factores ambientales internos y externos (obligaciones legales, regulatorias y contractuales), así como las tendencias en el entorno de negocio que pueden influir en el diseño del gobierno.",
    "Determinar la importancia de I&T y su papel con respecto al negocio.",
    "Determinar la importancia de I&T y su papel con respecto al negocio.",
    "Considerar las regulaciones, leyes, y obligaciones contractuales externas y determinar cómo deberían aplicarse dentro del gobierno de I&T de una empresa.",
    "Considerar las regulaciones, leyes, y obligaciones contractuales externas y determinar cómo deberían aplicarse dentro del gobierno de I&T de una empresa."
  ])
  const [options1] = useState([
    "Alinear el uso ético y el procesamiento de la información y su impacto en la sociedad, el entorno natural y los intereses de los interesados internos y externos con la dirección, las metas y los objetivos de la empresa.",
    "Alinear el uso ético y el procesamiento de la información y su impacto en la sociedad, el entorno natural y los intereses de los interesados internos y externos con la dirección, las metas y los objetivos de la empresa.",
    "Articular los principios que guiarán el diseño del gobierno y la toma de decisiones de I&T.respuesta 1 calif 2",
    "Determinar el modelo óptimo de toma de decisiones para I&T.",
    "Determinar los niveles adecuados de delegación de autoridad, incluidas las reglas de limitaciones, para las decisiones de I&T.",
    "Determinar los niveles adecuados de delegación de autoridad, incluidas las reglas de limitaciones, para las decisiones de I&T."
  ])
  const [options2] = useState([
    "Comunicar el gobierno de los principios de I&T y acordar con la administración ejecutiva la forma de establecer un liderazgo informado y comprometido",
    "Establecer o delegar el establecimiento de estructuras, procesos y prácticas de gobierno en línea con los principios de diseño acordados.",
    "Establecer un consejo de administración de gobierno de I&T (o equivalente) a nivel del consejo de administración. Este consejo de administración debería garantizar que el gobierno de la información y la tecnología, como parte del gobierno de la empresa, se aborda de forma adecuada; aconsejar sobre la dirección estratégica a seguir; y determinar la priorización de los programas de inversión habilitados por I&T en línea con la estrategia y prioridades del negocio de la empresa.",
    "Asignar la responsabilidad, autoridad y rendición de cuentas por las decisiones de I&T en línea con los principios de diseño de gobierno, de los modelos de toma de decisiones y de delegación acordados.",
    "Direccionar al personal para que siga las directrices relevantes en cuanto al comportamiento ético y profesional y asegurar que se conozcan y se apliquen las consecuencias del incumplimiento.",
    "Direccionar el establecimiento de un sistema de recompensas para fomentar el cambio cultural deseado."
  ])
  const [options3] = useState([
    "Conocer la organización y su contexto en relación al riesgo de I&T.",
    "Determinar el apetito al riesgo de la organización, es decir, el nivel de riesgo relacionado con I&T que la empresa está dispuesta a tomar en la búsqueda de sus objetivos empresariales",
    "Determinar los niveles de tolerancia al riesgo frente al apetito al riesgo, es decir, las desviaciones aceptables temporalmente del apetito alriesgo.",
    "Determinar el grado de alineamiento de la estrategia de riesgos en I&T de la empresa con la estrategia de riesgos de la empresa en su conjunto y garantizar que el apetito al riesgo se sitúe por debajo de la capacidad de riesgo de la organización.",
    "Evaluar los factores de riesgo de I&T de forma proactiva antes de tomar decisiones estratégicas a nivel de empresa y garantizar que las consideraciones del riesgo formen parte del proceso de decisión estratégico de la empresa.",
    "Atraer y conservar las habilidades y el personal necesarios para la gestión de riesgos de las I&T"
  ])
  const [options4] = useState([
    "Dirigir la traducción e integración de la estrategia de riesgo de I&T en las prácticas de gestión de riesgos y las actividades operativas.",
    "Dirigir la traducción e integración de la estrategia de riesgo de I&T en las prácticas de gestión de riesgos y las actividades operativas.",
    "Dirigir el desarrollo de planes de comunicación de riesgos (que se extiendan a todos los niveles de la empresa).",
    "Dirigir la implementación de los mecanismos adecuados para responder de forma rápida al cambio de riesgos e informar inmediatamente a los cargos de dirección correspondientes, siguiendo los principios de escalamiento (qué comunicar, cuándo, dónde y cómo).",
    "Ordenar que el riesgo, oportunidades, problemas o preocupaciones puedan identificarse y comunicarse por cualquier persona a la parte correspondiente en cualquier momento. El riesgo debe gestionarse conforme a las políticas y procedimientos publicados y comunicados a los responsables de la toma de decisiones.",
    "Identificar las metas y métricas claves de los procesos de gobierno y gestión de riesgos que deben monitorizarse, y aprobar las estrategias, métodos, técnicas y procesos para capturar y comunicar la información de las mediciones."
  ])
  const [options5] = useState([
    "Monitorizarr las metas y métricas de los procesos de gobierno y gestión de riesgos contra los objetivos, analizar la causa de las posibles desviaciones, y poner en marcha las acciones remediales s para solucionar las causas subyacentes.",
    "Monitorizarr las metas y métricas de los procesos de gobierno y gestión de riesgos contra los objetivos, analizar la causa de las posibles desviaciones, y poner en marcha las acciones remediales s para solucionar las causas subyacentes.",
    "Supervise hasta qué punto se gestiona el perfil de riesgo dentro de los umbrales de tolerancia y apetito de riesgo de la empresa.",
    "Supervise hasta qué punto se gestiona el perfil de riesgo dentro de los umbrales de tolerancia y apetito de riesgo de la empresa.",
    "Facilitar la revisión por parte de las partes interesadas clave del progreso de la empresa con respecto a las metas identificadas.",
    "Facilitar la revisión por parte de las partes interesadas clave del progreso de la empresa con respecto a las metas identificadas."
  ])
  const [options6] = useState([
    "Definir los principios fundamentales de la asignación y gestión de recursos y capacidades, de forma que I&T puede satisfacer las necesidades de la empresa conforme a las prioridades acordadas y los límites presupuestarios. Por ejemplo, definir opciones preferidas de abastecimiento definidas para determinados servicios y los límites presupuestarios por opción de abastecimiento.",
    "Definir los principios fundamentales de la asignación y gestión de recursos y capacidades, de forma que I&T puede satisfacer las necesidades de la empresa conforme a las prioridades acordadas y los límites presupuestarios. Por ejemplo, definir opciones preferidas de abastecimiento definidas para determinados servicios y los límites presupuestarios por opción de abastecimiento.",
    "Partiendo de las estrategias actuales y futuras, examinar las posibles opciones para proporcionar recursos relacionados con I&T (recursos tecnológicos, financieros y humanos), y desarrollar capacidades para hacer frente a las necesidades actuales y futuras (incluidas opciones de abastecimiento).",
    "Partiendo de las estrategias actuales y futuras, examinar las posibles opciones para proporcionar recursos relacionados con I&T (recursos tecnológicos, financieros y humanos), y desarrollar capacidades para hacer frente a las necesidades actuales y futuras (incluidas opciones de abastecimiento).",
    "Definir los principios para la gestión y el control de la arquitectura empresarial",
    "Definir los principios para la gestión y el control de la arquitectura empresarial"
  ])
  const [options7] = useState([
    "Comunicar y dirigir la adopción de estrategias de gestión de recursos, principios y del plan de recursos y arquitectura empresarial acordados.",
    "Comunicar y dirigir la adopción de estrategias de gestión de recursos, principios y del plan de recursos y arquitectura empresarial acordados.",
    "Alinear la gestión de recursos con la planificación financiera y de RR. HH. de la empresa.",
    "Alinear la gestión de recursos con la planificación financiera y de RR. HH. de la empresa.",
    "Asignar responsabilidades para la ejecución de la gestión de recursos.",
    "Establecer los principios relacionados con la protección de los recursos."
  ])
  const [options8] = useState([
    "Supervisar las estrategias de abastecimiento de I&T, las estrategias de arquitectura empresarial y las capacidades y recursos empresariales y de TI para garantizar que se puedan satisfacer las necesidades y objetivos actuales y futuros de la empresa.",
    "Supervisar las estrategias de abastecimiento de I&T, las estrategias de arquitectura empresarial y las capacidades y recursos empresariales y de TI para garantizar que se puedan satisfacer las necesidades y objetivos actuales y futuros de la empresa.",
    "Monitorizar el rendimiento de los recursos en relación a los objetivos, analizar la causa de las posibles desviaciones, y poner en marcha las acciones remediales para solucionar las causas subyacentes.",
    "Monitorizar el rendimiento de los recursos en relación a los objetivos, analizar la causa de las posibles desviaciones, y poner en marcha las acciones remediales para solucionar las causas subyacentes.",
    "Supervisar la asignación y optimización de recursos conforme a los objetivos y prioridades de la empresa usando metas y métricas acordadas",
    "Supervisar la asignación y optimización de recursos conforme a los objetivos y prioridades de la empresa usando metas y métricas acordadas"
  ])
  const [options9] = useState([
    "Examinar y juzgar los requisitos de comunicación e informes actuales y futuros para otras partes interesadas relacionados con el uso de I&T dentro de la empresa, incluidos el nivel requerido de participación/consulta y el alcance de la comunicación/nivel de detalle y condiciones.",
    "Examinar y juzgar los requisitos de comunicación e informes actuales y futuros para otras partes interesadas relacionados con el uso de I&T dentro de la empresa, incluidos el nivel requerido de participación/consulta y el alcance de la comunicación/nivel de detalle y condiciones.",
    "Examinar y juzgar los requisitos de informes obligatorios actuales y futuros relacionados con el uso de I&T dentro de la empresa (regulación, legislación, leyes comunes, contractuales), incluidos su alcance y frecuencia.",
    "Examinar y juzgar los requisitos de informes obligatorios actuales y futuros relacionados con el uso de I&T dentro de la empresa (regulación, legislación, leyes comunes, contractuales), incluidos su alcance y frecuencia.",
    "Mantener los principios para la comunicación con partes interesadas externas e internas, incluidos formatos y canales de comunicación, así como la aceptación y firma de informes de las partes interesadas.",
    "Identificar todas las partes interesadas de I&T relevantes dentro y fuera de la empresa. Agrupar a las partes interesadas en categorías de partes interesadas con requisitos similares."
  ])
  const [options10] = useState([
    "Dirigir la implementación de mecanismos para asegurar que la información cumple con todos los criterios de los requisitos de elaboración de informes obligatorios de I&T para la empresa.",
    "Dirigir la implementación de mecanismos para asegurar que la información cumple con todos los criterios de los requisitos de elaboración de informes obligatorios de I&T para la empresa.",
    "Dirigir el establecimiento de la estrategia de consulta y comunicación para las partes interesadas externas e internas.",
    "Dirigir el establecimiento de la estrategia de consulta y comunicación para las partes interesadas externas e internas.",
    "Establecer los mecanismos de escalamiento de los informes.",
    "Establecer los mecanismos de escalamiento de los informes."
  ])
  const [options11] = useState([
    "Evaluar de forma periódica la efectividad de los mecanismos para, y los resultados de, la participación y comunicación con partes interesadas internas y externas.",
    "Evaluar de forma periódica la efectividad de los mecanismos para, y los resultados de, la participación y comunicación con partes interesadas internas y externas.",
    "Determinar si se cumplen con los requisitos de las distintas partes interesadas y evaluar los niveles de participación de las partes interesadas.",
    "Determinar si se cumplen con los requisitos de las distintas partes interesadas y evaluar los niveles de participación de las partes interesadas.",
    "Evaluar periódicamente la eficiencia de los mecanismos para garantizar la precisión y confiabilidad de informes obligatorios.",
    "Evaluar periódicamente la eficiencia de los mecanismos para garantizar la precisión y confiabilidad de informes obligatorios."
  ])

  const [answerslist1] = useState([options0, options1, options2, options3, options4, options5, options6, options7, options8, options9, options10, options11])

  React.useEffect(() => {
    setAnswers(JSON.parse(localStorage.getItem("p1")))
  }, [])


  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader align="center">
              <h1>Retroalimentación EDM</h1>
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
                    <ListGroupItem onClick={() => setActiveTab(10)} action active={activeTab === 10} >Diez</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(11)} action active={activeTab === 11} >Once</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(12)} action active={activeTab === 12} >Doce</ListGroupItem>
                  </ListGroup>
                </Col>

                <Col xs="12" md="8">

                  <TabContent activeTab={activeTab}>
                    <TabPane tabId={1}>
                      {answerslist1[0][answers[0]]}
                    </TabPane>
                    <TabPane tabId={2}>
                      {answerslist1[1][answers[1]]}
                    </TabPane>
                    <TabPane tabId={3}>
                      {answerslist1[2][answers[2]]}
                    </TabPane>
                    <TabPane tabId={4}>
                      {answerslist1[3][answers[3]]}
                    </TabPane>
                    <TabPane tabId={5}>
                      {answerslist1[4][answers[4]]}
                    </TabPane>
                    <TabPane tabId={6}>
                      {answerslist1[5][answers[5]]}
                    </TabPane>
                    <TabPane tabId={7}>
                      {answerslist1[6][answers[6]]}
                    </TabPane>
                    <TabPane tabId={8}>
                      {answerslist1[7][answers[7]]}
                    </TabPane>
                    <TabPane tabId={9}>
                      {answerslist1[8][answers[8]]}
                    </TabPane>
                    <TabPane tabId={10}>
                      {answerslist1[9][answers[9]]}
                    </TabPane>
                    <TabPane tabId={11}>
                      {answerslist1[10][answers[10]]}
                    </TabPane>
                    <TabPane tabId={12}>
                      {answerslist1[11][answers[11]]}
                    </TabPane>
                  </TabContent>

                </Col>

              </Row>


            </CardBody>
            <Row style={{ justifyContent: 'center' }}>
              <Pagination aria-label="Page navigation example">
                <PaginationItem disabled><PaginationLink style={{ color: '#43425D' }} previous></PaginationLink></PaginationItem>
                <PaginationItem active>
                  <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D',  borderColor:'#43425D' }} tag="button">1</PaginationLink></PaginationItem>
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
                <Link to="/base/list2">
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

export default List1;
