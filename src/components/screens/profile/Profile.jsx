import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import ProfileForm from './profileForm/ProfileForm';

const Profile = (props) => (
  <div>
    <Container>
      <h1 className="pt-3">Профиль</h1>
      <ProfileForm fullName={props.profile.fullName} email={props.profile.email} birthDate={props.profile.birthDate} />
    </Container>
  </div>
);

export default Profile;
