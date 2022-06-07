import React from "react"
import likes from "../../Assets/Icons/likes.svg"
import views from "../../Assets/Icons/views.svg"
import "./Description.scss"
import getDate from "../../Helpers/Time"

function Description({content}) {

    // const getDate = (dateVar) => {
    //     return ('0' + (dateVar.getMonth() + 1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear()
    // }

    // need to export this function and import through helper folder


    return (
        <div className="info">
            <h1 className="info__title">{content.title}</h1>
            <div className="info-divider">
                <div className="info-user">
                    <p className="info-user__channel">By {content.channel}</p>
                    <p className="info-user__date">{getDate(new Date(Number(content.timestamp)))}</p></div>
                <div className="info-social">
                    <p className="info-social__viewcount">
                        <img className="info-social__viewIcon" src={views} alt="view count icon">
                        </img>{content.views}</p>

                    <p className="info-social__likecount">
                        <img className="info-social__likeIcon" src={likes} alt="like count icon">
                        </img>{content.likes}</p>
                </div>
            </div>
            <p className="info__description">{content.description}
            </p>
        </div>
    )
}

export default Description