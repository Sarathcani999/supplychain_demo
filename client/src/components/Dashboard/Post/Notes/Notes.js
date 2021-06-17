import React , {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchNotes } from '../../../../redux'
import Note from './Note/Note'

function Notes(props) {
    let {fetchNotes} = props
    useEffect(() => {
        fetchNotes()
    } , [fetchNotes])

    return (
        <div>
            {props.notes.map(note => <Note key={note._id} id={note._id} body={note.body} date={note.date}/>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        notes : state.note.notes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchNotes : () => dispatch(fetchNotes())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Notes)
