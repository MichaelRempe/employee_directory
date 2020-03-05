import React, { Component } from "react";
import Hero from "../Hero";
import Container from "../Container";
import EmployeeCard from "../EmployeeCard";

import API from "../../util/API";

class SearchTable extends Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = {
      keypress: "",
      results: []
    };
  }

  //   query the API as soon as the component mounts app.js
  componentDidMount() {
    // @ DEVELOP: testing the API
    // API.getEmployees().then(res => {
    //   console.log(res);
    // });
    // @ PRODUCTION: altering state w/API
    API.getEmployees()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  }

  updateSearch = e => {
    // captures target name and value of an event, should reflect key and value to be updated in state
    // pass name + value to update state key:value pair by the same name
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    let searchResult = this.state.results.filter(employee => {
      return (
        employee.name.last
          .toLowerCase()
          .indexOf(this.state.keypress.toLowerCase()) !== -1
      );
    });
    let searchStyle = {
        paddingTop:"4rem",
        paddingBottom:"2rem"
    }
    return (
      <div>
        <Hero>
          <h1>Employee Tracker</h1>
          <h2>Tracking your assets, company wide.</h2>
        </Hero>
        <Container>
          <form >
            <div className="form-group" style={searchStyle}>
              <label htmlFor="keypress"><h4>Search:</h4></label>
              <input
                name="keypress"
                type="text"
                className="form-control from-control-lg"
                placeholder="Search your Employees' by last name"
                id="keypress"
                onChange={this.updateSearch.bind(this)}
                value={this.state.keypress}
              />
            </div>
          </form>
          <ul className="list-group">
            {searchResult.map(employee => (
              <EmployeeCard key={employee.login.uuid} data={employee}  />
            ))}
          </ul>
        </Container>
      </div>
    );
  }
}

export default SearchTable;
