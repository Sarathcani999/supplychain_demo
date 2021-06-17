import React , {useState} from 'react'
import { Card, CardBody , Alert , CardFooter, Button , Input , Spinner} from 'reactstrap'
import { connect } from 'react-redux'
import { createNote } from '../../../../redux'
import uuid from 'react-uuid'
import axios from 'axios'


function CreateNotes(props) {
    let { createNote } = props
    let [body , setBody] = useState('')
    const [qty, setQty] = useState('')
    const [itemid, setItemid] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [message, setMessages] = useState("");
    const [visible, setVisible] = useState(false );
    const [spinning, setSpinning] = useState(false);

    const onDismiss = () => setVisible(false);

    const startSpinner = () => setSpinning(true);
    const stopSpinner = () => setSpinning(false);



    return (
        <div style={{width : "100%"}}>
            {(spinning) ?
                        (
                            <div>
                            <center>
                            <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
                            <p className="lead">Adding Block</p>
                            </center>
                            </div>
                        ) :
                        (
                            <Card style={{ width : "100%"}}>
                                <CardBody style={{padding : 5}}>
            
                                    <center>
                                    <h3> Add the details of block</h3>
                                    </center>
            
                                    <br/>
            
                                    <Input
                                        required
                                        type="text"
                                        value={itemid}
                                        placeholder="Item ID"
                                        onChange={e => setItemid(e.target.value)}
                                    />
                                    <br/>
            
            
                                    <Input
                                        required
                                        type="text"
                                        value={qty}
                                        placeholder="Quantity"
                                        onChange={e => setQty(e.target.value)}
                                    />
                                    <br/>
            
                                    <Input
                                        required
                                        type="text"
                                        value={price}
                                        placeholder="Price (eg : 40₹ per Kg of rice)"
                                        onChange={e => setPrice(e.target.value)}
                                    />
                                    <br/>

                                    <Input
                                        required
                                        type="text"
                                        value={location}
                                        placeholder="location"
                                        onChange={e => setLocation(e.target.value)}
                                    />
            
                                    <hr style={{marginBottom : "0px" , marginTop : "0px" , width : "97%"}}/>
                                </CardBody>
                                <CardFooter style={{padding : "5px" , width : "100%", backgroundColor : "white" , border : "none" }}>
                                    
            
                                    <Input type="button" onClick={() => {
                                        startSpinner();
                                        // API call to add block
                                        var data = {
                                            loc : location ,
                                            itemid : itemid ,
                                            price ,
                                            qty
                                        }
                                        axios.post('/api/pendingblocks/' , data )
                                            .then(block => {
                                                console.log("Success!")
                                                setMessages("New Block added")
                                            }).catch(err => {
                                                setMessages("Error!")
                                            })

                                        stopSpinner()
                                        setVisible(true)
                                    }
                                    } value="Add Block" className="btn btn-primary"/>
                                </CardFooter>
                            </Card>
                        )}

            <br/>

            {
                (visible)?
                (
                    <Alert key={uuid()} color="info" isOpen={visible} toggle={onDismiss}>
                        {message}
                    </Alert>
                ):
                (
                    <div> </div>
                )
            }

        </div>
    )
}

// const mapStateToProps = state => {
//     return {

//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        createNote : (body) => dispatch(createNote(body))
    }
}


export default connect(null , mapDispatchToProps)(CreateNotes)
