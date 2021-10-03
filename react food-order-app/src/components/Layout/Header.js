import React from 'react';

import styles from './Header.module.css';

import mealsImg from '../../assets/header.jpg';
import HeaderCartButton from './HeaderCartButton';





const Header = (props) =>{

    return(

        <React.Fragment>

            {/* Navbar Section */}
            <header className={styles.header}>

                {/* Left  */}
                <h1>React Meals</h1>
                
                {/* Right */}
                {/* Comming from Header Goes to Actual Button Inside It*/}
                <HeaderCartButton onGoesToButton={props.onGoesToHederCartButton}/>
                

            </header>

            
            {/* After Navbar : Image */}
            <div className={ styles['main-image'] }>

                <img src={mealsImg} alt='A Table Full of Delicious Food!'/>

            </div>


        </React.Fragment>

    );

}


export default Header;