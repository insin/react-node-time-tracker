import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    let {location, timeEntries} = this.props
    return <div>
      {location.pathname !== '/time-entries/log-time' &&
        <Link to="/time-entries/log-time" className="btn btn-primary">
          Log Time
        </Link>
      }

      {location.pathname === '/time-entries/log-time' &&
        <h3>Log Time</h3>
      }

      <hr/>

      {this.props.children &&
        React.cloneElement(this.props.children, {
          onAddTime: this.props.onAddTime
        })
      }

      <div className="time-entries">
        {!timeEntries.length &&
          <p><strong>No time entries yet</strong></p>
        }

        <div className="list-group">
          {timeEntries.map((timeEntry, index) => <a className="list-group-item" key={index}>
            <div className="row">

              <div className="col-sm-2 user-details">
                <img src={timeEntry.user.image} className="avatar img-circle img-responsive"/>
                <p className="text-center">
                  <strong>
                    {timeEntry.user.firstName} {timeEntry.user.lastName}
                  </strong>
                </p>
              </div>

              <div className="col-sm-2 text-center time-block">
                <h3 className="list-group-item-text total-time">
                  <i className="glyphicon glyphicon-time"/>
                  {' '}
                  {timeEntry.totalTime} <small>hours</small>
                </h3>
                <p className="label label-primary text-center">
                  <i className="glyphicon glyphicon-calendar"/>
                  {' '}
                  {timeEntry.date}
                </p>
              </div>

              <div className="col-sm-7 comment-section">
                <p>{timeEntry.comment}</p>
              </div>

              <div className="col-sm-1">
                <button
                  className="btn btn-xs btn-danger delete-button"
                  onClick={() => this.props.onDeleteTime(timeEntry)}>
                  X
                </button>
              </div>

            </div>
          </a>)}
        </div>
      </div>
    </div>
  }
})
