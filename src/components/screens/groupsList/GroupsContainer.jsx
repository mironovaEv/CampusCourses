import React from 'react';
import { connect } from 'react-redux';

import { LoadGroupsThunkCreator } from '../../../reducers/groups-reducer';
import Groups from './Groups';

class MiddleGroupsComponent extends React.Component {
  componentDidMount() {
    this.props.LoadGroupsThunkCreator();
  }

  render() {
    return <Groups {...this.props} />;
  }
}

function MapStateToProps(state) {
  return { groups: state.groups.groups };
}
const GroupsContainer = connect(MapStateToProps, { LoadGroupsThunkCreator })(MiddleGroupsComponent);

export default GroupsContainer;
