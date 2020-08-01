import React from 'react'
import {Spinner, Label} from 'react-bootstrap'

export default function Spin() {
    return (
        <>
            <Spinner animation="grow"  class='spinner'/>
            <lable className='hearder'>Fetching Data please wait ....</lable>
            </>
    )
}