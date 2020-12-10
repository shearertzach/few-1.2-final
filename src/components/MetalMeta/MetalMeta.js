import React, { Component } from 'react'
import data from '../../metal.json'
import './MetalMeta.css'

class MetalMeta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bands: 0,
            totalFans: 0
        }
    }

    getTotalFans() {
        let fans = 0
        data.forEach((band) => {
            fans += band.fans
            console.log(fans)
        })
        return (fans * 10000).toLocaleString('en')
    }

    render() {
        return (
            <div className='metaContainer'>
                <h1>Metal Bands 🤘</h1>
                <h2>Bands: {data.length} </h2>
                <h2>Total Fans: {this.getTotalFans()}</h2>
            </div>
        )
    }
}

export default MetalMeta