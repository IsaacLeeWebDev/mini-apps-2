import React, { Component } from 'react';
import updateEvents from '../transport/updateEvents.js';

export default class List_Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      date              : this.props.event.date,
      description       : this.props.event.description,
      lang              : this.props.event.lang,
      category1         : this.props.event.category1,
      category2         : this.props.event.category2,
      granularity       : this.props.event.granularity,
      dateInput         : this.props.event.date,
      descriptionInput  : this.props.event.description,
      langInput         : this.props.event.lang,
      category1Input    : this.props.event.category1,
      category2Input    : this.props.event.category2,
      granularityInput  : this.props.event.granularity,
    }
    this.toggleMode = this.toggleMode.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
  }

  toggleMode() {
    this.setState({editMode: !this.state.editMode});
  }

  handleInputChange(field, value) {
    this.setState({ [field]:value })
  }

  submitUpdate() {
    updateEvents(this, {
      id          : this.props.id,
      date        : this.state.dateInput,
      description : this.state.descriptionInput,
      lang        : this.state.langInput,
      category1   : this.state.category1Input,
      category2   : this.state.category2Input,
      granularity : this.state.granularityInput,
    });
    this.toggleMode();
  }

  render() {
    console.log(this.state);
    if (!this.state.editMode) {
      return (
        <div>
          <div>
            <p>date: {this.state.date}</p>
          </div>
          <div>
            <p>description: {this.state.description}</p>
          </div>
          <div>
            <p>lang: {this.state.lang}</p>
          </div>
          <div>
            <p>category1: {this.state.category1}</p>
          </div>
          <div>
            <p>category2: {this.state.category2}</p>
          </div>
          <div>
            <p>granularity: {this.state.granularity}</p>
          </div>
          <div>
            <button onClick={this.toggleMode}>
              edit this event
            </button>
            <button onClick={() => alert('Feature not yet implemented')}>
              favorite this event
            </button>
          </div>
        </div>
      );
    } else if (this.state.editMode) {
      return (
        <div>
          <div>
            <p>date:</p>
            <p>{this.state.date}</p>
            <textarea id="dateInput" onChange={(event) => this.handleInputChange(event.target.id, event.target.value)} type="textarea" value={this.state.dateInput} />
          </div>
          <div>
            <p>description:</p>
            <p>{this.state.description}</p>
            <textarea id="descriptionInput" onChange={(event) => this.handleInputChange(event.target.id, event.target.value)} type="textarea" value={this.state.descriptionInput} />
          </div>
          <div>
            <p>lang:</p>
            <p>{this.state.lang}</p>
            <textarea id="langInput" onChange={(event) => this.handleInputChange(event.target.id, event.target.value)} type="textarea" value={this.state.langInput} />
          </div>
          <div>
            <p>category1:</p>
            <p>{this.state.category1}</p>
            <textarea id="category1Input" onChange={(event) => this.handleInputChange(event.target.id, event.target.value)} type="textarea" value={this.state.category1Input} />
          </div>
          <div>
            <p>category2:</p>
            <p>{this.state.category2}</p>
            <textarea id="category2Input" onChange={(event) => this.handleInputChange(event.target.id, event.target.value)} type="textarea" value={this.state.category2Input} />
          </div>
          <div>
            <p>granularity:</p>
            <p>{this.state.granularity}</p>
            <textarea id="granularityInput" onChange={(event) => this.handleInputChange(event.target.id, event.target.value)} type="textarea" value={this.state.granularityInput} />
          </div>
          <button onClick={this.submitUpdate} >Save</button>
          <button onClick={this.toggleMode}>Cancel</button>
        </div>
      );
    }

  }
}