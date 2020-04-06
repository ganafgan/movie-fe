import React, { Component } from 'react'
import Axios from 'axios'

export default class ManageMovie extends Component {

    state = {
        data : null
    }
    
    componentDidMount(){
        this.getAllDataMovies()
    }
    getAllDataMovies = () => {
        Axios.get(`http://localhost:4002/getmovies`)
        .then((res)=>{
            this.setState({data : res.data.data})
            console.log(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    printDataMovies = () => {
        return this.state.data.map((val)=>{
            return(
                <tr>
                    <th scope="row">{val.id}</th>
                    <td>{val.nama}</td>
                    <td>{val.tahun}</td>
                    <td>{val.description}</td>
                    <td><input type="button" className='btn btn-primary' value='EDIT'/> <input type="button" className='btn btn-danger' value='DELETE'/></td>
                </tr>
            )
        })
    }
    render() {
        if(this.state.data === null){
            return(
                <h2>Wait A Moment ...</h2>
            )
        }
        return (
            <div className='container'>
                <div className='row mt-5'>
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Tahun</th>
                                <th scope="col">Deskripsi</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                    <tbody>
                        {this.printDataMovies()}
                    </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
