import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ThemeSwitch extends Component {
  static propTypes = {
    themeColor: PropTypes.string,
    onSwitchColor: PropTypes.func
  }

  handleClickSwitch(color) {
    if (this.props.onSwitchColor) {
      this.props.onSwitchColor(color)
    }
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClickSwitch.bind(this, 'red')} style={{color: this.props.themeColor}}>Red</button>
        <button onClick={this.handleClickSwitch.bind(this, 'blue')} style={{color: this.props.themeColor}}>Blue</button>
      </div>
    )
  }
}
