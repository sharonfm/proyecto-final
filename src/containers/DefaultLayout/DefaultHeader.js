import React, { Component } from 'react';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import PropTypes from 'prop-types';

import {  AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};
/**
 * Esto contiene el Navbar y lo que se depliega en la foto
 */
class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

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
              <img src={'../../assets/img/avatars/usuario.png'} Alt='Usuario' className="img-avatar"/>
            </DropdownToggle>
            <DropdownMenu right>             
              <DropdownItem header tag="div" className="text-center" style= {{backgroundColor:'#43425D'}}><strong style={{color:'#F2F2F2'}}>Ajustes</strong></DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> <medium style={{color:'#43425D'}}> Cerrar Sesión</medium></DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
