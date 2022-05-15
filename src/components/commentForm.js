import React from "react"
import add_comment from "../Assets/Icons/add_comment.svg"

function Commentform(props) {
    return (
        <form className="comments" onSubmit={props.defaultPrevent}>
            <div className="comments__avatar"></div>

            <div className="comments__container">
            <div className="comments__container-label">
            <label className="comments__label">JOIN THE CONVERSATION</label>
            <textarea className="comments__input" name="text" placeholder="Add a new comment"></textarea>
            </div>
            <button className="comments__button"><img className="comments__button-image" src={add_comment} alt="COMMENT"></img>COMMENT</button>
            </div>
        </form>

    )
}

export default Commentform