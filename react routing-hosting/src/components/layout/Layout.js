import MainNavigation from "./MainNavigation";
import styles from './Layout.module.css';
import React from "react";


const Layout = (props) => {
    return (
        <React.Fragment>

            <MainNavigation/>

            <main className={styles.main}>
                {props.children}
            </main>

        </React.Fragment>
    );
};

export default Layout;
