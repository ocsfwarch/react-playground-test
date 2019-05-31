import React, { Component } from 'react';
import './Messages.css';
import PropTypes from 'prop-types';

export class Messages extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            unread: props.unread
        }
    }

  render() {
    const badge = this.state.unread 
    ? <div className="unread_count">{this.state.unread}</div>
    : null;
    return (
        <div className="messages">
            {this.state.name}
            {badge}
        </div>
    );
  }
}// End class Messages

Messages.propTypes = {
    name: PropTypes.string.isRequired,
    unread: PropTypes.number.isRequired
};


export default Messages
