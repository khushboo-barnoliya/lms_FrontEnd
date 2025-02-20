import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* Footer */}
    </div>
  );
}

export default Layout;
