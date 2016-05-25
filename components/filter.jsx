import React from 'react';
import { connect } from 'react-redux';
import C from './../constants';
import Utils from './../util/bankingUtils';

const Filter = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span> {children} </span>
  }

  return (
    <button
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

const mapStateToLinkProps = (
  state,
  ownProps
) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToLinkProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch({
        type: "SET_VISIBILITY_FILTER",
        filter: ownProps.filter
      });
    }
  };
};

export default connect(mapStateToLinkProps,mapDispatchToLinkProps)(Filter);



