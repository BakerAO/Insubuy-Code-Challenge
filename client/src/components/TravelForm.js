import React from 'react';

export default class TravelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
            policyMax: '',
            citizenship: '',
            age: '',
            mailingState: ''
        };
    }

    handlePolicyMaxChange = (event) => {
        this.setState({ policyMax: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // send form to back-end, then load results page
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Policy Maximum
                    </label>
                    <select value={this.state.policyMax} onChange={this.handlePolicyMaxChange}>
                        <option value="50">$50,000</option>
                        <option value="100">$100,000</option>
                    </select>
                </form>
                <input type="submit" value="Submit" />
                <button>
                    Reset Form
                </button>
            </div>
        );
    }
}
