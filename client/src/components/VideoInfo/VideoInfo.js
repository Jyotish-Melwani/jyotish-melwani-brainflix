import Viewicon from '../../Assets/Icons/views.svg'
import Likeicon from '../../Assets/Icons/likes.svg'
import './VideoInfo.scss'
import { dateGet } from '../../Helpers/Api';

function VideoInfo({content, handleOnClick}) {

    return (
        <div className="info">
            <h1 className="info__title">{content.title}</h1>
            <div className="info-divider">
                <div className="info-user">
                    <p className="info-user__data">By {content.channel}</p>
                    <p className="info-user__data-two">{dateGet(new Date(Number(content.timestamp)))}</p></div>
                <div className="info-social">
                    <p className="info-social__viewcount">
                        <img className="info-social__view-icon" src={Viewicon} alt="The View count icon"/>
                        {content.views}</p>
                    <p  className="info-social__likecount" >
                        <img id = {content.id}  onClick={handleOnClick} className="info-social__like-icon" src={Likeicon} alt="The Like count icon"/>
                        {content.likes}</p>
                </div>
            </div>
            <p className="info__description">{content.description}
            </p>
        </div>
    )
};

export default VideoInfo