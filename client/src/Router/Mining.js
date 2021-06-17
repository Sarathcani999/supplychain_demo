import React, {useState , useEffect}  from 'react'
import { Container ,Button, Card , CardTitle , CardText , CardHeader , CardBody } from 'reactstrap'
import AppNavbar from '../components/AppNavbar' 
// import '../App.css'
import axios from 'axios'

import {mine } from './mine'

function Mining() {

    const [pendingBlocks , setPendingblocks] = useState([])
    const [refresh , setRefresh] = useState(true)

    var sampleBlock = {
        itemid : "0000001" ,
        loc : "EKM" ,
        price : "100 per Kg",
        qty : "1 metric ton"
    }

    useEffect(() => {
        // Update the document title using the browser API
        console.log("refreshed")
        axios.get('/api/pendingblocks/')
            .then(blocks => {

                // console.log(blocks)
                setPendingblocks(blocks.data)
            })
            .catch(error => {
                console.log(error.message)
            })

      } , [refresh])

    return (
        <div>
            <AppNavbar />
            {
                pendingBlocks.map(block => (
                    <div>
                    <center>

                    <Card style={{ width : "80%"}}>
                         <CardBody style={{padding : 5}}>
            
                                    <center>
                                    <p> blockid : {block._id}</p>
                                    <p> itemid : {block.itemid}</p>
                                    <p> loc : {block.loc} </p>
                                    <p> price : {block.price} </p>
                                    <p> qty : {block.qty} </p>


                                    <Button color="primary" size="md"  onClick={() => {
                                            mine(block)
                                            
                                        }}>Mine</Button>
                                    </center>

                        </CardBody>
                    </Card>
                    <br/>
                    </center>
                    </div>
                ))
            }

        </div>
    )
}

export default Mining
