import React from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
    return (
        <>
            <header className={styles.header}>
                <h1>Bhukkad</h1>
                <HeaderCartButton onClick={props.onClickHandler} />
            </header>
            <div className={styles['main-image']}>
                <img src="https://images.unsplash.com/photo-1600891964532-839fb6407dd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="food"></img>
            </div>
        </>
    );
}

export default Header;