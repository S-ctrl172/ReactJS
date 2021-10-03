import styles from './Card.module.css';



const Card = (props) =>{

    return(

        // Apply Card.module.css + any other class
        <div className={`${styles.card} ${props.css}`}>

            {props.children}

        </div>

    );


};

export default Card;
