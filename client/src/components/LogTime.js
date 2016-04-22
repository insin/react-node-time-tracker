import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  handleSubmit(e) {
    e.preventDefault()
    let form = e.target
    this.props.onAddTime({
      date: form.elements.date.value,
      totalTime: form.elements.totalTime.value,
      comment: form.elements.comment.value,
      user: {
        firstName: 'Ryan',
        lastName: 'Chenkie',
        email: 'ryanchenkie@gmail.com',
        image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250&d=retro&r=g'
      }
    })
    form.reset()
  },
  render() {
    return <form className="form-horizontal" onSubmit={this.handleSubmit}>
      <div className="form-group">
        <div className="col-sm-6">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            placeholder="Date"
          />
        </div>
        <div className="col-sm-6">
          <label>Hours</label>
          <input
            type="number"
            className="form-control"
            name="totalTime"
            placeholder="Hours"
          />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-12">
          <label>Comment</label>
          <input
            type="text"
            className="form-control"
            name="comment"
            placeholder="Comment"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
      {' '}
      <Link to="/time-entries" className="btn btn-danger">Cancel</Link>
      <hr/>
    </form>
  }
})
