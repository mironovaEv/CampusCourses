import { connect } from 'react-redux';
import { useEffect } from 'react';
import { LoadInfoThunkCreator } from '../../reducers/account-reducer';

import NavBar from './Navbar';

function MiddleNavbarComponent(props) {
  useEffect(() => {
    props.LoadInfoThunkCreator();
  }, []);
  return <NavBar {...props} />;
}

function MapStateToProps(state) {
  return { profile: state.account };
}
const NavbarContainer = connect(MapStateToProps, { LoadInfoThunkCreator })(MiddleNavbarComponent);

export default NavbarContainer;
