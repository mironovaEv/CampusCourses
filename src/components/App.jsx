/* eslint-disable react/no-unstable-nested-components */
import { Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import PrivateRoute from '../route/privatRoute';
import AuthRoute from '../route/authRoute';

const NavbarContainer = lazy(() => import('./navbar/NavbarContainer'));
const GroupsContainer = lazy(() => import('./screens/groupsList/GroupsContainer'));
const CoursesListContainer = lazy(() => import('./screens/coursesList/CoursesListContainer'));
const MyCoursesListContainer = lazy(() => import('./screens/coursesList/MyCoursesListContainer'));
const TeachingCoursesListContainer = lazy(() => import('./screens/coursesList/TeachingCoursesListContainer'));
const CourseDetailsContainer = lazy(() => import('./screens/courseDetails/courseDetailsContainer'));
const Home = lazy(() => import('./screens/home/Home'));
const Registration = lazy(() => import('./screens/registration/Registration'));
const Authorization = lazy(() => import('./screens/authorization/Authorization'));
const ProfileContainer = lazy(() => import('./screens/profile/ProfileContainer'));

const App = () => (
  <>
    <NavbarContainer />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/registration" element={<AuthRoute />}>
          <Route exact path="/registration" element={<Registration />} />
        </Route>

        <Route exact path="/login" element={<AuthRoute />}>
          <Route exact path="/login" element={<Authorization />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfileContainer />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/groups" element={<PrivateRoute />}>
            <Route index element={<GroupsContainer />} />
            <Route path=":id" element={<CoursesListContainer />} />
          </Route>
        </Route>
        <Route path="/courses" element={<PrivateRoute />}>
          <Route path="my" element={<MyCoursesListContainer />} />
          <Route path="teaching" element={<TeachingCoursesListContainer />} />
          <Route path=":id" element={<CourseDetailsContainer />} />
        </Route>
      </Routes>
    </Suspense>
  </>
);
export default App;
