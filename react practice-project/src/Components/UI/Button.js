import styles from './Button.module.css';


const Button = (props) =>{

    return(

        <button 
            className={`${styles.button} ${props.css}`}
            type={props.type || 'button'}
            onClick={props.onClick}>

            {props.children}

        </button>

    );

};

export default Button;