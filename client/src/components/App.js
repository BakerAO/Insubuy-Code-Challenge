import React from 'react';
import '../assets/styles/App.css';
import logo from '../assets/img/insubuy-logo.png';
import ComparisonModal from './ComparisonModal';
import PolicyResults from './PolicyResults';
import TravelForm from './TravelForm';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="header">
                    <img src={logo} alt="Insubuy Logo" />
                    <h2>Travel Insurance</h2>
                </div>
                <TravelForm />
                <PolicyResults /> 
                <ComparisonModal />
            </div>
        );
    }
}
