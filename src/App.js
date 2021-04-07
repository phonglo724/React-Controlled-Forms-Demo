import { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    location: "",
    parkingSpots: 0,
    truckStops: []
  }

  // BELOW FUNCTION CHANGES THE STATE WITH "onChange". TO DO THAT, WE USE "setState". WHEN YOU CHANGE STATE, IT'S ALWAYS GOING TO BE THAT FUNCTION (setState).
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  // BELOW FUNCTION CHANGES THE STATE WITH "onSubmit". 
  handleSubmit = (event) => {
    event.preventDefault()
    const newTruckStop = {
      location: this.state.location,
      parkingSpots: this.state.parkingSpots
    }
    this.setState({
      truckStops: [...this.state.truckStops, newTruckStop] // this spread operator will keep your old values of truckStops because you NEVER want to mutate!
    })
    
    // POST TO PERSIST YOUR DATA IF YOU ARE SUBMITTING THIS TO THE BACKEND
    //   fetch(url, {
      //     method: "POST",
      //     headers: {
        //       "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(newTruckStop)
        //   })
      }

  showTruckStops = () => {
    return this.state.truckStops.map(truckStop => {
      return <li>
        <p>Location: {truckStop.location}</p>
        <p>Parking Spots: {truckStop.parkingSpots}</p>
      </li>
    })
  }
        
  render() {
    return (
      <div className="App"> 
        <h1>Truck Stop App</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Location</label>
          <input type="text" name="location" value={this.state.location} onChange={this.handleChange}/>
          <label>Number of Parking Spots</label>
          <input type="number" name="parkingSpots" value={this.state.parkingSpots} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
        <ul>
          {this.showTruckStops()}
        </ul>
        <div>
          <p>Truck Stop: {this.state.location}</p>
          <p>Number of Spots: {this.state.parkingSpots}</p>
        </div>
      </div>
    )
  }
}

export default App;



