import './Comments.scss'
import { Component } from 'react'
import { dateGet } from '../../helpers/api';

// import not working?

class Comments extends Component {

    // block default comments from being deleted
    blockOnDelete = (event) => {
        event.preventDefault();
        alert("Nope, not allowed");
    };

    // import from helper not working, so pasted function again
    dateGet = (dateVar) => {
        return ('0' + (dateVar.getMonth() + 1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear();
    };

    // function to create form

    createForm = (className, comment, del) => {
        return (<form id={comment.id} key={comment.id} className="commentsLoaded" onSubmit={this.props.handleOnDelete}>
            <div className="commentsLoaded-top">
                <div className={className}></div>
                <p className="commentsLoaded-top__name">{comment.name}</p>
                <p className="commentsLoaded-top__date">{this.dateGet(new Date(Number(comment.timestamp)))}</p>
            </div>
            <div className="commentsLoaded-bottom">
                <p className="commentsLoaded-bottom__comment">{comment.comment}</p>
                <button className="commentsLoaded__delete" onClick = {del} >X</button>
            </div>
        </form>)
    };

    


    render() {
        return (

            <div className="commentsAll">
                <h4 className="commentsAll__commentsnum">{this.props.comments.length} Comments</h4>

                <form className="comments" onSubmit={this.props.handleOnSubmit}>
                    <div className="comments__mohan"></div>
                    <label className="comments__label" htmlFor="text">JOIN THE CONVERSATION</label>
                    <textarea className="comments__input" id="text" placeholder="Write comment here" name="comments" required></textarea>
                    <button className="comments__button">COMMENT</button>
                </form>

                {this.props.comments.sort((a, b) => {
                    return b.timestamp - a.timestamp
                }).map((comment) => {

                    if (comment.name !== "Anonymous") {
                        return this.createForm("commentsLoaded-top__circle", comment, this.blockOnDelete)
                    }
                    else {

                        return this.createForm("commentsLoaded-top__circle-mohan", comment)

                    }
                })}
            </div>

        );
    }
};




export default Comments