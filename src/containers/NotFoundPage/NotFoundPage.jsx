import {useLocation} from "react-router";

import img from './img/404.png'
import styles from './NotFoundPage.module.css'

const NotFoundPage =() => {
    let location = useLocation()

    // location.pathname
    return (
        <>
            <img className={styles.img} src={img} alt='Not Found'/>
            <p className={styles.text}> No match for <u>{location.pathname}</u></p>
        </>
    )
}

export default NotFoundPage