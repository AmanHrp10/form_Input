import React, { Component } from 'react'

class Counter extends Component {
    state = {
        angka : 0
    }
    tambah = () => {
        this.setState ({
            angka : this.state.angka + 1
        })
    }

    kurang = () => {
        let stateAngka = this.state.angka;
        // menggunakan if-else

        // if(stateAngka >= 1){
        //     return this.setState({
        //     angka : stateAngka - 1
        // })
        // } else{
        //     window.alert('angka sudah habis')
        // }

        // menggunakan ternary operator
        
        let hasil = (stateAngka >= 1)? this.setState({
            angka : stateAngka - 1
        }): window.alert('angka sudah berakhir');
        
    }
    
    render() {
        return (
            <div>
                <p>{this.state.angka}</p>
                <button onClick={this.tambah}>tambah</button>
                <button onClick={this.kurang}>kurang</button>
            </div>
        )
    }
}

export default Counter
