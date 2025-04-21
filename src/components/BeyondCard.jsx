const BeyondCard = ({ title, description, image, link, buttonType = "portfolio" }) => {
  return (
    <div className="beyond-card">
      <img src={image} alt={title} className="beyond-image" />
      <div className="beyond-content">
        <h3>{title}</h3>
        <p>{description}</p>

        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={buttonType === "article" ? "/readarticle.svg" : "/ViewPortfolio.svg"}
              alt={buttonType === "article" ? "Read Article" : "View Portfolio"}
              className="portfolio-button"
            />
          </a>
        )}
      </div>
    </div>
  );
};


export default BeyondCard;
