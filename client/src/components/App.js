import React from 'react';
import logo from '../assets/img/insubuy-logo.png';
import ComparisonModal from './ComparisonModal';
import PolicyResults from './PolicyResults';
import TravelForm from './TravelForm';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <img src={logo} alt="Insubuy Logo" />
                <h2>Travel Insurance</h2>
                <TravelForm />
                <PolicyResults />
                <ComparisonModal />
            </div>
        );
    }
}
