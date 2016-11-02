import React from 'react'
import {Link} from 'react-router'

import Sidebar from './components/Sidebar'

export default React.createClass({
  getInitialState() {
    let existingEntry = {
      user: {
        firstName: 'Ryan',
        lastName: 'Chenkie',
        email: 'ryanchenkie@gmail.com',
        image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250&d=retro&r=g'
      },
      comment: 'First time entry',
      totalTime: 1.5,
      date: '2016-04-08'
    }
    return {
      timeEntries: [existingEntry],
      totalTime: 1.5
    }
  },
  handleAddTime(timeEntry) {
    this.setState({
      timeEntries: this.state.timeEntries.concat(timeEntry),
      totalTime: this.state.totalTime + parseFloat(timeEntry.totalTime)
    })
  },
  handleDeleteTime(timeEntry) {
    if (window.confirm('Are you sure you want to delete this time entry?')) {
      let timeEntries = this.state.timeEntries.slice(0)
      timeEntries.splice(timeEntries.indexOf(timeEntry), 1)
      this.setState({
        timeEntries,
        totalTime: this.state.totalTime - parseFloat(timeEntry.totalTime)
      })
    }
  },
  render() {
    let {timeEntries, totalTime} = this.state
    return <div id="wrapper">
      <nav className="navbar navbar-default">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="glyphicon glyphicon-time"/> React Time Tracker
          </a>
          <ul className="nav navbar-nav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/time-entries">Time Entries</Link></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="col-sm-3">
          <Sidebar time={(totalTime.toFixed(2))}/>
        </div>
        <div className="col-sm-9">
          {this.props.children &&
            React.cloneElement(this.props.children, {
              timeEntries,
              onAddTime: this.handleAddTime,
              onDeleteTime: this.handleDeleteTime
            })
          }
        </div>
      </div>
    </div>
  }
})
