import React from 'react';

class Cardio extends React.Component {
    state = {
        CardioMinutes: '',
        CardioDistance: ''
    }

    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state.CardioDistance + ' distance recorded');
        console.log(this.state.CardioMinutes + ' running time recorded');
    }

    render(){
        return(
            <div>
                <h3>Hello, how was your run today?</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Distance</label>
                    <input type="number" value={this.state.CardioDistance} onChange={e => this.setState({CardioDistance: e.target.value})} placeholder="Miles"/>
                    <label>Time</label>
                    <input type="number" value={this.state.CardioMinutes} onChange={e => this.setState({CardioMinutes: e.target.value})} placeholder="Minutes"/>
                    <button type="submit">Submit your Run</button>
                </form>
            </div>
        )
    }
}

export default Cardio;