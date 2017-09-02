import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

const { link, menuItem } = styles;

const Menu = ({ match }) => (
  <div style={styles.menu}>
    <ChevronLeft
      onClick={() => alert('gay')}
      style={{
        alignSelf: 'flex-end',
        color: 'darkgray',
        cursor: 'pointer',
        cursor: 'hand',
        height: '48px',
        marginTop: '0px',
        width: 'auto',
      }}
    />
    <Subheader style={styles.assignments}>Assignments</Subheader>
    <Link to={`${match.url}/20170828`} style={link} >
      <MenuItem style={menuItem}>
        <div style={{ display: 'flex', width: '96px' }}>
          <span style={{ flex: '1', color: 'darkgray' }}>1</span>
          <span style={{ color: '#404040' }}>8.28</span>
        </div>
      </MenuItem>
    </Link>
    <Link to={`${match.url}/20170904`} style={link}>
      <MenuItem style={menuItem}>
        <div style={{ display: 'flex', width: '96px' }}>
          <span style={{ flex: '1', color: 'darkgray' }}>2</span>
          <span style={{ color: '#404040' }}>9.04</span>
        </div>
      </MenuItem>
    </Link>
    <Link to={`${match.url}/20170911`} style={link}>
      <MenuItem style={menuItem}>
        <div style={{ display: 'flex', width: '96px' }}>
          <span style={{ flex: '1', color: 'darkgray' }}>3</span>
          <span style={{ color: '#404040' }}>9.11</span>
        </div>
      </MenuItem>
    </Link>
    <Link to={`${match.url}/20170918`} style={link}>
      <MenuItem style={menuItem}>
        <div style={{ display: 'flex', width: '96px' }}>
          <span style={{ flex: '1', color: 'darkgray' }}>4</span>
          <span style={{ color: '#404040' }}>9.18</span>
        </div>
      </MenuItem>
    </Link>
  </div>
);

export default Menu;
