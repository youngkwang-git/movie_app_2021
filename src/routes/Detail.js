import React from 'react';
import { useEffect } from 'react';


function Detail(props) {

    useEffect(() => {
        const { location, history } = props;
        if(location.state === undefined) {
            history.push('/');
        }
    });
    const { location } = props;
    console.log(location.state);
    if(location.state) {
        return (
            <span>{location.state.title}</span>
        )
    } else {
        return null;
    }
    
}

export default Detail;