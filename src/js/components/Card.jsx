import PropTypes from "prop-types";

const Card = (props) => {

    return (
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card h-100">
                        <img src={`https://randomuser.me/api/portraits/lego/${props.imageSource}.jpg`} className="card-img-top" alt={props.title} />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.text}</p>
                            <a href={`https://github.com/${props.buttonUrl}`} className="btn btn-primary">{props.buttonText}</a>
                        </div>
                    </div>
                </div>
    )
};

Card.propTypes = {
    imageSource: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonText: PropTypes.string,
}

Card.defaultProps = {
    imageSource: "2",
    title: "Giovanni",
    text: "Alumno de 4Geeks Academy",
    buttonUrl: "giok2154",
    buttonText: "Más información",
}

export default Card