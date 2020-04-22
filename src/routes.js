import React from 'react';
const Carousels = React.lazy(() => import('./views/Base/Información/Info'));
//const fire = React.lazy(() => import('./config/Base/firebase.js'));
const Forms = React.lazy(() => import('./views/Base/Formulario/Formulario.js'));
const Forms2 = React.lazy(() => import('./views/Base/Formulario/Formulario2.js'));
const Forms3 = React.lazy(() => import('./views/Base/Formulario/Formulario3.js'));
const Forms4 = React.lazy(() => import('./views/Base/Formulario/Formulario4.js'));
const Forms5 = React.lazy(() => import('./views/Base/Formulario/Formulario5.js'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Charts = React.lazy(() => import('./views/Base/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard/Estadisticas'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const List1 = React.lazy(() => import('./views/Base/ListGroups/List1'));
const List2 = React.lazy(() => import('./views/Base/ListGroups/List2'));
const List3 = React.lazy(() => import('./views/Base/ListGroups/List3'));
const List4 = React.lazy(() => import('./views/Base/ListGroups/List4'));
const List5 = React.lazy(() => import('./views/Base/ListGroups/List5'));
/* const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User')); */


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Login'},
  { path: '/dashboard', name: 'Estadísticas', component: Dashboard },
  { path: '/base/form', name: 'Formulario EDM', component: Forms },
  //{ path: '/config/fire', name: 'Formulario EDM', component: fire },
  { path: '/base/form2', name: 'Formulario APO', component: Forms2 },
  { path: '/base/form3', name: 'Formulario BAI', component: Forms3 },
  { path: '/base/form4', name: 'Formulario DSS', component: Forms4 },
  { path: '/base/form5', name: 'Formulario MEA', component: Forms5 },
  { path: '/base/list1', name: 'Retroalimentación EDM', component: List1},
  { path: '/base/list2', name: 'Retroalimentación APO', component: List2},
  { path: '/base/list3', name: 'Retroalimentación BAI', component: List3},
  { path: '/base/list4', name: 'Retroalimentación DSS', component: List4},
  { path: '/base/list5', name: 'Retroalimentación MEA', component: List5},
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/info', name: 'Información', component: Carousels },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/charts', name: 'Charts', component: Charts },

];

export default routes;
