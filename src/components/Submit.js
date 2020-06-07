import React, { Component } from 'react';

class Input extends Component{
    state = {
        nama : '',
        alamat : '',
        umur : 0
    }

handleChangeNama = (e) => {
    this.setState({
        nama : e.target.value,
    })
}

handleChangeAlamat = (e) => {
    this.setState({
        alamat : e.target.value,
    })
}
handleChangeUmur = (e) => {
        this.setState({
            umur : e.target.value,
        })
    }
handleSubmit = ()=> {
    console.log(this.state)
}

componentDidMount(){
    
}

    render() {
        return (     
        <div className="container">
                <div className="wrapper bungkus p-5 text-center">
                    <h2 className="text-center">Data Diri</h2>
                    <hr className="mb-4"/>
                        <div>
                            <input type="text" placeholder="Nama Lengkap" id="nama" className="form-control mb-2" name="nama" onChange={this.handleChangeNama}/>
                            <input type="text" placeholder="Alamat" id="alamat" className="form-control" name="alamat" onChange={this.handleChangeAlamat}/>
                            <input type="text" placeholder="Umur" id="umur" className="form-control mt-2" nama="umur" onChange={this.handleChangeUmur}/>
                            <button className="btn btn-secondary mt-3 w" onClick={this.handleSubmit}>Submit</button>
                        </div>                            
                </div>
            </div>
        
        );}

}

export default Input;
