import styles from "./MealItemForm.module.css"

function MealItemForm(props) {
    return (
        <form className={styles.form}>
            <button>+ADD</button>
        </form>
    );
}

export default MealItemForm;