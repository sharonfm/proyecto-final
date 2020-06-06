import React, { Component, useState } from 'react';
import { Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Row, TabContent, TabPane, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const List2 = () => {

  const [activeTab, setActiveTab] = useState(1)
  const [answers, setAnswers] = useState([])
  /*FEEDBACK APO */ 
  const [options0] = useState([
    "Para una calificación de 0 en esta área se recomienda: Adquirir el conocimiento de la visión, dirección y estrategia empresarial, así como el contexto empresarial actual y sus desafíos.",
    "Para una calificación de 1 en esta área se recomienda: Considerar el entorno interno de la empresa, incluyendo la cultura y filosofía de gestión, la tolerancia al riesgo, la política de seguridad y privacidad, los valores éticos, el código de conducta, la rendición de cuentas y los requisitos para la integridad de la gestión.",
    "Para una calificación de 2 en esta área se recomienda: Considerar el entorno interno de la empresa, incluyendo la cultura y filosofía de gestión, la tolerancia al riesgo, la política de seguridad y privacidad, los valores éticos, el código de conducta, la rendición de cuentas y los requisitos para la integridad de la gestión.",
    "Para una calificación de 3 en esta área se recomienda: Aplicar la cascada de metas y los factores de diseño de COBIT a la estrategia y el contexto empresarial para decidir cuáles son las prioridades para el sistema de gestión y, por ende, la implementación de los objetivos de gestión prioritarios.",
    "Para una calificación de 4 en esta área se recomienda: Validar las prioridades seleccionadas para la implementación de objetivos de gestión con buenas prácticas o requisitos propios de la industria (p. ej.: regulaciones específicas de la industria) y con estructuras de gobierno adecuadas.",
    "Para una calificación de 5 en esta área se recomienda: Validar las prioridades seleccionadas para la implementación de objetivos de gestión con buenas prácticas o requisitos propios de la industria (p. ej.: regulaciones específicas de la industria) y con estructuras de gobierno adecuadas."
  ])
  const [options1] = useState([
    "Para una calificación de 0 en esta área se recomienda: Involucrar a las partes interesadas críticas con la toma de decisiones (quien rinde cuentas, responsable, consultado o informado).",
    "Para una calificación de 1 en esta área se recomienda: Definir el alcance de las funciones internas y externas, los roles internos y externos, y las capacidades y derechos de decisión requeridas para cubrir todas las prácticas, incluidas aquellas ejecutadas por terceros.",
    "Para una calificación de 2 en esta área se recomienda: Establecer un comité de dirección de I&T (o equivalente) compuesto por directores ejecutivos, de negocio y de I&T para hacer un seguimiento del estado de los proyectos, resolver los conflictos de recursos y monitorizar los niveles y mejoras del servicio.",
    "Para una calificación de 3 en esta área se recomienda: Alinear la organización relacionada con I&T con los modelos organizativos de arquitectura de la empresa.",
    "Para una calificación de 4 en esta área se recomienda: Proporcionar las directrices para cada estructura de gestión (incluidas el mandato, objetivos, asistentes a reuniones, plazos, seguimiento, supervisión y control), así como los insumos requeridos y los resultados esperados de las reuniones.",
    "Para una calificación de 5 en esta área se recomienda: Comprobar de forma regular la adecuación y eficacia de las estructuras organizativas."
  ])
  const [options2] = useState([
    "Para una calificación de 0 en esta área se recomienda: Crear una serie de políticas para mejorar las expectativas de control de IT en temas clave relevantes, como la calidad, la seguridad, la privacidad, los controles internos, el uso de activos de I&T, la ética y los derechos de propiedad intelectual.",
    "Para una calificación de 1 en esta área se recomienda: Crear una serie de políticas para mejorar las expectativas de control de IT en temas clave relevantes, como la calidad, la seguridad, la privacidad, los controles internos, el uso de activos de I&T, la ética y los derechos de propiedad intelectual.",
    "Para una calificación de 2 en esta área se recomienda: El despliegue y refuerzo de las políticas de I&T de forma uniforme para todo el personal relevante para que se construyan dentro de las operaciones empresariales y acaben siendo parte integrante de estas.",
    "Para una calificación de 3 en esta área se recomienda: El despliegue y refuerzo de las políticas de I&T de forma uniforme para todo el personal relevante para que se construyan dentro de las operaciones empresariales y acaben siendo parte integrante de estas.",
    "Para una calificación de 4 en esta área se recomienda: Evaluar y actualizar las políticas, como mínimo anualmente, para encajar en entornos empresariales u operativos cambiantes.",
    "Para una calificación de 5 en esta área se recomienda: Evaluar y actualizar las políticas, como mínimo anualmente, para encajar en entornos empresariales u operativos cambiantes."
  ])
  const [options3] = useState([
    "Para una calificación de 0 en esta área se recomienda: Identificar cualquier factor empresarial que limitaría la secuencia de implementación. Incluir una revisión empresarial y de línea estratégica de negocio de la empresa y de los planes de negocio, . Considerar la madurez de la arquitectura empresarial actual.",
    "Para una calificación de 1 en esta área se recomienda: Evaluar los requisitos, brechas, soluciones y otros factores para identificar un conjunto mínimo de requisitos funcionales cuya integración en paquetes de trabajo llevarían a una implementación más eficaz y eficiente de la arquitectura objetivo.",
    "Para una calificación de 2 en esta área se recomienda: Perfeccionar las dependencias iniciales e identificar las restricciones de los planes de implementación y migración. Compilar un informe de análisis de dependencias.",
    "Para una calificación de 3 en esta área se recomienda: Formular una estrategia de alto nivel para la implementación y la migración. Implementar la arquitectura objetivo (e implementar cualquier arquitectura de transición) conforme a la estrategia, objetivos y plazos de la empresa en su conjunto.",
    "Para una calificación de 4 en esta área se recomienda: Identificar y agrupar paquetes de trabajo importantes en un conjunto coherente de programas y proyectos, relacionados con la dirección y el enfoque de la implementación estratégica empresarial.",
    "Para una calificación de 5 en esta área se recomienda: Desarrolla arquitecturas de transición en las que el alcance del cambio requerido por la arquitectura necesita un enfoque incremental."
  ])
  const [options4] = useState([
    "Para una calificación de 0 en esta área se recomienda: Establecer los elementos requeridos para el plan de implementación y migración como parte de la planificación de programas y proyectos. Asegurar que el plan está alineado con los requisitos de los responsables de toma de decisiones relevantes.",
    "Para una calificación de 1 en esta área se recomienda: Confirmar los incrementos y las fases de la arquitectura de transición. Actualizar el documento de definición de la arquitectura.",
    "Para una calificación de 2 en esta área se recomienda: Confirmar los incrementos y las fases de la arquitectura de transición. Actualizar el documento de definición de la arquitectura.",
    "Para una calificación de 3 en esta área se recomienda: Definir y completar la implementación de la arquitectura y el plan de migración, incluidos los requisitos de gobierno relevantes. Integrar el plan, actividades y dependencias en el programa y la planificación del proyecto.",
    "Para una calificación de 4 en esta área se recomienda: Comunicar la hoja de ruta de la arquitectura definida a las partes interesadas relevantes. Informar a las partes interesadas acerca de la definición de la arquitectura objetivo, las directrices y principios de arquitectura, el portafolio de servicios, etc.",
    "Para una calificación de 5 en esta área se recomienda: Comunicar la hoja de ruta de la arquitectura definida a las partes interesadas relevantes. Informar a las partes interesadas acerca de la definición de la arquitectura objetivo, las directrices y principios de arquitectura, el portafolio de servicios, etc."
  ])
  const [options5] = useState([
    "Para una calificación de 0 en esta área se recomienda: Confirmar el alcance y las prioridades y proporcionar directrices para desarrollar e implementar soluciones (p. ej., usando la arquitectura orientada a los servicios).",
    "Para una calificación de 1 en esta área se recomienda: Gestionar los requisitos de la arquitectura empresarial y respaldar el negocio y TI con consejos e información experta sobre principios, modelos y bloques de construcción. Garantizar que las nuevas implementaciones (como cambios a la arquitectura actual) están alineadas con los principios y requisitos de la arquitectura empresarial.",
    "Para una calificación de 2 en esta área se recomienda: Gestionar el portafolio de servicios de la arquitectura empresarial y garantizar el alineamiento con los objetivos estratégicos y el desarrollo de soluciones.",
    "Para una calificación de 3 en esta área se recomienda: Gestionar el portafolio de servicios de la arquitectura empresarial y garantizar el alineamiento con los objetivos estratégicos y el desarrollo de soluciones.",
    "Para una calificación de 4 en esta área se recomienda: Identificar las prioridades de la arquitectura empresarial. Alinear las prioridades con los factores que proporcionan valor. Definir y recopilarmétricas de valor y medir y comunicar el valor de la arquitectura empresarial.",
    "Para una calificación de 5 en esta área se recomienda: Establecer un foro de tecnología para proporcionar directrices de arquitectura, asesorar proyectos y guiar la selección de tecnología. Medir el cumplimiento con los estándares y directrices, incluido el cumplimiento con los requisitos externos y con la relevancia empresarial interna."
  ])
  const [options6] = useState([
    "Para una calificación de 0 en esta área se recomienda: Mantener un conocimiento de los motivadores empresariales y de industria, la estrategia empresarial y de I&T y las operaciones empresariales y retos actuales. Aplicar el entendimiento para identificar posibles tecnologías de valor agregado e innovar en I&T",
    "Para una calificación de 1 en esta área se recomienda: Mantener un conocimiento de los motivadores empresariales y de industria, la estrategia empresarial y de I&T y las operaciones empresariales y retos actuales. Aplicar el entendimiento para identificar posibles tecnologías de valor agregado e innovar en I&T",
    "Para una calificación de 2 en esta área se recomienda: Conducir reuniones regulares con unidades de negocio, divisiones y/u otras partes interesadas para entender los problemas empresariales actuales, los cuellos de botella de los procesos y otras limitaciones, cuando las tecnologías emergentes o la innovación de I&T pueden crear oportunidades.",
    "Para una calificación de 3 en esta área se recomienda: Conducir reuniones regulares con unidades de negocio, divisiones y/u otras partes interesadas para entender los problemas empresariales actuales, los cuellos de botella de los procesos y otras limitaciones, cuando las tecnologías emergentes o la innovación de I&T pueden crear oportunidades.",
    "Para una calificación de 4 en esta área se recomienda: Entender los parámetros de inversión empresariales para la innovación y nuevas tecnologías con el fin de desarrollar tecnologías adecuadas.",
    "Para una calificación de 5 en esta área se recomienda: Entender los parámetros de inversión empresariales para la innovación y nuevas tecnologías con el fin de desarrollar tecnologías adecuadas."
  ])
  const [options7] = useState([
    "Para una calificación de 0 en esta área se recomienda: Evaluar las tecnologías identificadas, considerando aspectos como el tiempo para alcanzar la madurez, el riesgo inherente (incluidas las posibles implicaciones legales), su encaje con la arquitectura empresarial y el potencial de valor, en línea con la estrategia empresarial y de I&T.",
    "Para una calificación de 1 en esta área se recomienda: Identificar asuntos que pudieran ser resueltos o validado a través de una iniciativa de prueba de concepto.",
    "Para una calificación de 2 en esta área se recomienda: Identificar asuntos que pudieran ser resueltos o validado a través de una iniciativa de prueba de concepto.",
    "Para una calificación de 3 en esta área se recomienda: Alcance de la iniciativa de prueba de concepto, incluidos los resultados deseados, el presupuesto requerido, los plazos y las responsabilidades.",
    "Para una calificación de 4 en esta área se recomienda: Conducir iniciativas de prueba de concepto para poner a prueba tecnologías emergentes u otras ideas de innovación. Identificar problemas y determinar si la implementación o despliegue debería considerarse basada en la factibilidad y el ROI potencial.",
    "Para una calificación de 5 en esta área se recomienda: Obtener la aprobación para la iniciativa de prueba de concepto."
  ])
  const [options8] = useState([
    "Para una calificación de 0 en esta área se recomienda: Garantizar que las iniciativas de innovación estén alineadas con la estrategia empresarial y de I&T. Monitorizar continuamente el alineamiento. Ajustar el plan de innovación, si fuera necesario.",
    "Para una calificación de 1 en esta área se recomienda: Garantizar que las iniciativas de innovación estén alineadas con la estrategia empresarial y de I&T. Monitorizar continuamente el alineamiento. Ajustar el plan de innovación, si fuera necesario.",
    "Para una calificación de 2 en esta área se recomienda: Evaluar nueva tecnología o innovaciones de I&T implementadas como parte de la estrategia de I&T y el desarrollo de la arquitectura empresarial. Evaluar el nivel de adopción durante la gestión de iniciativas del programa.",
    "Para una calificación de 3 en esta área se recomienda: Evaluar nueva tecnología o innovaciones de I&T implementadas como parte de la estrategia de I&T y el desarrollo de la arquitectura empresarial. Evaluar el nivel de adopción durante la gestión de iniciativas del programa.",
    "Para una calificación de 4 en esta área se recomienda: Identificar y evaluar el valor potencial de la innovación.",
    "Para una calificación de 5 en esta área se recomienda: Identificar y evaluar el valor potencial de la innovación."
  ])
  const [options9] = useState([
    "Para una calificación de 0 en esta área se recomienda: Definir procesos, entradas, salidas y responsabilidades para la gestión y contabilidad financiera de I&T en línea con el presupuesto y las políticas y estrategia de contabilidad de costes de la empresa. Definir cómo analizar e informar (a quién y cómo) sobre el proceso de control presupuestario de I&T.",
    "Para una calificación de 1 en esta área se recomienda: Definir un esquema de clasificación para identificar todos los elementos de costes relacionados con la I&T (gastos de capital [capex] vs. gastos operativos [opex], hardware, software, personas, etc.). Identificar cómo se captan.",
    "Para una calificación de 2 en esta área se recomienda: Definir un esquema de clasificación para identificar todos los elementos de costes relacionados con la I&T (gastos de capital [capex] vs. gastos operativos [opex], hardware, software, personas, etc.). Identificar cómo se captan.",
    "Para una calificación de 3 en esta área se recomienda: Utilidad de la información financiera a fin de proporcionar información en casos de negocio para nuevas inversiones en activos y servicios deI&T.",
    "Para una calificación de 4 en esta área se recomienda: Establecer y mantener prácticas para la planificación financiera y la optimización de costes operativos recurrentes a fin de obtener el máximo valor para la empresa con el mínimo gasto.",
    "Para una calificación de 5 en esta área se recomienda: Garantizar que los costes se mantengan en los portafolios de activos y servicios de I&T."
  ])
  const [options10] = useState([
    "Para una calificación de 0 en esta área se recomienda: Decidir un modelo de asignación de costes que permita una asignación justa, transparente, repetible y comparable de costes relacionados con I&T a los usuarios. Un ejemplo de modelo de asignación básico es la asignación uniforme de costes compartidos relacionados con I&T.",
    "Para una calificación de 1 en esta área se recomienda: Inspeccionar los catálogos de definiciones de servicios para identificar aquellos sujetos a devolución a los usuarios y aquellos que son servicios compartidos.",
    "Para una calificación de 2 en esta área se recomienda: Diseñar el modelo de costes de manera que sea lo bastante transparente como para permitir a los usuarios identificar el uso y cargo actual, con categorías y factores de costes que tengan sentido para el usuario (como, coste por llamada a Help Desk, costo por licencia de software) y para permitir una mejor , predictibilidad de costes de I&T y utilización eficaz y eficiente de los recursos de I&T.",
    "Para una calificación de 3 en esta área se recomienda: Explicar los principios y el resultado del modelo de costes a las partes interesadas clave. Obtener su retroalimentación para perfeccionarlo con vistas a lograr un modelo transparente y exhaustivo.",
    "Para una calificación de 4 en esta área se recomienda: Obtener la aprobación de las partes interesadas clave para comunicar el modelo de costes de I&T a la dirección de los departamentos de usuario.",
    "Para una calificación de 5 en esta área se recomienda: Comunicar cambios importantes en los principios del modelo de coste/repercusión a las partes interesadas y directivos clave de los departamentos de usuario."
  ])
  const [options11] = useState([
    "Para una calificación de 0 en esta área se recomienda: Establecer escalas de tiempo para la ejecución del proceso de gestión de costes en línea con los requisitos y el plazo del presupuesto y la contabilidad.",
    "Para una calificación de 1 en esta área se recomienda: Definir un método para recopilar los datos relevantes para identificar desviaciones del presupuesto frente a los gastos reales, el ROI de la inversión, las tendencias de los costes de servicios, etc.",
    "Para una calificación de 2 en esta área se recomienda: Instruir a aquellos responsables de la gestión de costes a captar, recoger y consolidar los datos y presentar e informar de los datos a los responsables de presupuesto correspondientes. Los analistas y responsables del presupuesto analizan conjuntamente las desviaciones y comparan el rendimiento con benchmarks internos y de la industria. Estos deberían establecer y mantener el método de asignación de superávits. El resultado del análisis proporciona una explicación de las desviaciones significativas y las acciones correctivas sugeridas.",
    "Para una calificación de 3 en esta área se recomienda: Garantizar que los niveles directivos adecuados revisen los resultados del análisis y aprueben las acciones correctivas sugeridas.",
    "Para una calificación de 4 en esta área se recomienda: Garantizar que se identifiquen los cambios en estructuras de costes y necesidades empresariales, y que se revisen los presupuestos y previsiones, conforme sea necesario.",
    "Para una calificación de 5 en esta área se recomienda: En intervalos regulares, y sobre todo cuando hay recortes de presupuesto debido a limitaciones financieras, identificar la forma de optimizar los costes e introducir eficiencias sin poner en peligro los servicios."
  ])
  const [options12] = useState([
    "Para una calificación de 0 en esta área se recomienda: Asignar un gestor de relaciones como un único punto de contacto para cada unidad de negocio significativa. Asegurar que se identifique una única contraparte en la organización de la empresa y que la contraparte entienda el negocio, conozca suficientemente la tecnología y tenga el nivel de autoridad adecuado.",
    "Para una calificación de 1 en esta área se recomienda: Gestionar la relación de una manera formal y transparente que asegure un enfoque en el logro de una meta común y compartida de resultados empresariales exitosos, en apoyo de las metas estratégicas y dentro de las limitaciones de los presupuestos y la tolerancia al riesgo.",
    "Para una calificación de 2 en esta área se recomienda: Definir y comunicar las reclamaciones y el procedimiento de escalamiento para resolver cualquier problema de relaciones.",
    "Para una calificación de 3 en esta área se recomienda: Asegurar que las partes interesadas responsables relevantes. acuerden y aprueben las decisiones claves",
    "Para una calificación de 4 en esta área se recomienda: Asegurar que las partes interesadas responsables relevantes. acuerden y aprueben las decisiones claves",
    "Para una calificación de 5 en esta área se recomienda: Planificar interacciones y calendarios específicos basados en objetivos acordados y un lenguaje común (reunión de revisión del servicio y el rendimiento, revisión de nuevas estrategias o planes, etc.)."
  ])
  const [options13] = useState([
    "Para una calificación de 0 en esta área se recomienda: Coordinar y comunicar actividades operativas, roles y responsabilidades, incluida la definición de los tipos de peticiones, escalamiento jerárquico, interrupciones mayores (planificadas y no planificadas) y contenido y frecuencia de los informes de servicio.",
    "Para una calificación de 1 en esta área se recomienda: Coordinar y comunicar los cambios y actividades de transición como planes de cambios o proyectos, calendarios, políticas de liberación,errores conocidos en la liberación y capacitación de sensibilización.",
    "Para una calificación de 2 en esta área se recomienda: Hacerse responsable de la respuesta al negocio en el caso de eventos importantes que podrían influir en la relación con el negocio. Proporcionar un soporte directo, si fuera necesario.",
    "Para una calificación de 3 en esta área se recomienda: Hacerse responsable de la respuesta al negocio en el caso de eventos importantes que podrían influir en la relación con el negocio. Proporcionar un soporte directo, si fuera necesario.",
    "Para una calificación de 4 en esta área se recomienda: Mantener un plan completo de comunicación que defina el contenido, frecuencia y destinatarios de la información de la prestación del servicio, incluido el estado del valor ofrecido y cualquier riesgo identificado.",
    "Para una calificación de 5 en esta área se recomienda: Mantener un plan completo de comunicación que defina el contenido, frecuencia y destinatarios de la información de la prestación del servicio, incluido el estado del valor ofrecido y cualquier riesgo identificado."
  ])
  const [options14] = useState([
    "Para una calificación de 0 en esta área se recomienda: Realizar análisis de satisfacción para clientes y proveedores. Asegurar que se resuelvan los problemas; informar de los resultados y el estado.",
    "Para una calificación de 1 en esta área se recomienda: Realizar análisis de satisfacción para clientes y proveedores. Asegurar que se resuelvan los problemas; informar de los resultados y el estado.",
    "Para una calificación de 2 en esta área se recomienda: Trabajar con la dirección del servicio y los dueños del proceso para asegurar que los servicios y los procesos de gestión de servicios habilitados por I&T se mejoren de forma continua y que las causas raíz de todos los problemas se identifiquen y resuelvan.",
    "Para una calificación de 3 en esta área se recomienda: Trabajar con la dirección del servicio y los dueños del proceso para asegurar que los servicios y los procesos de gestión de servicios habilitados por I&T se mejoren de forma continua y que las causas raíz de todos los problemas se identifiquen y resuelvan.",
    "Para una calificación de 4 en esta área se recomienda: Trabajar juntos para identificar, comunicar e implementar iniciativas de mejora.",
    "Para una calificación de 5 en esta área se recomienda: Trabajar juntos para identificar, comunicar e implementar iniciativas de mejora."
  ])
  const [options15] = useState([
    "Para una calificación de 0 en esta área se recomienda: Evaluar los servicios y niveles de servicios de I&T actuales para identificar las brechas entre los servicios actuales y las actividades empresariales que apoyan. Identificar áreas de mejora de los servicios existentes y opciones de nivel de servicio.",
    "Para una calificación de 1 en esta área se recomienda: Analizar, estudiar y estimar la demanda futura y confirmar la capacidad de servicios actuales habilitados por I&T.",
    "Para una calificación de 2 en esta área se recomienda: Analizar actividades del proceso empresarial para identificar la necesidad de servicios de I&T nuevos o rediseñados.",
    "Para una calificación de 3 en esta área se recomienda: Comparar los requisitos identificados con los componentes de servicio vigentes del portafolio. Si fuera posible, incluir los componentes de servicio vigentes (servicios de I&T, opciones de nivel de servicio y paquetes de servicio) en nuevos paquetes de servicio para satisfacer los requisitos del negocio identificados.",
    "Para una calificación de 4 en esta área se recomienda: Cuando sea posible, hacer corresponder las demandas con los paquetes de servicio y crear servicios estandarizados para lograr eficiencias globales.",
    "Para una calificación de 5 en esta área se recomienda: Revisar regularmente el portafolio de servicios de I&T con la gestión del portafolio y la gestión de relaciones con el negocio para identificar servicios obsoletos. Acordar su retirada y proponer cambios."
  ])
  const [options16] = useState([
    "Para una calificación de 0 en esta área se recomienda: Establecer y mantener medidas para monitorizar y recopilar datos de nivel de servicio.",
    "Para una calificación de 1 en esta área se recomienda: Acordar planes de acción y remediaciones para cualquier problema de rendimiento o tendencias negativas.",
    "Para una calificación de 2 en esta área se recomienda: Evaluar el rendimiento y proporcionar reportes sobre el rendimiento de los acuerdos de servicio regular y formalmente, incluidas las desviaciones de los valores acordados. Distribuir este informe a la gestión de relaciones con el negocio.",
    "Para una calificación de 3 en esta área se recomienda: Evaluar el rendimiento y proporcionar reportes sobre el rendimiento de los acuerdos de servicio regular y formalmente, incluidas las desviaciones de los valores acordados. Distribuir este informe a la gestión de relaciones con el negocio.",
    "Para una calificación de 4 en esta área se recomienda: Incorporar prácticas de gestión de calidad en la monitorización de servicios.",
    "Para una calificación de 5 en esta área se recomienda: Realizar revisiones regulares para pronosticar e identificar las tendencias del rendimiento de nivel de servicio."
  ])
  const [options17] = useState([
    "Para una calificación de 0 en esta área se recomienda: Revisar de forma regular los acuerdos de servicio conforme a los términos acordados para garantizar que sean efectivos y estén actualizados.",
    "Para una calificación de 1 en esta área se recomienda: Revisar de forma regular los acuerdos de servicio conforme a los términos acordados para garantizar que sean efectivos y estén actualizados.",
    "Para una calificación de 2 en esta área se recomienda: Tener en cuenta cambios en requisitos, servicios habilitados por I&T, paquetes de servicio y opciones de nivel de servicio.",
    "Para una calificación de 3 en esta área se recomienda: Tener en cuenta cambios en requisitos, servicios habilitados por I&T, paquetes de servicio y opciones de nivel de servicio.",
    "Para una calificación de 4 en esta área se recomienda: Cuando sea necesario, revisar el acuerdo de servicio vigentes con el proveedor de servicios. Acordar y actualizar los acuerdos operativos internos.",
    "Para una calificación de 5 en esta área se recomienda: Cuando sea necesario, revisar el acuerdo de servicio vigentes con el proveedor de servicios. Acordar y actualizar los acuerdos operativos internos."
  ])
  const [options18] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options19] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options20] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options21] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options22] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options23] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options24] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options25] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options26] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
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
