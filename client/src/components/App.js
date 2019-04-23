import React from 'react';
import ComparisonModal from './ComparisonModal';
import PolicyResults from './PolicyResults';
import TravelForm from './TravelForm';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <TravelForm />
                <PolicyResults />
                <ComparisonModal />
            </div>
        );
    }
}
