import React from 'react';


class Motivation extends React.Component {
    componentDidMount(){
        this.props.getMotivation();
    }

    render(){
        return(
            <div>
                <img src={this.props.motivationImage} alt='motivational image'/>
            </div>
        )
    }
}

export default Motivation;