function Videolist(props) {

    return (
        <div className="videoList">
            <h5 className="videoList__header">NEXT VIDEOS</h5>
            {props.list.map((video) => {

                    return <div key={video.id} onClick={() => props.clickHandler(video.id)} className="videoList__desc">
                        <div className="videoList__container" ><img className="videoList__thumbnail" src={video.image} alt="Thumbnail"></img></div>
                        <div className="videoList__desc--inner">
                            <h4 className="videoList__desc--title">{video.title} &nbsp;&nbsp;</h4>
                            <p className="videoList__desc--channel">{video.channel}</p>
                        </div>
                    </div>
                }
            )}
        </div>

    )

}


export default Videolist


