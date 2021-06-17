import React, { Component } from 'react'
import { Container , 
    ListGroup , 
    ListGroupItem , 
    Button , 
    Input , 
    InputGroup , 
    InputGroupAddon , 
    Alert 
} from 'reactstrap'
import uuid from 'react-uuid'
import { connect } from 'react-redux'

export default class ShoppingList extends Component {
    state = {
        items : [
            {id : uuid() , name : "Milk"} ,
            {id : uuid() , name : "Stake"} ,
            {id : uuid() , name : "Eggs"}
        ] ,
        itemName : "" ,
        showAlert : false
    }

    deleteItemHandler = (id) => {
        this.setState({
            items : this.state.items.filter(item => item.id !== id)
        })
    }

    onChangeHandler = (event) => {
        this.setState({
            itemName : event.target.value
        })
        this.onDismiss()
    }

    addItemHandler = () => {
        let itemName = this.state.itemName
        console.log(itemName)
        if(itemName !== '') {
            this.setState({
                items : [...this.state.items , { id : uuid() , name : itemName}]
            })

            this.setState({
                itemName : ''
            })
        } else {
            this.setState({
                showAlert : true
            })
            // console.log("Enter valid name")
        }
    }

    onDismiss = () => this.setState({showAlert : false});

    render() {
        return (
            <Container>
                <InputGroup style={{marginBottom : '1rem'}}>
                    <Input placeholder="Item Name" onChange={this.onChangeHandler} value={this.state.itemName}/>
                    <InputGroupAddon addonType="prepend"><Button onClick = {this.addItemHandler}
                    style={{borderBottomRightRadius : 5 , borderTopRightRadius : 5}}
                    >
                        Add Item
                        </Button>
                    </InputGroupAddon>
                </InputGroup>

                {this.state.showAlert ? (<Alert color="warning" isOpen={this.state.showAlert} toggle={this.onDismiss}>
                                             No Text
                                        </Alert>) : <span></span>}

                <ListGroup>
                
                    {this.state.items.map(item => (
                    <ListGroupItem key={item.id}>
                        {item.name}
                        <Button onClick={() => this.deleteItemHandler(item.id)} close />
                    </ListGroupItem>))}
                </ListGroup>
            </Container>
        )
    }
}
