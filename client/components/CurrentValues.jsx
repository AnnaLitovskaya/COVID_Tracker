import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getCurrent } from '../store/storeComponents/getCurrent';

const CurrentValues = (props) => {
  useEffect(async () => {
    await props.getCurrent();
  }, []);

  return (
    <div>
      Current Date: <div>{props.currentStats.date}</div>
      Current Date: <div>{props.currentStats.date}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentStats: state.currentStats,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrent: () => dispatch(getCurrent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentValues);
