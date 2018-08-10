import React, { Component } from 'react'

export default class GifSearch extends Component {

  state = {
    query: 'dog'
  }

  handleChange = (e) => {
    this.setState({query: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateSearchQuery(this.state.query)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-group col-md-4">
        <input type="text" value={this.state.query} onChange={this.handleChange} className="form-control" />
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    )
  }
}
