import React from "react";
import "./css/Navbar.css";
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';




const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        // Your menu content here
        <nav>
          <ul style={styles.ul}>
              <li><a href="/mixes" class="title1">Mixes</a></li>
              <li><a href="/interviews" class="title1">Interviews</a></li>
              <li><a href="/" class="title1">Articles</a></li>
              <li><a href="/sleepwalker-clone" class="title1">Shows/Exclusives</a></li>
              <li><a href="/contact" class="title1">Contacts</a></li>

          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;

const styles = {
  ul:{
    color: '#2fb606'
  },
}