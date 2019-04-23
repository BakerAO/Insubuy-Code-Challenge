import React from 'react';

export default class TravelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
            policyMax: 'Choose your policy maximum',
            citizenship: '',
            age: '',
            mailingState: ''
        };
    }

    handlePolicyMaxChange = (event) => {
        this.setState({ policyMax: event.target.value });
    }

    handleAgeChange = (event) => {
        this.setState({ age: event.target.value });
    }

    handleStartDateChange = (event) => {
        this.setState({ startDate: event.target.value });
    }

    handleEndDateChange = (event) => {
        this.setState({ endDate: event.target.value });
    }

    handleCitizenshipChange = (event) => {
        this.setState({ citizenship: event.target.value });
    }

    handleMailingStateChange = (event) => {
        this.setState({ mailingState: event.target.value });
    }

    handleResetClick = () => {
        this.setState({
            startDate: '',
            endDate: '',
            policyMax: 'Choose your policy maximum',
            citizenship: '',
            age: '',
            mailingState: ''
         });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // send form to back-end, then load results page
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Policy Maximum</label>
                    <select value={this.state.policyMax} onChange={this.handlePolicyMaxChange}>
                        <option value="50">$50,000</option>
                        <option value="100">$100,000</option>
                        <option value="250">$250,000</option>
                        <option value="500">$500,000</option>
                    </select>
                    <br /><br />

                    <label>Age</label>
                    <input type="text" value={this.state.age} onChange={this.handleAgeChange}/>
                    <br /><br />

                    <label>Travel Dates</label>
                    <input type="date" value={this.state.startDate} onChange={this.handleStartDateChange} min={Date.now()} />
                    <input type="date" value={this.state.endDate} onChange={this.handleEndDateChange} min={Date.now()} />
                    <br /><br />

                    <label>Citizenship</label>
                    <input type="text" value={this.state.citizenship} onChange={this.handleCitizenshipChange}/>
                    <br /><br />

                    <label>Mailing State</label>
                    <input type="text" value={this.state.mailingState} onChange={this.handleMailingStateChange}/>
                    <br /><br />
                </form>
                <input type="submit" value="Submit" />
                <button onClick={this.handleResetClick}>
                    Reset Form
                </button>
            </div>
        );
    }
}
