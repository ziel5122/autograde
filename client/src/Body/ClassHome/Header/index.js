import { connect } from 'react-redux';

import Header from './header';

const mapStateToProps = ({ hwNum }) => ({
  hwNum,
});

const mapDispatchToProps = dispatch => ({
  setHwNum(hwNum) {
    dispatch({
      hwNum,
      type: 'SET_HW_NUM',
    })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
