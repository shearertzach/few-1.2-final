import React, { Component } from 'react'
import './LikeCounter.css'

class LikeCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0
        }
    }

    increment = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    decrement = () => {
        if (this.state.likes > 0) {
            this.setState({
                likes: this.state.likes - 1
            })
        }
    }

    render() {
        return (
            <div className='likeCounter'>
                <button onClick={this.decrement}>👎</button>
                <p>Likes: {this.state.likes}</p>
                <button onClick={this.increment}>👍</button>
            </div>
        )
    }
}

export default LikeCounter