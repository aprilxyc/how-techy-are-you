// react
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// styled components
import styled from 'styled-components';

const modalRoot = document.getElementById("modal-root");

const StyledModal = styled.div`
    position       : absolute;
    top            : 0;
    left           : 0;
    right          : 0;
    bottom         : 0;
    display        : flex;
    align-items    : center;
    justify-content: center;
`;

class Modal extends Component {
    render() {
        return ReactDOM.createPortal(
            <StyledModal>
            <div className="box-dialog">
                <div className="box-header">
                    <h4 className="box-title">Title Of Modal</h4>
                    <button onClick={this.handleClick} className="close">
                    ×
                    </button>
                </div>
                <div className="box-content">{this.props.children}</div>
                <div className="box-footer">
                    <button onClick={this.handleClick} className="close">
                    Close
                    </button>
                </div>
                    <div
                        className   = {`background`}
                        onMouseDown = {this.handleClick}
                        ref         = {this.background}
                    >
                    </div>
                </div>
            </StyledModal>
            ,
          modalRoot
        );
      }
}


export default Modal;