import React from "react";

import { Route, Link, Switch } from 'react-router-dom';

// Lazy load child components
const Adminhome = React.lazy(() => import('./Adminhome'));
const Adminpro = React.lazy(() => import('./Adminpro'));

function Admin() {
  return (
    <div>
    <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="admin/home">Home</Link>
          </li>
          <li>
            <Link to="/admin/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <React.Suspense fallback={<div>Loading...</div>}>
        < Switch>
          <Route path="/admin/home" component={Adminhome} />
          <Route path="/admin/profile" component={Adminpro} />
        </ Switch>
      </React.Suspense>
    </div>
  );
}

export default Admin;
