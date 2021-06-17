import React from 'react'
    // ListGroup , 
    // ListGroupItem , 
    // Button , 
    // Input , 
    // InputGroup , 
    // InputGroupAddon ,
    // Spinner  
import { Container 
} from 'reactstrap'
import { connect } from 'react-redux'
import { createItem , deleteItem } from '../../redux/index'
import User from './User/User'
import Posts from './Post/Post'

function List(props) {
    
    return (
        <Container>
            <User />
            <Posts />
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
