import {NavLink} from "react-router-dom";

import Favourite from "../Favourite";

import imgDroid from './img/droid.svg'
import imgLightSaber from './img/lightsaber.svg'
import imgSpaceStation from './img/space-station.svg'

import styles from './Header.module.css'
import {THEME_DARK, THEME_LIGHT, THEME_NEUTRAL, useTheme} from "../../Context/ThemeProvider";
import {useEffect, useState} from "react";

const Header = ({}) => {
    const isTheme = useTheme()
    const [icon, setIcon] = useState(imgSpaceStation)

    useEffect(() => {
        switch (isTheme.theme){
            case THEME_LIGHT:
                setIcon(imgLightSaber)
                break
            case THEME_DARK:
                setIcon(imgSpaceStation)
                break
            case THEME_NEUTRAL:
                setIcon(imgDroid)
                break
            default:
                break
        }
    }, [isTheme])
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt='Star wars'/>
            <ul className={styles.list__container}>

                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/people/?page=1'>People</NavLink></li>
                <li><NavLink to='/search'>Search</NavLink></li>
                <li><NavLink to='/fail'>Fail</NavLink></li>
                <li><NavLink to='/not-found'>Not Found</NavLink></li>


            </ul>
            <Favourite/>
        </div>
    )
}

// PeopleList.propTypes = {
//     people: PropTypes.array
// }

export default Header