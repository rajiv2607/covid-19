import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import Spinner from './Spin'
export default function Stats(props) {

    const [jsonData, setjsonData] = React.useState({})
    const [loaded  , setLoaded ] = React.useState(false)

    React.useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats", requestOptions)
            .then(response => response.text())
            .then(function(result ) {
                setLoaded(true)
                setjsonData(result)
            })
            .catch(error => console.log('error', error));
    }, [])

    function ShowData() {
        var renderData = []
        if (jsonData.length > 1) {
            for (const [keys, val] of Object.entries(JSON.parse(jsonData).data)) {
               
                renderData.push(
                    <tr>
                        <td keys={Math.random}>{keys}</td>
                        <td keys={Math.random}>{val}</td>
                    </tr>
                )
            }
        } else {
            return null
        }
        return renderData
    }

    return (
        <div class='container' id='stats-container'>
            <div class='row'>
                <Table striped bordered hover size="sm">
                    <tbody>{
                          (loaded) ? <ShowData /> : <Spinner/>
                        }
                    </tbody>
                </Table>

            </div>

        </div>
    )
}