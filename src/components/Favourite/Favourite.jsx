
import bookmark from './img/bookmark.svg'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import styles from './Favourite.module.css'
import {useEffect, useState} from "react";
const Favourite = () => {
    const [count, setCount] = useState()
    const storeDate = useSelector(state => state.favouriteReducer)

    useEffect(()=> {
        const length = Object.keys(storeDate).length
       length.toString().length > 2 ? setCount('...') : setCount(length)
    })

    return (
        <div className={styles.container}>
           <Link to='/favourites' >
               <span className={styles.counter}>{count}</span>
               <img className={styles.icon} src={bookmark} alt="Favourites"/>
           </Link>

        </div>
        )
}

export default Favourite