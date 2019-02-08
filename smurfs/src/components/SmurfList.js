import React from 'react'

class SmurfList extends React.Component {
    render() {
        return(
            <div>
                {this.props.smurfs.map((smurf, index) => {
                    return(
                        <div key={index}>
                            <p>{smurf.name}</p>
                            <p>{smurf.age}</p>
                            <p>{smurf.height}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default SmurfList