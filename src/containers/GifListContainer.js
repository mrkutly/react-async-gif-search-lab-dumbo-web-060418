import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifs: [],
    query: 'dog'
  }

  updateSearchQuery = (query) => {
    this.setState({ query }, this.getGifs)
  }

  getGifs = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(resp => resp.json())
      .then(json => {
        let gifs = json.data.slice(0, 3)
        this.setState({ gifs: gifs })
      })
  }

  componentDidMount() {
    this.getGifs()
  }

  render() {
    console.log(this.state.query)
    return (
      <div className="container row">
        <GifList gifs={this.state.gifs} />
        <GifSearch updateSearchQuery={this.updateSearchQuery} />
      </div>
    )
  }
}

export default GifListContainer
