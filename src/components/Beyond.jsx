import BeyondCard from "./BeyondCard";
import beyondData from "../data/beyondData";

const Beyond = () => {
  return (
    <section className="beyond">
      <h2 className="pink-title">Beyond the Code</h2>
      <div className="beyond-grid">
        {beyondData.map((item, index) => (
          <BeyondCard key={index} title={item.title} description={item.description} image={item.image} link={item.link} buttonType={item.buttonType} />
        ))}
      </div>
    </section>
  );
};

export default Beyond;
