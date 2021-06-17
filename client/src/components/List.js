import React , { useState } from 'react'
import { Container , 
    ListGroup , 
    ListGroupItem , 
    Button , 
    Input , 
    InputGroup , 
    InputGroupAddon ,
    Spinner  
} from 'reactstrap'
import { connect } from 'react-redux'
import { createItem , deleteItem } from '../redux/index'
function List(props) {
    const [itemName, setitemName] = useState("")
    const[refresh , setRefresh] = useState(false)
    
    return (
        <Container>
            <InputGroup style={{marginBottom : '1rem'}}>
                <Input placeholder="Item Name" onChange={e => setitemName(e.target.value)} value={itemName}/>
                <InputGroupAddon addonType="prepend"><Button disabled={(itemName === '') ? true : false } onClick={() => {
                    setitemName('')
                    setRefresh(!refresh)
                    return props.addItem(itemName)
                }}
                style={{borderBottomRightRadius : 5 , borderTopRightRadius : 5}}
                >
                    Add Item
                    </Button>
                </InputGroupAddon>
            </InputGroup>
            
            <ListGroup>
                {props.items.map(item => (
                <ListGroupItem key={item._id}>
                    {item.name}
                    <Button onClick={() => {
                        setRefresh(!refresh)
                        return props.deleteItem(item._id)
                        }} style={{color : "red"}} close />
                </ListGroupItem>))}
            </ListGroup>

            {props.loading ? <center><Spinner color="dark" style={{marginTop : '1rem'}} /></center> : <div></div>}

        </Container>
    )
}

const mapStateToProps = (state) => ({
    items : state.item.items ,
    loading : state.item.loading
})

const mapDispatchToProps = dispatch => {
    return {
        addItem : (item) => dispatch(createItem(item)),
        deleteItem : (id) => dispatch(deleteItem(id))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(List)
