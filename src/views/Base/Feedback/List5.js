import React, { Component, useState } from 'react';
import { Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Row, TabContent, TabPane, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const List5 = () => {

  const [activeTab, setActiveTab] = useState(1)
  const [answers, setAnswers] = useState({0: "6", 1: "6", 2: "6", 3: "6", 4: "6", 5: "6", 6: "6", 7: "6", 8: "6", 9: "6", 10: "6", 11: "6"})
  /*FEEDBACK MEA */ 

  const [options0] = useState([
    "Para una calificación de 0 en esta área se recomienda: Colaborar con las partes interesadas y comunicar los requisitos y objetivos empresariales de supervisión, recopilación y reporte, por medio del uso de definiciones comunes (p. ej., glosario empresarial, metadatos y taxonomía), análisis de referencia y benchmarking.",
    "Para una calificación de 1 en esta área se recomienda: Alinear y mantener continuamente el enfoque de supervisión y evaluación con el enfoque de la empresa y las herramientas a utilizar para la recopilación de datos y la generación de informes empresariales (p. ej., aplicaciones de inteligencia de negocio).",
    "Para una calificación de 2 en esta área se recomienda: Para una calificación de 0 en esta área se recomienda: Acordar una gestión del ciclo de vida y un proceso de control de cambio para la supervisión y la presentación de informes. Incluir oportunidades de mejora para el reporte, métricas, enfoque, análisis de referencia y benchmarking.",
    "Para una calificación de 3 en esta área se recomienda: Acordar los tipos de metas y métricas (p. ej., conformidad, rendimiento, valor, riesgo), taxonomía (clasificación y relaciones entre metas y métricas) y retención de datos (evidencia).",
    "Para una calificación de 4 en esta área se recomienda: Solicitar, priorizar y asignar recursos para la supervisión, considerar la idoneidad, eficiencia, efectividad y confidencialidad.",
    "Para una calificación de 5 en esta área se recomienda: Identificar a las partes interesadas (p. ej., dirección, dueños del proceso y usuarios).",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options1] = useState([
    "Para una calificación de 0 en esta área se recomienda: Evaluar la eficiencia (esfuerzo con relación a la visión proporcionada) y la idoneidad (utilidad y significado) de los datos recopilados y validar la integridad de los datos (precisión y completitud).",
    "Para una calificación de 1 en esta área se recomienda: Evaluar la eficiencia (esfuerzo con relación a la visión proporcionada) y la idoneidad (utilidad y significado) de los datos recopilados y validar la integridad de los datos (precisión y completitud).",
    "Para una calificación de 2 en esta área se recomienda: Usar herramientas y sistemas adecuados para el procesamiento y análisis de datos.",
    "Para una calificación de 3 en esta área se recomienda: Usar herramientas y sistemas adecuados para el procesamiento y análisis de datos.",
    "Para una calificación de 4 en esta área se recomienda: Recopilar datos de procesos definidos (automatizados, cuando sea posible).",
    "Para una calificación de 5 en esta área se recomienda: Agregar datos para respaldar la medición de métricas acordadas.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options2] = useState([
    "Para una calificación de 0 en esta área se recomienda: Analizar la causa de las desviaciones con respecto a los objetivos, iniciar medidas correctivas, asignar responsabilidades para su corrección y hacer seguimiento. En los momentos oportunos, revisar todas las desviaciones y buscar las causas raíz, cuando sea necesario. Documentar los problemas para mayor orientación por si el problema se repite. Documentar los resultados.",
    "Para una calificación de 1 en esta área se recomienda: Diseñar informes de desempeño de proceso que sean concisos, fáciles de entender y personalizados conforme a las distintas necesidades de la dirección y audiencias. Facilitar una toma de decisiones efectiva y oportuna (p.ej. cuadros de mando, informes light de semáforos). Asegurar que la causa y el efecto entre las metas y las métricas se comunica de forma comprensible.",
    "Para una calificación de 2 en esta área se recomienda: Cuando sea posible, integrar el desempeño y el cumplimiento en los objetivos de desempeño de los miembros del personal y vincular el logro de los objetivos de desempeño al sistema de compensación de recompensas organizativo.",
    "Para una calificación de 3 en esta área se recomienda: Comparar los valores de desempeño con los objetivos y benchmarks internos y, cuando sea posible, con los benchmarks externos (industria y competidores clave).",
    "Para una calificación de 4 en esta área se recomienda: Analizar tendencias de desempeño y cumplimiento y tomar las medidas oportunas.",
    "Para una calificación de 5 en esta área se recomienda: Distribuir informes a las partes interesadas relevantes.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options3] = useState([
    "Para una calificación de 0 en esta área se recomienda: Realizar actividades de supervisión y evaluación del control interno basadas en estándares de gobierno de la organización y marcos y prácticas aceptados por la industria. Incluye también la supervisión y evaluación de la eficacia y eficiencia de las actividades de supervisión gerencial.",
    "Para una calificación de 1 en esta área se recomienda: Evaluar regularmente el desempeño del marco de control, a través de una comparación con estándares y buenas prácticas aceptadas por la industria. Considerar la adopción formal de una estrategia de mejora continua de la supervisión del control interno.",
    "Para una calificación de 2 en esta área se recomienda: Asegurar que las excepciones de control se comuniquen , se sigan y analicen prontamente, y que se prioricen e implementen acciones correctivas apropiadas, conforme al perfil de gestión de riesgos (p. ej., clasificar algunas excepciones como riesgo clave y otras como riesgo no clave).",
    "Para una calificación de 3 en esta área se recomienda: Identificar los límites del sistema de control interno. Por ejemplo, considerar cómo los controles internos de la organización, tienen en cuenta las actividades de desarrollo o producción externalizadas y/o ubicadas en otro país (offshore, término en inglés).",
    "Para una calificación de 4 en esta área se recomienda: Evaluar el estado de los controles internos de los proveedores de servicios externos. Confirmar que los proveedores de servicio cumplen con los requisitos legales y regulatorios y con sus obligaciones contractuales.",
    "Para una calificación de 5 en esta área se recomienda: Considerar evaluaciones independientes del sistema de control interno (p. ej., por auditoría interna o compañeros).",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options4] = useState([
    "Para una calificación de 0 en esta área se recomienda: Desarrollar e implementar procedimientos rentables para obtener esta información de acuerdo a los criterios de calidad de la información correspondientes.",
    "Para una calificación de 1 en esta área se recomienda: Desarrollar e implementar procedimientos rentables para obtener esta información de acuerdo a los criterios de calidad de la información correspondientes.",
    "Para una calificación de 2 en esta área se recomienda: Identificar información que indicará si un entorno de control interno está funcionando de forma eficaz.",
    "Para una calificación de 3 en esta área se recomienda: Identificar información que indicará si un entorno de control interno está funcionando de forma eficaz.",
    "Para una calificación de 4 en esta área se recomienda: Identificar controles clave y desarrollar una estrategia adecuada para validar los controles.",
    "Para una calificación de 5 en esta área se recomienda: Entender y priorizar el riesgo de los objetivos de la organización.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options5] = useState([
    "Para una calificación de 0 en esta área se recomienda: Decidir qué excepciones de control deberían comunicarse a la persona responsable de la función y qué excepciones deberían escalarse. Informar a los dueños del proceso y a las partes interesadas.",
    "Para una calificación de 1 en esta área se recomienda: Comunicar procedimientos para el escalamiento de las excepciones de control, análisis de la causa raíz y notificación a los dueños del proceso y a las partes interesadas de I&T.",
    "Para una calificación de 2 en esta área se recomienda: Considerar el riesgo empresarial relacionado para establecer umbrales para el escalamiento de las excepciones de control y fallos.",
    "Para una calificación de 3 en esta área se recomienda: Identificar, reportar y registrar las excepciones de control. Asignar responsabilidades para su resolución e informar de su estado.",
    "Para una calificación de 4 en esta área se recomienda: Identificar, iniciar, seguir e implementar acciones correctivas que surjan de las evaluaciones de control y los reportes.",
    "Para una calificación de 5 en esta área se recomienda: Hacer un seguimiento de todas las excepciones para garantizar que se han abordado las acciones acordadas.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options6] = useState([
    "Para una calificación de 0 en esta área se recomienda: Revisar y ajustar continuamente las políticas, principios, estándares, procedimientos y metodologías para que sean eficaces en garantizar el cumplimiento necesario y abordar el riesgo empresarial. Usar expertos internos y externos, cuando sea necesario.",
    "Para una calificación de 1 en esta área se recomienda: Revisar y ajustar continuamente las políticas, principios, estándares, procedimientos y metodologías para que sean eficaces en garantizar el cumplimiento necesario y abordar el riesgo empresarial. Usar expertos internos y externos, cuando sea necesario.",
    "Para una calificación de 2 en esta área se recomienda: Revisar y ajustar continuamente las políticas, principios, estándares, procedimientos y metodologías para que sean eficaces en garantizar el cumplimiento necesario y abordar el riesgo empresarial. Usar expertos internos y externos, cuando sea necesario.",
    "Para una calificación de 3 en esta área se recomienda: Comunicar los requisitos nuevos y modificados a todo el personal relevante.",
    "Para una calificación de 4 en esta área se recomienda: Comunicar los requisitos nuevos y modificados a todo el personal relevante.",
    "Para una calificación de 5 en esta área se recomienda: Comunicar los requisitos nuevos y modificados a todo el personal relevante.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options7] = useState([
    "Para una calificación de 0 en esta área se recomienda: Evaluar regularmente las políticas, estándares, procedimientos y metodologías organizativas en todas las funciones de la empresa, para garantizar el cumplimiento de todos los requisitos legales y regulatorios relevantes relacionados con el procesamiento de la información.",
    "Para una calificación de 1 en esta área se recomienda: Evaluar regularmente las políticas, estándares, procedimientos y metodologías organizativas en todas las funciones de la empresa, para garantizar el cumplimiento de todos los requisitos legales y regulatorios relevantes relacionados con el procesamiento de la información.",
    "Para una calificación de 2 en esta área se recomienda: Evaluar periódicamente los procesos y actividades del negocio y de TI para asegurar el cumplimiento de los requisitos legales, regulatorios y contractuales vigentes",
    "Para una calificación de 3 en esta área se recomienda: Mejorar las políticas, estándares, procedimientos, metodologías y sus procesos y actividades asociadas con base en la revisión y las lecciones aprendidas.",
    "Para una calificación de 4 en esta área se recomienda: Tratar las brechas de cumplimiento en políticas, estándares y procedimientos con las debida oportunidad.",
    "Para una calificación de 5 en esta área se recomienda: Revisar regularmente los patrones recurrentes de fallos de cumplimiento y evaluar las lecciones aprendidas.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options8] = useState([
    "Para una calificación de 0 en esta área se recomienda: Si se requiere, obtener declaraciones de los socios de negocio sobre sus niveles de cumplimiento con leyes y regulaciones aplicables, en la medida en que estén relacionados con las transacciones electrónicas entre empresas.",
    "Para una calificación de 1 en esta área se recomienda: Integrar los informes sobre los requisitos legales, regulatorios y contractuales a nivel global de la empresa, involucrando a todas las unidades de negocio.",
    "Para una calificación de 2 en esta área se recomienda: Obtener confirmación periódica del cumplimiento con las políticas internas por parte de los dueños de los procesos de negocio y de TI y los jefes de unidades",
    "Para una calificación de 3 en esta área se recomienda: Obtener confirmación periódica del cumplimiento con las políticas internas por parte de los dueños de los procesos de negocio y de TI y los jefes de unidades",
    "Para una calificación de 4 en esta área se recomienda: Supervisar y comunicar los problemas de incumplimiento y, cuando sea necesario, investigar la causa raíz.",
    "Para una calificación de 5 en esta área se recomienda: Realizar periódicamente revisiones internas y externas ( independientes, cuando sea posible, ) para evaluar los niveles de cumplimiento.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options9] = useState([
    "Para una calificación de 0 en esta área se recomienda: Entender el contexto externo de la empresa. Esta comprensión ayudará al profesional del aseguramiento a comprender mejor las metas empresariales y la importancia relativa de las metas de alineamiento y metas empresariales, así como las amenazas más importantes para estas metas. A su vez, esto contribuirá a definir un mejor y más relevante alcance para el compromiso con el aseguramiento.",
    "Para una calificación de 1 en esta área se recomienda: Entender el contexto interno de la empresa. Esta comprensión ayudará al profesional de aseguramiento a evaluar mejor las metas empresariales y la importancia relativa de las metas de alineamiento y metas empresariales, así como las amenazas más importantes para estas metas. A su vez, esto contribuirá a definir un mejor y más relevante alcance para el compromiso con el aseguramiento.",
    "Para una calificación de 2 en esta área se recomienda: Desarrollar un plan anual global para las iniciativas de aseguramiento que incluya los objetivos consolidados de aseguramiento.",
    "Para una calificación de 3 en esta área se recomienda: Desarrollar un plan anual global para las iniciativas de aseguramiento que incluya los objetivos consolidados de aseguramiento.",
    "Para una calificación de 4 en esta área se recomienda: Entender la estrategia y prioridades de la empresa.",
    "Para una calificación de 5 en esta área se recomienda: Entender la estrategia y prioridades de la empresa.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options10] = useState([
    "Para una calificación de 0 en esta área se recomienda: Asegurar que los objetivos del compromiso del aseguramiento consideren los tres componentes de valor del objetivo: obtener beneficios que respalden los objetivos estratégicos, optimizar el riesgo de que no se alcancen los objetivos estratégicos y optimizar los niveles de recursos requeridos para lograr los objetivos estratégicos.",
    "Para una calificación de 1 en esta área se recomienda: Asegurar que los objetivos del compromiso del aseguramiento consideren los tres componentes de valor del objetivo: obtener beneficios que respalden los objetivos estratégicos, optimizar el riesgo de que no se alcancen los objetivos estratégicos y optimizar los niveles de recursos requeridos para lograr los objetivos estratégicos.",
    "Para una calificación de 2 en esta área se recomienda: Definir el objetivo de aseguramiento de la iniciativa de aseguramiento mediante la identificación de las partes interesadas en esta iniciativa de aseguramiento y sus intereses.",
    "Para una calificación de 3 en esta área se recomienda: Definir el objetivo de aseguramiento de la iniciativa de aseguramiento mediante la identificación de las partes interesadas en esta iniciativa de aseguramiento y sus intereses.",
    "Para una calificación de 4 en esta área se recomienda: Considerar el uso de la cascada de metas de COBIT y sus distintos niveles para expresar el objetivo del aseguramiento.",
    "Para una calificación de 5 en esta área se recomienda: Acordar los objetivos de alto nivel y los límites organizativos del compromiso de aseguramiento.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options11] = useState([
    "Para una calificación de 0 en esta área se recomienda: Hacer un seguimiento, dentro de la organización, para determinar si se llevaron a cabo acciones correctivas y las debilidades de control interno se resolvieron.",
    "Para una calificación de 1 en esta área se recomienda: Hacer un seguimiento, dentro de la organización, para determinar si se llevaron a cabo acciones correctivas y las debilidades de control interno se resolvieron.",
    "Para una calificación de 2 en esta área se recomienda: Hacer un seguimiento, dentro de la organización, para determinar si se llevaron a cabo acciones correctivas y las debilidades de control interno se resolvieron.",
    "Para una calificación de 3 en esta área se recomienda: Acordar e implementar internamente, dentro de la organización, las acciones necesarias para resolver las debilidades y brechas identificadas.",
    "Para una calificación de 4 en esta área se recomienda: Acordar e implementar internamente, dentro de la organización, las acciones necesarias para resolver las debilidades y brechas identificadas.",
    "Para una calificación de 5 en esta área se recomienda: Acordar e implementar internamente, dentro de la organización, las acciones necesarias para resolver las debilidades y brechas identificadas.",
    "No existe ninguna calificación para esta pregunta."
  ])

  const [answerslist5] = useState([options0, options1, options2, options3, options4, options5, options6, options7, options8, options9, options10, options11])

  React.useEffect(() => {
    if(localStorage.getItem("p5")==null){
      //console.log("here")
    }else{
      setAnswers(JSON.parse(localStorage.getItem("p5")))
    }
  }, [])

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader align="center">
              <h1>Retroalimentación MEA</h1>
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
                    <ListGroupItem onClick={() => setActiveTab(10)} action active={activeTab === 10} >Feedback-Pregunta Diez</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(11)} action active={activeTab === 11} >Feedback-Pregunta Once</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(12)} action active={activeTab === 12} >Feedback-Pregunta Doce</ListGroupItem>
                  </ListGroup>
                </Col>
                <Col xs="12" md="8">
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId={1}>
                      {answerslist5[0][answers[0]]}
                    </TabPane>
                    <TabPane tabId={2}>
                      {answerslist5[1][answers[1]]}
                    </TabPane>
                    <TabPane tabId={3}>
                      {answerslist5[2][answers[2]]}
                    </TabPane>
                    <TabPane tabId={4}>
                      {answerslist5[3][answers[3]]}
                    </TabPane>
                    <TabPane tabId={5}>
                      {answerslist5[4][answers[4]]}
                    </TabPane>
                    <TabPane tabId={6}>
                      {answerslist5[5][answers[5]]}
                    </TabPane>
                    <TabPane tabId={7}>
                      {answerslist5[6][answers[6]]}
                    </TabPane>
                    <TabPane tabId={8}>
                      {answerslist5[7][answers[7]]}
                    </TabPane>
                    <TabPane tabId={9}>
                      {answerslist5[8][answers[8]]}
                    </TabPane>
                    <TabPane tabId={10}>
                      {answerslist5[9][answers[9]]}
                    </TabPane>
                    <TabPane tabId={11}>
                      {answerslist5[10][answers[10]]}
                    </TabPane>
                    <TabPane tabId={12}>
                      {answerslist5[11][answers[11]]}
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </CardBody>
            <Row style={{ justifyContent: 'center' }}>
              <Pagination aria-label="Page navigation example">
                <Link to="/base/list4">
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
                <PaginationItem>
                  <Link to="/base/list4">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">4</PaginationLink></PaginationItem>
                  </Link>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D',  borderColor:'#43425D' }} tag="button">5</PaginationLink></PaginationItem>
                </PaginationItem>
                <PaginationItem disabled><PaginationLink style={{ color: '#43425D' }} next></PaginationLink></PaginationItem>
              </Pagination>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );

}

export default List5;
