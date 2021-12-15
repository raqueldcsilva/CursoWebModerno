import React, { Component } from "react";

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo, 
        nome: this.props.nome//define o estado inicial
    }

    constructor(props){
        super(props)

        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
    }

    setTipo(e){
        this.setState({ tipo: e.target.value })//altera o estado
    }

    setNome(e){
        this.setState({ nome: e.target.value })//altera o estado
    }
    render() {
        const{ tipo, nome } = this.state
        return(
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." value={nome} onChange={this.setNome}/>
            </div>
        )
    }
}