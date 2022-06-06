import { Component } from 'react'
import {API_KEY, API_URL} from '../../Helpers/Api.js'
import './Comments.scss'

import axios from 'axios'



class Comments extends Component {

    state = {
        comments: this.props.selectedVideo.comments
    }

    // need to move this

    // axios functions

    getComments = (id) => {
        return axios.get(`${API_URL}videos/${id}/?api_key=${API_KEY}`).then(response => {
            this.setState({
                comments: response.data.comments
            })
        }).catch(err => console.log(err))
    }

    postNewComments = (id, newComment) => {
        return axios.post(`${API_URL}videos/${id}/comments?api_key=${API_KEY}`, newComment).then(response => {
            this.getComments(id)
        }).catch(err => console.log(err))
    }

    deleteComments = (id, commentsId) => {
        return axios.delete(`${API_URL}videos/${id}/comments/${commentsId}?api_key=${API_KEY}`).then(response => {
            this.getComments(id)
        }).catch(err => console.log(err))
    }

    // has to be aligned with other state, within 

    // function names more BEM style


    // event handler functions
    submitCommentHandler  = (event) => {
        event.preventDefault()
        const newComment = {
            "name": "Anonymous",
            "comment": event.target.comments.value
        }
        if (this.props.match.path === "/") {
            this.postNewComments(this.props.vidArray[0].id, newComment)
            event.target.comments.value = ""
        }
        else {
            this.postNewComments(this.props.match.params.id, newComment)
            event.target.comments.value = ""
        }
    }


    deleteCommentHandler = (event) => {
        event.preventDefault()
        let commentsId = event.target.id
        if (this.props.match.path === "/") {
            this.deleteComments(this.props.vidArray[0].id, commentsId)
        } else {
            this.deleteComments(this.props.match.params.id, commentsId)
        }
    }

    defaultCommentHandler = (event) => {
        event.preventDefault()
        alert("Default comment")
    }

    // handledetelecomment, submitcomment, name the intention behind it

    // Lifecycle Function
    componentDidUpdate(prevProps) {

        if (this.props.match.path === "/" && prevProps.match.params.id !== this.props.match.params.id) {
            this.getComments(this.props.vidArray[0].id)
        }

        if (prevProps.match.params.id !== this.props.match.params.id && this.props.match.path !== "/") {
            this.getComments(this.props.match.params.id)

        }
    }

    // will go away once state has been moved


    // functions
    formatDate = (dateVar) => {
        return ('0' + (dateVar.getMonth() + 1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear()
    }


    // should be moved to Helper folder and pull functions from there

    createForm = (className, comment, behaviour) => {
        return (<form id={comment.id} key={comment.id} className="commentsLoaded" onSubmit={this.deleteCommentHandler}>
            <li className="commentsLoaded-top">
                <div className={className}></div>
                <p className="commentsLoaded-top__account">{comment.name}</p>
                <p className="commentsLoaded-top__date">{this.formatDate(new Date(Number(comment.timestamp)))}</p>
            </li>
            <li className="commentsLoaded-bottom">
                <p className="commentsLoaded-bottom__comment">{comment.comment}</p>
                <button className="commentsLoaded__delete" onClick = {behaviour} >X</button>
            </li>
        </form>)
    }

    // can be its own component

    // have the wrapper be in a list form rather than "form" - wrapit in a li 


    render() {
        return (

            <div className="commentsAll">
                <h4 className="commentsAll__commentsnum">{this.state.comments.length} Comments</h4>

                <form className="comments" onSubmit={this.submitCommentHandler }>
                    <div className="comments__mohan"></div>
                    <label className="comments__label" htmlFor="text">JOIN THE CONVERSATION</label>
                    <textarea className="comments__input" id="text" placeholder="Write comment here" name="comments" required></textarea>
                    <button className="comments__button">COMMENT</button>
                </form>

                {this.state.comments.sort((a, b) => {
                    return b.timestamp - a.timestamp
                }).map((comment) => {

                    if (comment.name !== "Anonymous") {
                        return this.createForm("commentsLoaded-top__circle", comment, this.defaultCommentHandler)
                    }
                    else {

                        return this.createForm("commentsLoaded-top__circle-mohan", comment)

                    }
                })}
            </div>

        )
    }
}




export default Comments