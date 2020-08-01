import React, { useState } from 'react'

export default function Info(props) {

    const [countryData, setCountryData ] = useState({})

    usezEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://api.covid19api.com/country/"+this.props.country+"/status/confirmed", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    })
    return (
        <div>
            <lable>This bit is in progress...</lable>
        </div>
    )
}