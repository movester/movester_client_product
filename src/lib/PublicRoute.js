import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ children }) => {
  const { isAuth } = useSelector(state => state.auth);

  return !isAuth ? children : <Navigate to="/" />;
};

PublicRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export default PublicRoute;
