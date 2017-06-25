import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import Location from './components/Location/Location';
import Buttons from './containers/ButtonsContainer';
import Suggestion from './components/Suggestion/Suggestion';

import setLocation from './redux/actions/setLocation';
import { clearSuggestion } from './redux/actions/fetchSuggestion';


class App extends Component {
  render() {
  const { location, suggestion, card, clearSuggestion } = this.props;

    return (
      <div className="App">
        <Header />
        {
          !Object.keys(location).length &&
          <Location
            setLocation={this.props.setLocation}
          />
        }
        <Buttons />
        {
          !!Object.keys(suggestion).length &&
          <Suggestion
            suggestion={suggestion}
            clearSuggestion={clearSuggestion}
          />
        }
        <Card
          image="http://www.newschoolbeer.com/wp-content/uploads/2015/03/yardhouse_logo_lr.jpg"
          title="Yard House"
          cardText="Address, Reviews, Blah, Blah"
          link="https://yardhouse.com/home"
        />
        <Footer />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.location,
  suggestion: state.suggestion,
  card: state.card,
});;

const mapDispatchToProps = { setLocation, clearSuggestion };

export default connect(mapStateToProps, mapDispatchToProps)(App);
