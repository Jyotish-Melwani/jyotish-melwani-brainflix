import React from "react"
import likes from "../Assets/Icons/likes.svg"
import views from "../Assets/Icons/views.svg"

function Description(props) {

    const dateGet = (dateVar) => {
        return ('0' + (dateVar.getMonth() + 1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear()
    }


    return (
        <div className="info">
            <h1 className="info__title">{props.content.title}</h1>
            <div className="info-divider">
                <div className="info-user">
                    <p className="info-user__channel">By {props.content.channel}</p>
                    <p className="info-user__date">{dateGet(new Date(Number(props.content.timestamp)))}</p></div>
                <div className="info-social">
                    <p className="info-social__viewcount">
                        <img className="info-social__viewIcon" src={views} alt="view count icon">
                        </img>{props.content.views}</p>

                    <p className="info-social__likecount">
                        <img className="info-social__likeIcon" src={likes} alt="like count icon">
                        </img>{props.content.likes}</p>
                </div>
            </div>
            <p className="info__description">{props.content.description}
            </p>
            <h4 className="info__comments">3 Comments</h4>
        </div>
    )
}

export default Description