import React from 'react'
import { Button } from 'react-bootstrap';


export default function Search() {
const btn_data = React.useRef('')

    return (

        <div class='container'>
            <div class='row'>
                <input  style = {{
                    "border-radius": "13px"
                }}class='col-8 offset-md-2'placeholder="Enter counrty name" />
                <Button class='col-md-3 col-xm-1' >Search</Button>
            </div>
        </div>
    )
}