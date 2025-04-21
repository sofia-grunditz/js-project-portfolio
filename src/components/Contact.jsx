const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Let's talk</h2>
      <p>If you'd like to get in touch, feel free to connect with me.</p>
      <img
        src="https://media.licdn.com/dms/image/v2/D4D03AQHWEWzpKrj68g/profile-displayphoto-shrink_800_800/B4DZUJMZ5OHIAc-/0/1739616002532?e=1750896000&v=beta&t=ZmnSJeBUPKitAPWwg3EgGzGHpFT0VS8EEUXQ_UAUGXs"
        alt="Sofia Grunditz"
        className="contact-image"
      />

      {/* TickerTape-SVG längst ner */}
      <div className="ticker-container">
        <img src="/TickerTape.svg" alt="Ticker Tape Animation" className="ticker-svg" />
      </div>
    </section>
  );
};

export default Contact;
