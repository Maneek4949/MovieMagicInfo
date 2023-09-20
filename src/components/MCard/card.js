import { Container,Row,Col } from "react-bootstrap";
import "./card.css"


function Mcard(movie){
    let img_src="https://image.tmdb.org/t/p/w500/"+movie.info.poster_path;
    return (
        <Container>
            <Row className="movie-container">
                <Col xs={12} sm={6} md={4} lg={3}>
                <div className="poster">
                    <img src={img_src} alt="poster"></img>
                </div>
                </Col>
                <Col xs={12} sm={6} md={8} lg={9}>
                <div className="movie-info">
                    <h2 className="title">{movie.info.original_title}
                    </h2>
                    <div className="box">
                    <p className="release-date"> RELEASE DATE: {movie.info.release_date}</p>
                    <p className="rating">RATING: {movie.info.vote_average}</p>
                    </div>
                    <p className="overveiw">{movie.info.overview}</p>
                </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Mcard;