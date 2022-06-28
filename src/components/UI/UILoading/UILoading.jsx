import loaderIcon from './img/Loader.svg'

import styles from './UILoading.module.css'

const UILoading = () => {
    return (
        <img className={styles.loader} src={loaderIcon} alt='Loading...'/>
    )
}

export default UILoading