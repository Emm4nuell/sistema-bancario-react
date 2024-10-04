import styles from'./Loading.module.css'
import { FaRedoAlt } from "react-icons/fa";

function Loading() {
    return(
        <div className={styles.loading}>
            <FaRedoAlt />
        </div>
    )
}

export default Loading