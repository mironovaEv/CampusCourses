import { connect } from 'react-redux';
import { useEffect } from 'react';
import { LoadProfileThunkCreator } from '../../../reducers/profile-reducer';
import Profile from './Profile';

function MiddleProfileComponent(props) {
  useEffect(() => {
    const token = localStorage.getItem('token');
    props.LoadProfileThunkCreator(token);
  }, []);
  return <Profile {...props} />;
}

function MapStateToProps(state) {
  return { profile: state.profile };
}
const ProfileContainer = connect(MapStateToProps, { LoadProfileThunkCreator })(MiddleProfileComponent);

export default ProfileContainer;
