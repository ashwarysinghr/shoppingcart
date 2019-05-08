import React, {Component} from 'react';
import "./Modal.css";

class Modal extends Component {
    render(){
        return this.props.open ? (
            <div id="snackbar" className={this.props.open ? 'show' : ''}>{
                <p className="content">{this.props.children}</p>
            } </div>
          ) : null;
    }
}
export default Modal