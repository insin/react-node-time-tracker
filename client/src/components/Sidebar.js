import React, {PropTypes} from 'react'

export default React.createClass({
  propTypes: {
    time: PropTypes.number.isRequired
  },
  render() {
    return <div className="panel panel-default">
      <div className="panel-heading">
        <h1 className="text-center">Total Time</h1>
      </div>

      <div className="panel-body">
        <h1 className="text-center">{this.props.time} hours</h1>
      </div>
    </div>
  }
})
