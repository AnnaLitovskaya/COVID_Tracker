import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getCurrent } from '../store/storeComponents/getCurrent';
import { getAll } from '../store/storeComponents/getAll';

const CurrentValues = (props) => {
  useEffect(async () => {
    await props.getCurrent();
    await props.getAll();
  }, []);

  return (
    <div>
      Current Date: <div>{props.currentStats.date}</div>
      Current Positive: <div>{props.currentStats.positive}</div>
      Current In ICU: <div>{props.currentStats.inIcuCurrently}</div>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Current Positive</th>
            <th>Current In ICU</th>
          </tr>
          {props.allStats.map((obj, idx) => {
            return (
              <tr key={idx}>
                <th>{obj.date}</th>
                <th>{obj.positive}</th>
                <th>{obj.inIcuCurrently}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentStats: state.currentStats,
  allStats: state.allStats,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrent: () => dispatch(getCurrent()),
  getAll: () => dispatch(getAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentValues);
