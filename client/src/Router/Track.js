import React, {useState}  from 'react'
import { Container ,Button, Card , CardTitle , CardText , CardHeader , CardBody , Input } from 'reactstrap'
import AppNavbar from '../components/AppNavbar' 
// import '../App.css'

function Track() {
    
    const [itemid,setItemid] = useState('');

    return (
        <div >
            <AppNavbar />
            <center>
            <Input
                required
                style={{ width : "80%"}}
                type="text"
                value={itemid}
                placeholder="Item ID"
                onChange={e => setItemid(e.target.value)}
            />
            <br/>
            <Button color="primary" size="lg" style={{ width : "80%"}}>Track</Button>
            </center>

        </div>
    )
}

export default Track
