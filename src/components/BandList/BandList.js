import React, { Component } from 'react'
import data from '../../metal.json'
import Band from '../Band/Band'
import './BandList.css'

class BandList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }
    }

    getBands() {
        return data.filter(obj => obj.band_name.includes(this.state.query)).map((obj) => {
            const { ID, band_name, fans, formed, origin, split, style } = obj
            return (
                <Band
                    bandName={band_name}
                    fans={fans}
                    formed={formed}
                    origin={origin}
                    split={split}
                    style={style}
                    key={ID}
                />
            )
        })
    }

    render() {
        return (
            <div className='bandList'>
                <form>
                    <input
                        value={this.state.query}
                        placeholder="search"
                        onChange={(e) => this.setState({ query: e.target.value })}
                    />
                    <button type="submit">Submit</button>
                </form>
                {this.getBands()}
            </div>
        )
    }
}

export default BandList