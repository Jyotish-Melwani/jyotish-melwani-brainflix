import './Hero.scss'

function Hero(props) {

    return (

        <div key = {props.id} className="hero">
            <div className="hero-thumbWrapper">
                <video className="hero__img" width="470" height="255" src = {props.source} poster={props.content}  controls/>
            </div>
        </div>
    )

};


export default Hero



