import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h2>
          <a href="/">토익 영단어(고급)</a>
        </h2>
        <div className='menu'>
          <Link to="/create_word" className='link'>단어추가</Link>
          <Link to="/create_day" className='link'>Day추가</Link>
        </div>
      </div>
    );
  }
}

export default Header;