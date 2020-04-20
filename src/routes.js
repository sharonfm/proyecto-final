import React from 'react';
const Carousels = React.lazy(() => import('./views/Base/Información/Info'));
const Forms = React.lazy(() => import('./views/Base/Formulario/Formulario.js'));
const Forms2 = React.lazy(() => import('./views/Base/Formulario/Formulario2.js'));
const Forms3 = React.lazy(() => import('./views/Base/Formulario/Formulario3.js'));
const Forms4 = React.lazy(() => import('./views/Base/Formulario/Formulario4.js'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Base/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const List1 = React.lazy(() => import('./views/Base/ListGroups/List1'));
const List2 = React.lazy(() => import('./views/Base/ListGroups/List2'));
const List3 = React.lazy(() => import('./views/Base/ListGroups/List3'));
/* const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User')); */


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Inicio'},
  { path: '/dashboard', name: 'Estadísticas', component: Dashboard },
  { path: '/base/form', name: 'Formulario', component: Forms },
  { path: '/base/form2', name: 'Formulario2', component: Forms2 },
  { path: '/base/form3', name: 'Formulario3', component: Forms3 },
  { path: '/base/form4', name: 'Formulario4', component: Forms4 },
  { path: '/base/list1', name: 'List1', component: List1},
  { path: '/base/list2', name: 'List2', component: List2},
  { path: '/base/list3', name: 'List3', component: List3},
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/info', name: 'Información', component: Carousels },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/charts', name: 'Charts', component: Charts },

];

export default routes;
