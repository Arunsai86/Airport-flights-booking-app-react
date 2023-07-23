import "./index.css";

const EachItem = (props) => {
  const { eachItem, userInputs } = props;
  return (
    <li className="list-item">
      <div>
        <img
          src={eachItem.thumbnailUrl}
          alt="thumbnail"
          className="thumbnail"
        />
      </div>
      <div className="flight-details-container">
        <h1 className="flight-name">{eachItem.name}</h1>

        <p className="destination-text">
          {userInputs.startingPoint.slice(0, 5).toUpperCase()}-
          {eachItem.time.pickup}
        </p>
        <p className="destination-text">
          {userInputs.endingPoint.slice(0, 5).toUpperCase()}-
          {eachItem.time.dropoff}
        </p>
      </div>
      <div className="">
        <h6>price : {eachItem.price}</h6>
        <p className="date-font">{userInputs.selectedDate}</p>
        <button type="button" className="book-now-btn">
          Book Now
        </button>
      </div>
    </li>
  );
};
export default EachItem;
