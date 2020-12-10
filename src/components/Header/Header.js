import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="headerContainer">
                <h1>FEW 1.2 Final Assessment</h1>
                <h2>Zach Shearer</h2>
            </div>
        )
    }
}

export default Header