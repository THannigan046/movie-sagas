import react  from 'react'
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';


function DetailView() {
    const history = useHistory();
    
    const toHomePage = () => {
        history.push('/')
    }
    
    const {id} = useParams();
    return (
        <>
        <h2>this is a detail view</h2>
        <p>details for movie with an id of {id} </p>
        <button onClick={toHomePage}>Home</button>
        </>
    )
}

export default DetailView;