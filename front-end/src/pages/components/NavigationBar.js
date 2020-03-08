import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function NavigationBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar/>
      </AppBar>
    </div>
  );
}