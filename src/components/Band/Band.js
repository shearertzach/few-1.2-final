import React, { Component } from 'react'
import LikeCounter from '../LikeCounter/LikeCounter'
import './Band.css'

class Band extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    checkSplit() {
        if (this.props.split === '-') {
            return <LikeCounter />
        }
    }

    stylesList() {
        const styles = this.props.style.split(',')
        return styles.map((style, i) => {
            return <li key={i}>{style}</li>
        })
    }

    render() {
        return (
            <div className='bandCard'>
                <h2>{this.props.bandName}</h2>
                <p>Fans: <b>{(this.props.fans * 1000).toLocaleString('en')}</b></p>
                <p>Formed: <b>{this.props.formed}</b></p>
                <p>Origin: <b>{this.props.origin}</b></p>
                <p>Styles</p>
                <ul>{this.stylesList()}</ul>
                <p>Split: {this.props.split === '-' ? 'No' : this.props.split}</p>
                {this.checkSplit()}
            </div>
        )
    }
}

export default Band