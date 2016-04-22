import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return <div className="jumbotron">
      <h1>React Time Tracker</h1>
      <p>
        <strong>
          Get started by <Link to="/time-entries">creating a time entry</Link>.
        </strong>
      </p>
    </div>
  }
})
