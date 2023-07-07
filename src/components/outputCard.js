import "./outputCard.css";
const OutputCard = ({ onlyInA, onlyInB, inBoth, combinedUnique }) => {
  return (
    <div class="outputCardContainer">
      <div class="outputCard">
        <h3>only In A</h3>
        <ul>
          {onlyInA.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
      <div class="outputCard">
        <h3>only In B</h3>
        <ul>
          {onlyInB.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
      <div class="outputCard">
        <h3>In Both</h3>
        <ul>
          {inBoth.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
      <div class="outputCard">
        <h3>Combined Unique</h3>
        <ul>
          {combinedUnique.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default OutputCard;
