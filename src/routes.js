import React from 'react';
const Info = React.lazy(() => import('./views/Base/Información/Info'));
const Forms = React.lazy(() => import('./views/Base/Formulario/Formulario.js'));
const Forms2 = React.lazy(() => import('./views/Base/Formulario/Formulario2.js'));
const Forms3 = React.lazy(() => import('./views/Base/Formulario/Formulario3.js'));
const Forms4 = React.lazy(() => import('./views/Base/Formulario/Formulario4.js'));
const Forms5 = React.lazy(() => import('./views/Base/Formulario/Formulario5.js'));
const Estadisticas = React.lazy(() => import('./views/Estadisticas/Estadisticas'));
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
  { path: '/views/estadisticas', name: 'Estadísticas', component: Estadisticas },
  { path: '/base/form', name: 'Formulario EDM', component: Forms },
  { path: '/base/form2', name: 'Formulario APO', component: Forms2 },
  { path: '/base/form3', name: 'Formulario BAI', component: Forms3 },
  { path: '/base/form4', name: 'Formulario DSS', component: Forms4 },
  { path: '/base/form5', name: 'Formulario MEA', component: Forms5 },
  { path: '/base/list1', name: 'Retroalimentación EDM', component: List1},
  { path: '/base/list2', name: 'Retroalimentación APO', component: List2},
  { path: '/base/list3', name: 'Retroalimentación BAI', component: List3},
  { path: '/base/list4', name: 'Retroalimentación DSS', component: List4},
  { path: '/base/list5', name: 'Retroalimentación MEA', component: List5},
  { path: '/base/info', name: 'Información', component: Info },

];

export default routes;
