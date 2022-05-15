function Comments(props) {

    let getDate = (dateVar) => {
        return ('0' + (dateVar.getMonth() + 1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear()
    }
    return (
        <>
            {props.comments.map((comment) => {
                return (<div key={comment.id} className="commentSection" >
                    <div className="commentSection-top">
                        <div className="commentSection__top-avatar"></div>
                        <div className="commentSection__top-break">
                        <p className="commentSection__top--name">{comment.name}</p>
                        <p className="commentSection__top--date">{getDate(new Date(Number(comment.timestamp)))}</p>
                        </div>
                    </div>
                    <p className="commentSection__bottom">{comment.comment}</p>
                </div>)
            })}
        </>
    )
}

export default Comments
