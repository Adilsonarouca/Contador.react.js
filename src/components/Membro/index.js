import React, {Component} from "react";


class Membro extends Component{





    render(){
        return(
            <div id={this.props.id}>
                <h3>{this.props.username} </h3>
                <a >{this.props.curtidas} Curtidas / {this.props.comentarios} comentarios </a>
                
            </div>

        )

    }



}

export default Membro