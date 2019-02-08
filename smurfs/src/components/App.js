import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getSmurfs, addSmurf } from '../actions'
import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        {this.props.fetchingSmurfs ? <p>Loading Smurfs</p> : <SmurfList smurfs={this.props.smurfs}/>}
        <SmurfForm addSmurf={this.props.addSmurf}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfReducer.smurfs,
  fetchingSmurfs: state.smurfReducer.fetchingSmurfs,
  error: state.smurfReducer.error
})

export default connect(
  mapStateToProps,
  {
    getSmurfs,
    addSmurf
  }
)(App)


