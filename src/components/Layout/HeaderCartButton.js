import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css"

function HeaderCartButton(props) {

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnstyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);


    return (
        <>
            <button className={btnstyles} onClick={props.onClick}>
                <span className={styles.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={styles.badge}>{numberOfItems}</span>
            </button>
        </>
    );
}

export default HeaderCartButton;