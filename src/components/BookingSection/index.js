import { Component } from "react";
import { MdLocationOn, MdArrowForward } from "react-icons/md";
import EachItem from "../EachItem";

import "./index.css";

class BookingSection extends Component {
  state = {
    startingPoint: "",
    endingPoint: "",
    selectedDate: "",
    data: [],
    errMsg: false,
  };

  getFetchData = async () => {
    const url = "db.json";
    const options = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const response = await fetch(url, options);
    if (response.ok === true) {
      const data = await response.json();
      this.setState({ data: data });
    }
  };

  onChangeStartingPoint = (event) => {
    this.setState({ startingPoint: event.target.value });
  };

  onChangeEndingPoint = (event) => {
    this.setState({ endingPoint: event.target.value });
  };

  onChangeDate = (event) => {
    this.setState({ selectedDate: event.target.value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const { startingPoint, endingPoint, selectedDate } = this.state;
    if (startingPoint === "" || endingPoint === "" || selectedDate === "") {
      this.setState((prevState) => ({
        errMsg: true,
      }));
    } else {
      this.setState((prevState) => ({
        errMsg: false,
      }));
      this.getFetchData();
    }
  };

  renderData = () => {
    const { startingPoint, endingPoint, selectedDate, data } = this.state;
    const userInputs = {
      startingPoint,
      endingPoint,
      selectedDate,
    };
    // console.log(userInputs);
    return (
      <ul className="details-section">
        {data.map((eachDetails) => (
          <EachItem
            key={eachDetails.id}
            eachItem={eachDetails}
            userInputs={userInputs}
          />
        ))}
      </ul>
    );
  };

  render() {
    const {
      startingPoint,
      endingPoint,
      selectedDate,
      data,
      errMsg,
    } = this.state;
    // console.log(data);
    return (
      <div className="booking-section">
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <div className="input-container">
            <MdLocationOn />
            <input
              type="text"
              value={startingPoint}
              placeholder="From : Start typing your pickup location"
              onChange={this.onChangeStartingPoint}
            />
          </div>
          <div>
            <MdArrowForward />
          </div>
          <div className="input-container">
            <MdLocationOn />
            <input
              type="text"
              value={endingPoint}
              placeholder="To : Start typing your dropoff location"
              onChange={this.onChangeEndingPoint}
            />
          </div>
          <div className="date-container">
            <input
              type="date"
              value={selectedDate}
              placeholder="pick your date"
              onChange={this.onChangeDate}
            />
          </div>
          <div className="submit-container">
            <button type="submit" className="search-btn">
              Search
            </button>
          </div>
        </form>
        {errMsg && <p className="error-msg">Provide Valid Inputs</p>}
        {data.length > 0 && this.renderData()}
      </div>
    );
  }
}
export default BookingSection;
