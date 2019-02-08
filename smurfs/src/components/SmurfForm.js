import React from 'react'
import { addSmurf } from '../actions'
import { connect } from 'react-redux'

class SmurfForm extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            newSmurf: {
                name: '',
                age: '',
                height: ''
            }
        }
    }

    handleChanges = e => {
        this.setState({
            newSmurf: {
                ...this.state.newSmurf, 
                [e.target.name] : e.target.value
            }
        })
    }

    addSmurf = e => {
        this.props.addSmurf(this.state.newSmurf)
        this.setState({
            newSmurf: {
                name: '',
                age: '',
                height: ''
            }
        })
    }



    render() {
        return(
            <div>
                <form onSubmit = {this.addSmurf}>
                    <input
                    name="name"
                    type="text"
                    placeholder="name"
                    value={this.state.newSmurf.name}
                    onChange={this.handleChanges}
                    />
                    <input
                    name="age"
                    type="number"
                    placeholder="age"
                    value={this.state.newSmurf.age}
                    onChange={this.handleChanges}
                    />
                    <input
                    name="height"
                    type="text"
                    placeholder="height"
                    value={this.state.newSmurf.height}
                    onChange={this.handleChanges}
                    />
                    <button type="submit">Add New Smurf</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        addiingSmurf: state.smurfReducer.addiingSmurf,
        smurfs: state.smurfReducer.smurfs,
        error: state.smurfReducer.error
    }
}

export default connect(
    mapStateToProps,
    {
        addSmurf
    }
)(SmurfForm)