import React, { Component } from 'react'
import logo2 from './../img/logo2.png'

export default class Homepage extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row mt-5'>
                    <h3 className='mx-auto'>Welcome To Movie Site</h3>
                </div>
                <div className='row mt-3'>
                    <div className='mx-auto'>
                        <img src={logo2} alt="" width='500px' height='400px'/>
                    </div>
                </div>
            </div>
        )
    }
}
