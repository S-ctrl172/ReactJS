import React from 'react';
import styles from './Modal.module.css';


// For React Portal
import ReactDOM from 'react-dom';



const Backdrop = props =>{
    return (
        //                               Backdrop Also Close The Cart
        <div className={styles.backdrop} onClick={props.onGoesToModal}></div>
    );
}



const ModalOverlay = props =>{
    return (
        <div className={styles.modal}>

            <div className={styles.content}>
                {props.children}
            </div>

        </div>
    );
}




// Modal Should be Renderd On Top So React Portal
const Modal = props =>{

    return (

        <React.Fragment>

            { ReactDOM.createPortal(
                        // Also Pass the Same Props
                <Backdrop onGoesToModal={props.onGoesToModal}/> , 
                    document.getElementById('overlays')
                ) 
            }

            { ReactDOM.createPortal(
                    <ModalOverlay>
                        {props.children} 
                    </ModalOverlay> , document.getElementById('overlays')
                ) 
            }

        </React.Fragment>
        
    );

}


export default Modal;