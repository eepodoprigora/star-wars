import {useParams} from "react-router";
import React, {useEffect, useState, Suspense } from "react";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";

import {getApiResource} from "../../utils/network";
import {getPeopleImage} from "../../services/getPeopleData";
import {API_PERSON} from "../../constants/api";
import {withErrorApi} from "../../hoc/withErrorApi";

import PersonInfo from "../../components/PersonPage/PersonInfo";
import PersonPhoto from "../../components/PersonPage/PersonPhoto";

import PersonLinkBack from "../../components/PersonPage/PersonLinkBack";
import UILoading from "../../components/UI/UILoading";

import styles from './PersonPage.module.css'

const PersonFilms = React.lazy(()=> import('../../components/PersonPage/PersonFilms'))


const PersonPage = ({setErrorApi}) => {
    const id = useParams().id;
    const [personId, setPersonId] = useState(null)
    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personPhoto, setPersonPhoto] = useState(null)
    const [personFilms, setPersonFilms]= useState(null)
    const [personFavourite, setPersonFavourite] = useState(false)

    const storeData = useSelector(state => state.favouriteReducer)

    useEffect(() => {
        (async () => {
            const res = await getApiResource(`${API_PERSON}/${id}/`);
            storeData[id] ? setPersonFavourite(true) : setPersonFavourite(false)
            setPersonId(id)

            if (res) {
                setPersonInfo([
                    {title: 'Height', data: res.height},
                    {title: 'Mass', data: res.mass},
                    {title: 'Hair color', data: res.hair_color},
                    {title: 'Skin color', data: res.skin_color},
                    {title: 'Birth Year', data: res.birth_year},
                    {title: 'Gender', data: res.gender},
                ])
                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(id))
                res.films.length && setPersonFilms(res.films)

                setErrorApi(false)
            } else {
                setErrorApi(true)
            }


        })()
    }, [])

    return (
        <>
            <PersonLinkBack/>
            <div className={styles.wrapper}>

                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonPhoto personFavourite={personFavourite}
                                 setPersonFavourite={setPersonFavourite}
                        personId={personId}
                        personPhoto={personPhoto} personName={personName}/>
                    {personInfo && <PersonInfo personInfo={personInfo}/>}
                    {personFilms && (
                        <Suspense fallback={<UILoading/>}>
                        <PersonFilms personFilms={personFilms}/>
                        </Suspense>
                        )
                        }
                </div>
            </div>
        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage)