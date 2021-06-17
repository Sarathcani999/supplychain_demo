import React ,{ useState, useEffect } from 'react'
import { Card , CardBody , CardHeader , Button } from 'reactstrap'
import { connect } from 'react-redux'
import {deleteNote} from '../../../../../redux/index'

function Note(props) {
    let [month , setMonth] = useState('')
    let [year , setYear] = useState('')
    let [day , setDay] = useState('')

    useEffect(() => {
        var d = new Date(props.date)
        var month = [
            "January" 
            ,"February" 
            ,"March" 
            ,"April" 
            ,"May" 
            ,"June"
            ,"July"
            ,"August"
            ,"September"
            ,"October"
            ,"November"
            ,"December"]

        var monthName = month[d.getMonth()];

        setMonth(monthName)
        setDay(d.getDate())
        setYear(d.getFullYear())
    } , [props.date])
    return (
        <div style={{marginBottom : "10px"}}>
            <Card>
                <CardHeader>
                    <p>{day} {month} , {year} 
                    <Button 
                    style={{color : "red"}} 
                    onClick={() => {
                        props.deletePost(props.id)
                        }} 
                    close /> </p>
                </CardHeader>
                <CardBody>
                    <p className="lead">{props.body}</p>
                </CardBody>
            </Card>
        </div>
    )
}

const mapDispatchTOProps = dispatch => {
    return {
        deletePost : (id) => dispatch(deleteNote(id))
    }
}

export default connect(null , mapDispatchTOProps)(Note)
