import PropTypes from "prop-types";
import {useDispatch} from "react-redux";

import styles from './PersonPhoto.module.css'
import {removePersonFromFavourite, setPersonToFavourite} from "../../../store/actions";

import iconFavourite from './img/favourite.svg'
import iconFavouriteFilled from './img/favouritefilled.svg'

const PersonPhoto = ({personPhoto, personName, personId, personFavourite, setPersonFavourite}) => {
    const dispatch = useDispatch()

    function dispatchFavouritePeople() {
        if(personFavourite) {
            dispatch(removePersonFromFavourite(personId))
            setPersonFavourite(false)
        } else {
            dispatch(setPersonToFavourite({
                [personId]: {
                    name: personName,
                    img: personPhoto
                }
            }))
            setPersonFavourite(true)
        }
    }

    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName}/>
                <img onClick={dispatchFavouritePeople}
                     src= {personFavourite ? iconFavouriteFilled : iconFavourite}
                     alt={'Add to favourite'}
                     className={styles.favourite}
                />
            </div>

        </>
    )
}

PersonPhoto.propTypes = {
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personId: PropTypes.string,
    personFavourite: PropTypes.bool,
    setPersonToFavourite: PropTypes.func
}

export default PersonPhoto