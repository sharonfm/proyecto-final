import React, { Component, useState } from 'react';
import { Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Row, TabContent, TabPane, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const List3 = () => {

  const [activeTab, setActiveTab] = useState(1)
  const [answers, setAnswers] = useState({0: "6", 1: "6", 2: "6", 3: "6", 4: "6", 5: "6", 6: "6", 7: "6", 8: "6", 9: "6", 10: "6", 11: "6", 12: "6", 13: "6", 14: "6", 15: "6", 16: "6", 17: "6", 18: "6", 19: "6", 20: "6", 21: "6", 22: "6", 23: "6"})
  /*FEEDBACK BAI */ 
  const [options0] = useState([
    "Para una calificación de 0 en esta área se recomienda: Mantener y hacer cumplir una estrategia estándar de gestión de programas, alineada con el entorno específico de la empresa y con buenas prácticas, basadas en procesos definidos y al uso apropiado de la tecnología. ",
    "Para una calificación de 1 en esta área se recomienda: Asegurar que la estrategia planteada cubra todo el ciclo de vida y las disciplinas a seguir, incluida la gestión del alcance de , recursos, riesgo, coste, calidad, tiempo, comunicación, participación de las partes interesadas, adquisiciones, control de cambio, integración y obtención de beneficios.",
    "Para una calificación de 2 en esta área se recomienda: Establecer una oficina de programas o una oficina de gestión de proyectos (PMO) que mantenga una estrategia estándar para la gestión de programas y proyectos en toda la organización. La PMO respalda todos los programas y proyectos mediante la creación y el mantenimiento de plantillas de documentación de proyectos requeridos, formación y mejores prácticas para los gestores de programa/proyecto, seguimiento de las métricas sobre el uso de las mejores prácticas para la gestión de proyectos, etc.",
    "Para una calificación de 3 en esta área se recomienda: Establecer una oficina de programas o una oficina de gestión de proyectos (PMO) que mantenga una estrategia estándar para la gestión de programas y proyectos en toda la organización. La PMO respalda todos los programas y proyectos mediante la creación y el mantenimiento de plantillas de documentación de proyectos requeridos, formación y mejores prácticas para los gestores de programa/proyecto, seguimiento de las métricas sobre el uso de las mejores prácticas para la gestión de proyectos, etc. En algunos casos, la PMO podría también informar del progreso del programa/proyecto a la alta dirección y/o las partes interesadas, ayudar a priorizar proyectos y asegurar que todos los proyectos respaldan los objetivos globales de negocio de la empresa.",
    "Para una calificación de 4 en esta área se recomienda: Evaluar las lecciones aprendidas con base en el uso de la estrategia de gestión de programas y actualizar la estrategia, según sea necesario.",
    "Para una calificación de 5 en esta área se recomienda: Evaluar las lecciones aprendidas con base en el uso de la estrategia de gestión de programas y actualizar la estrategia, según sea necesario.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options1] = useState([
    "Para una calificación de 0 en esta área se recomienda: Establecer una estrategia de gestión de riesgos formal alineada con el marco de gestión de riesgos empresariales (ERM).",
    "Para una calificación de 1 en esta área se recomienda: Establecer una estrategia de gestión de riesgos formal alineada con el marco de gestión de riesgos empresariales (ERM). Asegurar que la estrategia incluya la identificación, análisis, respuesta, mitigación, monitorización y control del riesgo.",
    "Para una calificación de 2 en esta área se recomienda: Asignar a personal con habilidades adecuadas la responsabilidad de ejecutar el proceso de gestión de riesgos empresariales dentro de un programa y asegurar que esto se incorpore a las prácticas de desarrollo de soluciones.",
    "Para una calificación de 3 en esta área se recomienda: Realizar la evaluación de riesgos para identificar y cuantificar el riesgo de forma continua en todo el programa.",
    "Para una calificación de 4 en esta área se recomienda: Realizar la evaluación de riesgos para identificar y cuantificar el riesgo de forma continua en todo el programa. Gestionar y comunicar el riesgo de forma adecuada dentro de la estructura de gobierno del programa.",
    "Para una calificación de 5 en esta área se recomienda: Identificar a los dueños de las acciones para evitar, aceptar o mitigar el riesgo.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options2] = useState([
    "Para una calificación de 0 en esta área se recomienda: Retirar el programa del portafolio de inversiones activas cuando exista el acuerdo de que se ha alcanzado el valor deseado o cuando esté claro que no se alcanzará dentro de los criterios de valor establecidos para el programa.",
    "Para una calificación de 1 en esta área se recomienda: Cerrar el programa de forma ordenada, incluida la aprobación formal, disolución de la organización del programa y soporte de la función, validación de entregables y comunicación de la retirada.",
    "Para una calificación de 2 en esta área se recomienda: Cerrar el programa de forma ordenada, incluida la aprobación formal, disolución de la organización del programa y soporte de la función, validación de entregables y comunicación de la retirada.",
    "Para una calificación de 3 en esta área se recomienda: Revisar y documentar las lecciones aprendidas. Cuando se ha retirado el programa, eliminarlo del portafolio de inversiones activas.",
    "Para una calificación de 4 en esta área se recomienda: Revisar y documentar las lecciones aprendidas. Cuando se ha retirado el programa, eliminarlo del portafolio de inversiones activas. Trasladar cualquier capacidad resultante a un portafolio de activos operativos para garantizar que sigue creándose y manteniéndose valor.",
    "Para una calificación de 5 en esta área se recomienda: Establecer la rendición de cuentas y los procesos para garantizar que la empresa siga optimizando valor del servicio, activo o recursos. Puede que se requieran inversiones adicionales en algún momento para garantizar que esto ocurra.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options3] = useState([
    "Para una calificación de 0 en esta área se recomienda: Identificar, priorizar, y acordar los requisitos de información , funcionales, técnicos y de control del negocio que cubran el alcance para lograr los resultados esperados de la solución empresarial propuesta habilitada por la I&T.",
    "Para una calificación de 1 en esta área se recomienda: Garantizar que todos los requisitos de las partes interesadas, incluidos los criterios de aceptación relevantes se consideren, capten, prioricen y registren de forma que sean comprensibles para todas las partes interesadas, reconociendo que los requisitos podrían cambiar y ser más detallados conforme se implementen.",
    "Para una calificación de 2 en esta área se recomienda: Especificar y priorizar los requisitos de información, funcionales y técnicos, conforme al diseño de la experiencia de usuario y los requisitos confirmados de las partes interesadas.",
    "Para una calificación de 3 en esta área se recomienda: Incluir requisitos de control de la información en los procesos del negocio, procesos automatizados y entornos de I&T para abordar el riesgo de la información y cumplir con la legislación, regulaciones y contratos comerciales.",
    "Para una calificación de 4 en esta área se recomienda: Hacer un seguimiento y control del alcance, requisitos y los cambios durante todo el ciclo de vida de la solución, a medida que evoluciona la comprensión de la solución.",
    "Para una calificación de 5 en esta área se recomienda: Definir e implementar un procedimiento para la definición y el mantenimiento de los requisitos, así como un repositorio de requisitos que sean apropiados para el tamaño, complejidad, objetivos y riesgo de la iniciativa que la empresa considera llevar a cabo.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options4] = useState([
    "Para una calificación de 0 en esta área se recomienda: Identificar el riesgo de requisitos de calidad, funcionales y técnica (debido, por ejemplo, a la falta de participación del usuario, expectativas poco realistas, a los desarrolladores añadiendo una funcionalidad innecesaria, hipótesis poco realistas, etc.)",
    "Para una calificación de 1 en esta área se recomienda: Identificar el riesgo de requisitos de calidad, funcionales y técnica (debido, por ejemplo, a la falta de participación del usuario, expectativas poco realistas, a los desarrolladores añadiendo una funcionalidad innecesaria, hipótesis poco realistas, etc.)",
    "Para una calificación de 2 en esta área se recomienda: Determinar una respuesta apropiada al riesgo para el riesgo de los requisitos.",
    "Para una calificación de 3 en esta área se recomienda: Determinar una respuesta apropiada al riesgo para el riesgo de los requisitos.",
    "Para una calificación de 4 en esta área se recomienda: Analizar el riesgo identificado estimando su probabilidad y su impacto en el presupuesto y en el calendario. Evaluar el impacto en el presupuesto de las adecuadas acciones de respuesta al riesgo.",
    "Para una calificación de 5 en esta área se recomienda: Analizar el riesgo identificado estimando su probabilidad y su impacto en el presupuesto y en el calendario. Evaluar el impacto en el presupuesto de las adecuadas acciones de respuesta al riesgo.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options5] = useState([
    "Para una calificación de 0 en esta área se recomienda: Coordinar la retroalimentación de las partes interesadas afectadas En etapas clave predeterminadas",
    "Para una calificación de 1 en esta área se recomienda: Coordinar la retroalimentación de las partes interesadas afectadas En etapas clave predeterminadas",
    "Para una calificación de 2 en esta área se recomienda: Asegurar que el patrocinador del negocio o dueño del producto realice la elección final de la solución, estrategia de adquisición y diseño de alto nivel, de acuerdo con el caso de negocio.",
    "Para una calificación de 3 en esta área se recomienda: Asegurar que el patrocinador del negocio o dueño del producto realice la elección final de la solución, estrategia de adquisición y diseño de alto nivel, de acuerdo con el caso de negocio. Obtener las aprobaciones necesarias de las partes interesadas afectadas (p. ej. dueño del proceso de negocio, arquitecto empresarial, director de operaciones, director de seguridad de la información, director de privacidad).",
    "Para una calificación de 4 en esta área se recomienda: Obtener revisiones de calidad durante y al final de cada etapa, iteración o liberación clave del proyecto. Evaluar los resultados en comparación con los criterios de aceptación inicial.",
    "Para una calificación de 5 en esta área se recomienda: Contar con la aceptación de los patrocinadores del negocio y de otras partes interesadas en cada revisión de calidad satisfactoria.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options6] = useState([
    "Para una calificación de 0 en esta área se recomienda: Desarrollar el diseño detallado propuesto para los procesos de negocio, servicios de soporte, aplicaciones, infraestructura y repositorios de información.",
    "Para una calificación de 1 en esta área se recomienda: Documentar todos los componentes de la solución conforme a los estándares definidos. ",
    "Para una calificación de 2 en esta área se recomienda: Documentar todos los componentes de la solución conforme a los estándares definidos. Mantener un control de versiones sobre todos los componentes desarrollados y la documentación asociada.",
    "Para una calificación de 3 en esta área se recomienda: Hacer un seguimiento de las peticiones de cambio y de las revisiones de diseño, desempeño y calidad. Asegurar la participación activa de todas las partes interesadas afectadas.",
    "Para una calificación de 4 en esta área se recomienda: Garantizar que las responsabilidades de usar componentes de infraestructura de alta seguridad o de acceso restringido estén claramente definidas y sean comprendidas por aquellos que desarrollan e integran los componentes de infraestructura.",
    "Para una calificación de 5 en esta área se recomienda: Evaluar el impacto de la personalización y configuración de la solución en el rendimiento y la eficiencia de las soluciones adquiridas y en la interoperabilidad con las aplicaciones, sistemas operativos y otra infraestructura existente. Adaptar procesos de negocio cuando sea necesario para aprovechar la capacidad de la aplicación.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options7] = useState([
    "Para una calificación de 0 en esta área se recomienda: Proponer definiciones de los productos y servicios de TI nuevos o modificados para asegurar que cumplan con su propósito.",
    "Para una calificación de 1 en esta área se recomienda: Proponer definiciones de los productos y servicios de TI nuevos o modificados para asegurar que cumplan con su propósito. Documentar las definiciones propuestas que se desarrollarán en la lista del portafolio de productos y servicios.",
    "Para una calificación de 2 en esta área se recomienda: Proponer opciones de nivel de servicio (tiempos de servicio, satisfacción del usuario, disponibilidad, rendimiento, capacidad, seguridad, privacidad, continuidad, cumplimiento y usabilidad) nuevas o modificadas para asegurar que los productos y servicios de TI sean adecuados. Documentar las opciones de servicio propuestas en el portafolio.",
    "Para una calificación de 3 en esta área se recomienda: Mediar con las direcciones de relaciones del negocio de gestión de portafolio para acordar las definiciones propuestas de productos y servicios y las opciones de nivel de servicio.",
    "Para una calificación de 4 en esta área se recomienda: Mediar con las direcciones de relaciones del negocio de gestión de portafolio para acordar las definiciones propuestas de productos y servicios y las opciones de nivel de servicio.",
    "Para una calificación de 5 en esta área se recomienda: Si los cambios en productos o servicios caen en el alcance de la autoridad de aprobación acordada, crear productos o servicios de TI u opciones de nivel de servicio nuevos o modificados. De no ser así, comunicar el cambio a la gestión de portafolio para que revise la inversión.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options8] = useState([
    "Para una calificación de 0 en esta área se recomienda: Analizar y evaluar el impacto de elegir una metodología de desarrollo (es decir, en cascada, Agile, bimodal) sobre los recursos disponibles, los requisitos de la arquitectura, los ajustes de la configuración y la rigidez del sistema.",
    "Para una calificación de 1 en esta área se recomienda: Analizar y evaluar el impacto de elegir una metodología de desarrollo (es decir, en cascada, Agile, bimodal) sobre los recursos disponibles, los requisitos de la arquitectura, los ajustes de la configuración y la rigidez del sistema.",
    "Para una calificación de 2 en esta área se recomienda: Establecer la metodología de desarrollo adecuada y la estrategia organizativa que lleve a cabo la solución propuesta de forma eficaz y eficiente y que sea capaz de satisfacer los requisitos de la empresa, arquitectura y sistema. ",
    "Para una calificación de 3 en esta área se recomienda: Establecer los equipos de proyecto necesarios conforme a lo definido en la metodología de desarrollo elegida. Proporcionar la formación suficiente",
    "Para una calificación de 4 en esta área se recomienda: Considerar la aplicación de un sistema dual, si fuera necesario, en el que grupos transversales (fábricas digitales) se centren en desarrollar un producto o proceso con una metodología tecnológica, operativa o gerencial distinta al resto de la compañía.",
    "Para una calificación de 5 en esta área se recomienda: Integrar los grupos transversales en las unidades de negocio para extender la nueva cultura del desarrollo ágil y hacer que se acerque cada vez más a la norma.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options9] = useState([
    "Para una calificación de 0 en esta área se recomienda: Considerar los elementos siguientes (actuales y estimados) en la evaluación de la disponibilidad, rendimiento y capacidad de servicios y recursos: requisitos del cliente, prioridades del negocio, objetivos empresariales, impacto presupuestario, utilización de recursos, capacidades de TI y tendencias de la industria.",
    "Para una calificación de 1 en esta área se recomienda: Considerar los elementos siguientes (actuales y estimados) en la evaluación de la disponibilidad, rendimiento y capacidad de servicios y recursos: requisitos del cliente, prioridades del negocio, objetivos empresariales, impacto presupuestario, utilización de recursos, capacidades de TI y tendencias de la industria.",
    "Para una calificación de 2 en esta área se recomienda: Identificar y hacer un seguimiento de todos los incidentes causados por un rendimiento o capacidad inadecuados.",
    "Para una calificación de 3 en esta área se recomienda: Identificar y hacer un seguimiento de todos los incidentes causados por un rendimiento o capacidad inadecuados.",
    "Para una calificación de 4 en esta área se recomienda: Evaluar regularmente los niveles actuales de rendimiento para todos los niveles de procesamiento (demanda del negocio, capacidad de servicios y capacidad de recursos) comparándolos con las tendencias y los SLA. Tener en cuenta los cambios en el entorno.",
    "Para una calificación de 5 en esta área se recomienda: Monitorizar el uso real de la capacidad y el rendimiento frente a umbrales definidos y con el soporte, cuando sea necesario, de software automatizado.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options10] = useState([
    "Para una calificación de 0 en esta área se recomienda: Identificar las implicaciones en la disponibilidad y capacidad de las necesidades cambiantes del negocio y de las oportunidades de mejora. Usar técnicas de modelamiento para validar los planes de disponibilidad, rendimiento y capacidad.",
    "Para una calificación de 1 en esta área se recomienda: Usar técnicas de modelamiento para validar los planes de disponibilidad, rendimiento y capacidad.",
    "Para una calificación de 2 en esta área se recomienda: Revisar las implicaciones del análisis de tendencia de servicios sobre la disponibilidad y la capacidad.",
    "Para una calificación de 3 en esta área se recomienda: Garantizar que la dirección realice comparaciones de la demanda real de recursos contra la oferta y demanda estimadas para evaluar las técnicas de predicción actuales e implementar mejoras donde sea necesario.",
    "Para una calificación de 4 en esta área se recomienda: Ajustar los planes de rendimiento y capacidad y los SLA con base en los cambios en los procesos de negocio, servicios de soporte, aplicaciones e infraestructura realistas, nuevos, propuestos y/o proyectados. Incluir también revisiones del uso real de la capacidad y del rendimiento, incluidos los niveles de carga de trabajo.",
    "Para una calificación de 5 en esta área se recomienda: Priorizar las mejoras necesarias y crear planes de disponibilidad y capacidad que justifiquen el coste.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options11] = useState([
    "Para una calificación de 0 en esta área se recomienda: Obtener directrices de los manuales de producto de los proveedores para garantizar un nivel adecuado de disponibilidad de rendimiento durante los picos en las cargas de trabajo y procesamiento.",
    "Para una calificación de 1 en esta área se recomienda: Obtener directrices de los manuales de producto de los proveedores para garantizar un nivel adecuado de disponibilidad de rendimiento durante los picos en las cargas de trabajo y procesamiento.",
    "Para una calificación de 2 en esta área se recomienda: Definir un proceso de escalamiento para una resolución rápida de emergencias de capacidad y problemas de rendimiento.",
    "Para una calificación de 3 en esta área se recomienda: Identificar las brechas de rendimiento y capacidad con base en la monitorización del rendimiento actual y estimado. Usar especificaciones conocidas de disponibilidad, continuidad y recuperación para clasificar los recursos y permitir su priorización.",
    "Para una calificación de 4 en esta área se recomienda: Definir acciones correctivas (p. ej., cambios en la carga de trabajo, priorizar tareas o añadir recursos cuando se identifiquen problemas de rendimiento y capacidad).",
    "Para una calificación de 5 en esta área se recomienda: Integrar las acciones correctivas necesarias en los procesos apropiados de planificación y gestión del cambio.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options12] = useState([
    "Para una calificación de 0 en esta área se recomienda: Para establecer el deseo de cambiar, identificar, aprovechar y comunicar los puntos de dolor actuales, eventos negativos, riesgo, insatisfacción de los clientes y problemas del negocio, así como los beneficios iniciales y futuras oportunidades y recompensas y ventajas competitivas.",
    "Para una calificación de 1 en esta área se recomienda: Para establecer el deseo de cambiar, identificar, aprovechar y comunicar los puntos de dolor actuales, eventos negativos, riesgo, insatisfacción de los clientes y problemas del negocio, así como los beneficios iniciales y futuras oportunidades y recompensas y ventajas competitivas.",
    "Para una calificación de 2 en esta área se recomienda: Evaluar el alcance e impacto de los cambios visualizados, las partes interesadas afectadas, la naturaleza del impacto y la participación requerida de cada grupo de interés, además de la disposición y capacidad real para adoptar el cambio.",
    "Para una calificación de 3 en esta área se recomienda: Evaluar el alcance e impacto de los cambios visualizados, las partes interesadas afectadas, la naturaleza del impacto y la participación requerida de cada grupo de interés, además de la disposición y capacidad real para adoptar el cambio.",
    "Para una calificación de 4 en esta área se recomienda: Proporcionar un liderazgo visible de la alta dirección para establecer el rumbo y alinear, motivar e inspirar a las partes interesadas para que deseen el cambio.",
    "Para una calificación de 5 en esta área se recomienda: Emitir comunicaciones clave del comité ejecutivo o CEO que demuestren el compromiso con el cambio.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options13] = useState([
    "Para una calificación de 0 en esta área se recomienda: Desarrollar un plan de comunicación de la visión para respaldar a los grupos de audiencia principales, sus perfiles de comportamiento y necesidades de información, canales de comunicación y principios.",
    "Para una calificación de 1 en esta área se recomienda: Desarrollar un plan de comunicación de la visión para respaldar a los grupos de audiencia principales, sus perfiles de comportamiento y necesidades de información, canales de comunicación y principios.",
    "Para una calificación de 2 en esta área se recomienda: Comunicar en los niveles adecuados de la empresa, conforme al plan.",
    "Para una calificación de 3 en esta área se recomienda: Reforzar la comunicación a través de múltiples foros y repeticiones.",
    "Para una calificación de 4 en esta área se recomienda: Hacer que todos los niveles de liderazgo rindan cuentas para demostrar la visión.",
    "Para una calificación de 5 en esta área se recomienda: Comprobar la comprensión de la visión deseada y responder a cualquier cuestión señalada por el personal.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options14] = useState([
    "Para una calificación de 0 en esta área se recomienda: Desarrollar un plan para la operación y uso del cambio. El plan debería comunicar y construir a partir de las ganancias rápidas obtenidas, abordar, en términos globales, aspectos culturales y de comportamiento de la transición e incrementar el compromiso y la participación. ",
    "Para una calificación de 1 en esta área se recomienda: Desarrollar un plan para la operación y uso del cambio. El plan debería comunicar y construir a partir de las ganancias rápidas obtenidas, abordar, en términos globales, aspectos culturales y de comportamiento de la transición e incrementar el compromiso y la participación. ",
    "Para una calificación de 2 en esta área se recomienda: Asegurar que el plan cubre una visión holística del cambio y que proporciona documentación (p. ej. procedimientos), asesoría, capacitación, tutoría, transferencia de conocimientos, soporte para el mejoramiento continuo inmediatamente después de su implantación.",
    "Para una calificación de 3 en esta área se recomienda: Asegurar que el plan cubre una visión holística del cambio y que proporciona documentación (p. ej. procedimientos), asesoría, capacitación, tutoría, transferencia de conocimientos, soporte para el mejoramiento continuo inmediatamente después de su implantación.",
    "Para una calificación de 4 en esta área se recomienda: Implementar el plan operativo y de uso. Definir y hacer seguimiento de las medidas de éxito, incluyendo medidas difíciles para el negocio y medidas de percepción que indiquen cómo se sienten las personas con un cambio. Implementar acciones correctivas si fuera necesario.",
    "Para una calificación de 5 en esta área se recomienda: Definir y hacer seguimiento de las medidas de éxito, incluyendo medidas difíciles para el negocio y medidas de percepción que indiquen cómo se sienten las personas con un cambio. Implementar acciones correctivas si fuera necesario.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options15] = useState([
    "Para una calificación de 0 en esta área se recomienda: Usar solicitudes de cambio formales para permitir a los propietarios de los procesos de negocio y a TI solicitar cambios a procesos de negocio, infraestructura, sistemas o aplicaciones. Asegurarse de que todos estos cambios surjan solo a través del proceso de gestión de solicitudes de cambio.",
    "Para una calificación de 1 en esta área se recomienda: Categorizar todos los cambios solicitados (p. ej., procesos de negocio, infraestructura, sistemas operativos, redes, sistemas de aplicación, software de aplicación comprado/empaquetado) y relacionar los elementos de configuración afectados.",
    "Para una calificación de 2 en esta área se recomienda: Priorizar todos los cambios solicitados basándose en los requisitos de negocio y técnicos, recursos requeridos y las razones legales, regulatorias y contractuales para el cambio solicitado.",
    "Para una calificación de 3 en esta área se recomienda: Aprobar formalmente cada cambio por parte de los dueños de los procesos de negocio, gestores de servicios y partes interesadas técnicas de TI, según corresponda. Los cambios que son de bajo riesgo y relativamente frecuentes deben pre-aprobarse como cambios estándar.",
    "Para una calificación de 4 en esta área se recomienda: Planificar y evaluar todas las solicitudes de una manera estructurada. Incluir un análisis de impacto en los procesos de negocio, la infraestructura, los sistemas y las aplicaciones, los planes de continuidad del negocio (BCP) y los proveedores de servicios para asegurarse de que se hayan identificado todos los componentes afectados. Evaluar la probabilidad de afectar negativamente el entorno operativo y el riesgo de implementar el cambio. Considerar las implicaciones de seguridad, privacidad, legales, contractuales y de cumplimiento del cambio solicitado. Considerar también las interdependencias entre los cambios. Involucrar a los propietarios de los procesos de negocio en el proceso de evaluación, cuando sea conveniente.",
    "Para una calificación de 5 en esta área se recomienda: Considerar el impacto de los proveedores de servicios contratados (p. ej., de procesamiento de negocio , infraestructura, desarrollo de aplicaciones y servicios compartidos externalizados) en el proceso de gestión de cambios. Incluir la integración de los procesos de gestión de cambios organizativos con los procesos de gestión de cambios de los proveedores de servicios y el impacto en términos contractuales y SLA.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options16] = useState([
    "Para una calificación de 0 en esta área se recomienda: Definir lo que constituye un cambio de emergencia.",
    "Para una calificación de 1 en esta área se recomienda: Definir lo que constituye un cambio de emergencia.",
    "Para una calificación de 2 en esta área se recomienda: Asegurar que existe un procedimiento documentado para declarar, evaluar, aprobar inicialmente, autorizar después del cambio y registrar un cambio de emergencia.",
    "Para una calificación de 3 en esta área se recomienda: Verificar que todos los acuerdos de acceso de emergencia para los cambios se autoricen, documenten y revoquen adecuadamente después de que el cambio se haya aplicado.",
    "Para una calificación de 4 en esta área se recomienda: Monitorizar todos los cambios de emergencia y realizar las revisiones posteriores a la implementación con la participación de todas las partes interesadas. La revisión debe considerar e iniciar acciones correctivas basadas en las causas raíz, tales como problemas con los procesos de negocio, desarrollo y mantenimiento de sistemas de aplicación, entornos de desarrollo y pruebas, documentación y manuales, e integridad de datos.",
    "Para una calificación de 5 en esta área se recomienda: Monitorizar todos los cambios de emergencia y realizar las revisiones posteriores a la implementación con la participación de todas las partes interesadas. La revisión debe considerar e iniciar acciones correctivas basadas en las causas raíz, tales como problemas con los procesos de negocio, desarrollo y mantenimiento de sistemas de aplicación, entornos de desarrollo y pruebas, documentación y manuales, e integridad de datos.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options17] = useState([
    "Para una calificación de 0 en esta área se recomienda: Incluir los cambios en la documentación en el procedimiento de gestión. Algunos ejemplos de documentación son: procedimientos operativos de negocio y de TI, documentación de continuidad del negocio y recuperación ante desastres, información de configuración, documentación de aplicaciones, pantallas de ayuda y materiales de capacitación.",
    "Para una calificación de 1 en esta área se recomienda: Incluir los cambios en la documentación en el procedimiento de gestión. Algunos ejemplos de documentación son: procedimientos operativos de negocio y de TI, documentación de continuidad del negocio y recuperación ante desastres, información de configuración, documentación de aplicaciones, pantallas de ayuda y materiales de capacitación.",
    "Para una calificación de 2 en esta área se recomienda: Definir un período de retención adecuado para la documentación de los cambios y la documentación del sistema y del usuario antes y después del cambio.",
    "Para una calificación de 3 en esta área se recomienda: Definir un período de retención adecuado para la documentación de los cambios y la documentación del sistema y del usuario antes y después del cambio.",
    "Para una calificación de 4 en esta área se recomienda: Someter la documentación al mismo nivel de revisión que el cambio en sí mismo.",
    "Para una calificación de 5 en esta área se recomienda: Someter la documentación al mismo nivel de revisión que el cambio en sí mismo.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options18] = useState([
    "Para una calificación de 0 en esta área se recomienda: Definir un plan de migración del proceso de negocio, de los datos de servicios y de la infraestructura de I&T. En el desarrollo del plan, considerar, por ejemplo, el hardware, las redes, los sistemas operativos, el software, los datos de transacción, los archivos maestros, las copias de seguridad y archivos, las interfaces con otros sistemas (internos y externos), los posibles requisitos de cumplimiento, los procedimientos de negocio y la documentación del sistema.",
    "Para una calificación de 1 en esta área se recomienda: Confirmar que el plan de conversión de datos no requiere cambios en los valores de los datos, a menos que sea absolutamente necesario por razones de negocio. Documentar los cambios realizados en los valores de los datos y asegurar la aprobación del dueño de los datos del proceso de negocio. ",
    "Para una calificación de 2 en esta área se recomienda: Planificar la retención de los datos de copias de seguridad y archivados de acuerdo con las necesidades del negocio y los requisitos de cumplimiento o regulatorios.",
    "Para una calificación de 3 en esta área se recomienda: Coordinar y verificar los tiempos e integridad de la transición de la conversión rápida para que se produzca una transición continua y uniforme sin que se pierdan datos en la transición. Cuando sea necesario, si no existe otra alternativa, congelar las operaciones en vivo.",
    "Para una calificación de 4 en esta área se recomienda: Incorporar en el plan de conversión de datos métodos para recopilar, convertir y verificar los datos a convertir, e identificar y resolver cualquier error encontrado durante la conversión. Incluir la comparativa de los datos originales con los convertido para comprobar su integridad y que están completos.",
    "Para una calificación de 5 en esta área se recomienda: Considerar el riesgo de los problemas de conversión, planificación de la continuidad del negocio y procedimientos de fallback en el proceso de negocio, plan de migración de datos e infraestructura en los que haya gestión de riesgo, necesidades del negocio o requisitos de cumplimiento/regulatorios.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options19] = useState([
    "Para una calificación de 0 en esta área se recomienda: Desarrollar y documentar el plan de pruebas, que esté alineado con el programa, el plan de calidad del proyecto y los estándares organizativos relevantes. Comunicar y consultar con los dueños del proceso de negocio y las partes interesadas de TI apropiadas.",
    "Para una calificación de 1 en esta área se recomienda: Asegurar que el plan de pruebas refleja la evaluación del riesgo del proyecto y que se prueban todos los requisitos funcionales y técnicos. Con base en la evaluación del riesgo de fallo del sistema y los fallos en la implementación, incluir en el plan requisitos de rendimiento, estrés, usabilidad, piloto, pruebas de seguridad y privacidad.",
    "Para una calificación de 2 en esta área se recomienda: Asegurar que el plan de pruebas identifique los recursos necesarios para ejecutar las pruebas y evaluar los resultados. Algunos ejemplos de recursos pueden ser la construcción de entornos de pruebas y el uso del tiempo del personal para el grupo de pruebas, incluida la posible sustitución temporal del personal de pruebas en los entornos de producción o desarrollo. Asegurar que se consulta a las partes interesadas sobre las implicaciones del plan de pruebas.",
    "Para una calificación de 3 en esta área se recomienda: Asegurar que el plan de pruebas identifique las fases de prueba apropiadas de acuerdo con los requisitos y entorno operativos. Algunos ejemplos de estas fases de pruebas son la inclusión de pruebas unitarias, pruebas de sistema, pruebas de integración, pruebas de aceptación del usuario, pruebas de rendimiento, pruebas de estrés, pruebas de conversión de datos, pruebas de seguridad, pruebas de privacidad, pruebas de preparación operativa, y pruebas de copias de seguridad y recuperación.",
    "Para una calificación de 4 en esta área se recomienda: Determinar que el plan establece los procedimientos de remediación cuando no se cumplen los criterios de éxito. Por ejemplo, si hay un fallo significativo en una fase de pruebas, el plan debe proporcionar unas directrices sobre si proceder a la fase siguiente, detener las pruebas o postergar la implementación.",
    "Para una calificación de 5 en esta área se recomienda: Asegurar que el plan de pruebas establezca criterios claros para la medición del éxito de cada una de las fases de pruebas. Consultar con los dueños del proceso de negocio y las partes interesadas de TI para definir los criterios de éxito.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options20] = useState([
    "Para una calificación de 0 en esta área se recomienda: Establecer procedimientos para garantizar que las revisiones post-implementación identifiquen, evalúen e informen sobre en qué medida han ocurrido los eventos siguientes: los requisitos de la empresa se han cumplido; los beneficios esperados se han logrado; el sistema se considera utilizable; las expectativas de las partes interesadas se han cumplido; han ocurrido impactos inesperados en la empresa; los riesgos clave se han mitigado; y los procesos de gestión de cambios, instalación y acreditación se han realizado de forma eficaz y eficiente.",
    "Para una calificación de 1 en esta área se recomienda: Establecer procedimientos para garantizar que las revisiones post-implementación identifiquen, evalúen e informen sobre en qué medida han ocurrido los eventos siguientes: los requisitos de la empresa se han cumplido; los beneficios esperados se han logrado; el sistema se considera utilizable; las expectativas de las partes interesadas se han cumplido; han ocurrido impactos inesperados en la empresa; los riesgos clave se han mitigado; y los procesos de gestión de cambios, instalación y acreditación se han realizado de forma eficaz y eficiente.",
    "Para una calificación de 2 en esta área se recomienda: Consultar a los dueños del proceso de negocio y los directivos técnicos de TI sobre la elección de métricas para la medición del éxito y consecución de requisitos y beneficios.",
    "Para una calificación de 3 en esta área se recomienda: Considerar los requisitos para la revisión post-implementación que surjan de fuera del negocio y de TI (p. ej. auditoría interna, ERM, cumplimiento).",
    "Para una calificación de 4 en esta área se recomienda: Llevar a cabo la revisión post-implementación conforme al proceso de gestión de cambios de la organización. Involucrar a los dueños del proceso de negocio y las terceras partes, como corresponda.",
    "Para una calificación de 5 en esta área se recomienda: Acordar e implementar un plan de acción para solucionar los problemas identificados en la revisión post-implementación. Involucrar a los dueños del proceso de negocio y los directivos técnicos de TI en el desarrollo del plan de acción.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options21] = useState([
    "Para una calificación de 0 en esta área se recomienda: Mantener y hacer cumplir una estrategia estándar de gestión de proyectos, alineada con el entorno específico de la empresa y con las buenas prácticas, conforme a procesos definidos y al uso de la tecnología correcta. Asegurar que la estrategia cubra todo el ciclo de vida y las disciplinas a seguir, incluida la gestión del alcance, recursos, riesgo, coste, calidad, tiempo, comunicación, involucramiento de las partes interesadas, adquisiciones, control de cambio, integración y obtención de beneficios.",
    "Para una calificación de 1 en esta área se recomienda: Mantener y hacer cumplir una estrategia estándar de gestión de proyectos, alineada con el entorno específico de la empresa y con las buenas prácticas, conforme a procesos definidos y al uso de la tecnología correcta. Asegurar que la estrategia cubra todo el ciclo de vida y las disciplinas a seguir, incluida la gestión del alcance, recursos, riesgo, coste, calidad, tiempo, comunicación, involucramiento de las partes interesadas, adquisiciones, control de cambio, integración y obtención de beneficios.",
    "Para una calificación de 2 en esta área se recomienda: Proporcionar una capacitación en gestión de proyectos adecuada y considerar la certificación para los gestores de proyecto.",
    "Para una calificación de 3 en esta área se recomienda: Establecer una oficina de gestión de proyectos (PMO) que mantenga una estrategia estándar para la gestión de programas y proyectos en toda la organización. La PMO respalda todos los proyectos mediante la creación y mantenimiento de plantillas de documentación de proyectos requeridos, proveyendo formación y buenas prácticas para los gestores de proyecto, seguimiento de las métricas sobre el uso de buenas prácticas para la gestión de proyectos, etc. En algunos casos, la PMO podría también informar sobre el progreso del proyecto a la alta dirección y/o las partes interesadas, ayudar a priorizar proyectos y asegurar el respaldo de todos los proyectos con los objetivos globales de negocio de la empresa.",
    "Para una calificación de 4 en esta área se recomienda: Evaluar las lecciones aprendidas sobre el uso de la estrategia de gestión de proyectos. Actualizar las buenas prácticas, herramientas y plantillas, conforme sea necesario.",
    "Para una calificación de 5 en esta área se recomienda: Evaluar las lecciones aprendidas sobre el uso de la estrategia de gestión de proyectos. Actualizar las buenas prácticas, herramientas y plantillas, conforme sea necesario.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options22] = useState([
    "Para una calificación de 0 en esta área se recomienda: Establecer y usar una serie de criterios de proyecto incluidos, pero no limitados a, el alcance, beneficio esperado para el negocio, calendario, calidad, coste y nivel de riesgo.",
    "Para una calificación de 1 en esta área se recomienda: Informar a las partes interesadas identificadas clave acerca del progreso del proyecto, desviaciones con respecto a los criterios clave de rendimiento del proyecto establecidos (como, pero no limitado a, los beneficios empresariales esperados), y posibles efectos positivos y negativos en el proyecto.",
    "Para una calificación de 2 en esta área se recomienda: Documentar y enviar los cambios necesarios a las partes interesadas clave del proyecto para su aprobación antes de su adopción. Comunicar los criterios revisados a los gestores de proyecto para su uso en futuros informes de rendimiento. ",
    "Para una calificación de 3 en esta área se recomienda: Establecer y activar un sistema de control de cambio para el proyecto con la finalidad de que todos los cambios de la línea de referencia del proyecto (p. ej. alcance, beneficios de negocio esperados, calendario, calidad, coste, nivel de riesgo) se revisen, aprueben e incorporen en el plan integrado del proyectos en línea con el marco de gobierno de proyectos y programas.",
    "Para una calificación de 4 en esta área se recomienda: Medir el rendimiento de los proyectos con respecto a los criterios clave de rendimiento del proyecto. Analizar las desviaciones causadas con respecto a los criterios clave de rendimiento del proyecto y evaluar los efectos positivos y negativos en el proyecto.",
    "Para una calificación de 5 en esta área se recomienda: Supervisar los cambios en el proyecto y revisar los criterios clave de rendimiento del proyecto para determinar si siguen representando medidas de progreso válidas.",
    "No existe ninguna calificación para esta pregunta."
  ])
  const [options23] = useState([
    "Para una calificación de 0 en esta área se recomienda: Obtener la aceptación de las partes interesadas para los entregables del proyecto y transferir la propiedad.",
    "Para una calificación de 1 en esta área se recomienda: Definir y aplicar los pasos claves para el cierre del proyecto, incluidas las revisiones post-implementación que evalúan si un proyecto ha alcanzado los resultados deseados.",
    "Para una calificación de 2 en esta área se recomienda: Planificar y ejecutar revisiones post-implementación para determinar si los proyectos ofrecen los resultados esperados. Mejorar la gestión del proyecto y la metodología de procesos de desarrollo de sistemas",
    "Para una calificación de 3 en esta área se recomienda: Identificar, asignar, comunicar y hacer un seguimiento a cualquier actividad incompleta requerida para garantizar que el proyecto ofrezca los resultados requeridos en términos de capacidades y, que los resultados contribuyen como se esperaba a los beneficios del programa.",
    "Para una calificación de 4 en esta área se recomienda: De forma regular, y al finalizar el proyecto, recopilar las lecciones aprendidas de los participantes del proyecto. Revisarlas junto con las actividades clave que llevaron a obtener beneficios y valor.",
    "Para una calificación de 5 en esta área se recomienda:  Analizar los datos y realizar recomendaciones para mejorar el proyecto actual y el método de gestión de proyectos para proyectos futuros.",
    "No existe ninguna calificación para esta pregunta."
  ])


  const [answerslist3] = useState([options0, options1, options2, options3, options4, options5, options6, options7, options8, options9, options10, options11, options12, options13, options14, options15, options16, options17, options18, options19, options20, options21, options22, options23])

  React.useEffect(() => {
    if(localStorage.getItem("p3")==null){
      //console.log("here")
    }else{
      setAnswers(JSON.parse(localStorage.getItem("p3")))
    }
    
  }, [])

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader align="center">
              <h1>Retroalimentación BAI</h1>
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
                      {answerslist3[0][answers[0]]}
                    </TabPane>
                    <TabPane tabId={2}>
                      {answerslist3[1][answers[1]]}
                    </TabPane>
                    <TabPane tabId={3}>
                      {answerslist3[2][answers[2]]}
                    </TabPane>
                    <TabPane tabId={4}>
                      {answerslist3[3][answers[3]]}
                    </TabPane>
                    <TabPane tabId={5}>
                      {answerslist3[4][answers[4]]}
                    </TabPane>
                    <TabPane tabId={6}>
                      {answerslist3[5][answers[5]]}
                    </TabPane>
                    <TabPane tabId={7}>
                      {answerslist3[6][answers[6]]}
                    </TabPane>
                    <TabPane tabId={8}>
                      {answerslist3[7][answers[7]]}
                    </TabPane>
                    <TabPane tabId={9}>
                      {answerslist3[8][answers[8]]}
                    </TabPane>
                    <TabPane tabId={10}>
                      {answerslist3[9][answers[9]]}
                    </TabPane>
                    <TabPane tabId={11}>
                      {answerslist3[10][answers[10]]}
                    </TabPane>
                    <TabPane tabId={12}>
                      {answerslist3[11][answers[11]]}
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="4">
                  <ListGroup id="list-tab" role="tablist">
                    <ListGroupItem onClick={() => setActiveTab(13)} action active={activeTab === 13} >Feedback-Pregunta Trece</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(14)} action active={activeTab === 14} >Feedback-Pregunta Catorce</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(15)} action active={activeTab === 15} >Feedback-Pregunta Quince</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(16)} action active={activeTab === 16} >Feedback-Pregunta Dieciséis</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(17)} action active={activeTab === 17} >Feedback-Pregunta Diecisiete</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(18)} action active={activeTab === 18} >Feedback-Pregunta Dieciocho</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(19)} action active={activeTab === 19} >Feedback-Pregunta Diecinueve</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(20)} action active={activeTab === 20} >Feedback-Pregunta Veinte</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(21)} action active={activeTab === 21} >Feedback-Pregunta Veintiuno</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(22)} action active={activeTab === 22} >Feedback-Pregunta Veintidós</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(23)} action active={activeTab === 23} >Feedback-Pregunta Veintitrés</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(24)} action active={activeTab === 24} >Feedback-Pregunta Veinticuatro</ListGroupItem>
                  </ListGroup>
                </Col>
                <Col xs="12" md="8">
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId={13}>
                      {answerslist3[12][answers[12]]}
                    </TabPane>
                    <TabPane tabId={14}>
                      {answerslist3[13][answers[13]]}
                    </TabPane>
                    <TabPane tabId={15}>
                      {answerslist3[14][answers[14]]}
                    </TabPane>
                    <TabPane tabId={16}>
                      {answerslist3[15][answers[15]]}
                    </TabPane>
                    <TabPane tabId={17}>
                      {answerslist3[16][answers[16]]}
                    </TabPane>
                    <TabPane tabId={18}>
                      {answerslist3[17][answers[17]]}
                    </TabPane>
                    <TabPane tabId={19}>
                      {answerslist3[18][answers[18]]}
                    </TabPane>
                    <TabPane tabId={20}>
                      {answerslist3[19][answers[19]]}
                    </TabPane>
                    <TabPane tabId={21}>
                      {answerslist3[20][answers[20]]}
                    </TabPane>
                    <TabPane tabId={22}>
                      {answerslist3[21][answers[21]]}
                    </TabPane>
                    <TabPane tabId={23}>
                      {answerslist3[22][answers[22]]}
                    </TabPane>
                    <TabPane tabId={24}>
                      {answerslist3[23][answers[23]]}
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>

            </CardBody>
            <Row style={{ justifyContent: 'center' }}>
              <Pagination aria-label="Page navigation example">
                <Link to="/base/list2">
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
                <PaginationItem active>
                  <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D', borderColor: '#43425D' }} tag="button">3</PaginationLink></PaginationItem>
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
                <Link to="/base/list4">
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

export default List3;
