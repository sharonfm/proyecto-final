import React, { Component } from 'react';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import PropTypes from 'prop-types';
import { auth } from "../../services/firebase";
import {  AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};
/**
 * Esto contiene el Navbar y lo que se depliega en la foto
 */
const DefaultHeader =(props) => {

  // eslint-disable-next-line
  const { children, ...attributes } = props;

  return (
    <React.Fragment>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      <AppNavbarBrand
        full={{ src: logo, width: 70, height: 50, alt: 'Project Logo' }}
        minimized={{ src: logo, width: 50, height: 50, alt: 'Project Logo' }}
      />
      <AppSidebarToggler className="d-md-down-none" display="lg" />

      <Nav className="ml-auto" navbar>
        <UncontrolledDropdown nav direction="down">
          <DropdownToggle nav>
            <img style={{width:'54px', height:'54px'}} src={'../../assets/img/avatars/usuario.png'} Alt='Usuario' className="img-avatar" />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header tag="div" className="text-center" style={{ backgroundColor: '#43425D' }}><strong style={{ color: '#F2F2F2' }}>Ajustes</strong></DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={()=>{auth.signOut()}} > <i className="fa fa-lock"></i> <medium style={{ color: '#43425D' }}> Cerrar Sesión</medium></DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </React.Fragment>
  );

}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
