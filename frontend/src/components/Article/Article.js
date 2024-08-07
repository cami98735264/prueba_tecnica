import "./Article.css";
import formatDate from "../../utils/utilFunctions/formatDate.js";

const Article = ({ title, author, description, imageUrl, redirectUrl, publishedAt }) => {
    const handleImageNotLoaded = (event) => {
        event.target.src = "https://via.placeholder.com/100";
        // Replace original image with a placeholder image in case the original image is not loaded
    }
    return (
        <div className="article" onClick={() => window.open(redirectUrl, "_blank")}>
            <div className="article-image">
                <img src={imageUrl} alt={title} onError={handleImageNotLoaded}  />
            </div>
            <div className="article-content">
                <div className="article-header">
                    <h2 className="article-title">{title}</h2>
                    <p className="article-author">{author}</p>
                </div> {/* Divided them into two container sections (header & body) for scalability, in case we needed to implement more elements inside the article-content layout*/}
                <div className="article-body">
                    <p className="article-description">{description}</p>
                </div>
                <div className="article-footer">
                    <p className="article-published-at">{formatDate(publishedAt)}</p>
                </div>
            </div>
        </div>)
}

export default Article;