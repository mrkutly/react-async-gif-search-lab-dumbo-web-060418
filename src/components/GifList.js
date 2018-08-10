import React, { Component } from 'react'

class GifList extends Component {

  mappedGifs = () => {
    return this.props.gifs.map(gif => (
      <li key={gif.id}><img key={gif.id} src={gif.images.original.url} alt={gif.title} /></li>
    ))
  }

  render() {
    return (
      <ul className="col-md-8">
        {this.mappedGifs()}
      </ul>
    )
  }
}

export default GifList
