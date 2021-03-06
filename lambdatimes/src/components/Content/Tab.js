import React from 'react';
import PropTypes from 'prop-types'

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  const isActive = () => {
    if (props.tab !== props.selectedTab) {
      return 'tab'
    } else {
      return 'tab active-tab'
    }
  }
  return (
    <div
      className={isActive()}
      onClick={(e) => {
        props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tab: PropTypes.string
}
export default Tab;
