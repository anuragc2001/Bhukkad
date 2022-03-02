import React from "react";
import Input from "../UI/Input";
import styles from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";

function MealItem(props) {

    const price = `$${props.price.toFixed(2)}`
    return (
        <>
            <li className={styles.meal}>
                <div>
                    <h3>{props.title}</h3>
                    <div className={styles.description}>
                        {props.description}
                    </div>
                    <div className={styles.price}>
                        {price}
                    </div>
                </div>
                <div>
                    <Input label="Amount" input={{
                        id: "amount",
                        type: "number",
                        min: 1,
                        max: 5,
                        step: 1,
                        defaultValue: 1
                    }} />
                    <MealItemForm />
                </div>
            </li>
        </>
    );
}

export default MealItem;