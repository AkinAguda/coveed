/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch, Redirect, } from 'react-router-dom';
import Auth from "./Auth";


const ProtectedRoute = ({
    path, setRedirectUrl, component: Comp, auth, exact, to, children, ...props
  }) => {
    if (auth) {
      return (
        <Route
          component={({ otherProps }) => (
            <Comp {...props} {...otherProps} />
          )}
          path={path}
          exact={!!exact}
        >
          {children}
        </Route>
      );
    }
    if (setRedirectUrl) setRedirectUrl(window.location.pathname);
    return <Redirect to={to || '/signup'} />;
  };

const Router = () => {
    return (  
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)} basename={process.env.PUBLIC_URL}>
        <>
          <Switch>
            <Route path="/" exact component={Auth} />
            <ProtectedRoute path="/dashboard" exact component={Auth} auth={false} />
          </Switch>
        </>
      </BrowserRouter>
    )
}

ProtectedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    to: PropTypes.string,
    auth: PropTypes.bool.isRequired,
    exact: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    path: PropTypes.string,
    setRedirectUrl: PropTypes.string
}
ProtectedRoute.defaultProps = {
    to: '/signup',
    exact: false,
    path: '',
    setRedirectUrl: '',
    children: []
}

export default Router;