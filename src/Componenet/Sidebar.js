import React, { useState } from 'react';
import { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

function Sidebar() {
  


  useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
  }, []);



  return (
    <div className="App">
      <Widget
 
      />
    </div>
  );
}

export default Sidebar;
