import {HTTP, HTTPS} from "../constants/api";

export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;
    return result
}

export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error('Could not fetch.', res.status)
            return false
        }
        return await res.json();
    } catch (error) {
        console.error('Could not fetch.', error.message)
        return false
    }

}

// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
//     .then(body => console.log(body)) // Аналогично асинхронной функции ниже

    // (async () => {
    //     const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
    //     console.log(body)
    // })()


// export const getApiResource = (url) => {
//     fetch(url)
//         .then(res => res.json())
//         .then(body => console.log(body))
//         .catch(error => console.log(error.message))
// }

export const makeConcurrentRequest = async (url)  => {
   const res = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json())
    }))

    return res
}