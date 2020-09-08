import React from 'react';

class Study extends React.Component {
    state = {StudyMinutes: ''}

    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state.StudyMinutes + ' study minutes logged');
    }

    render(){
        return(
            <div>
                <h3>Hello, how was your study time today?</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Time</label>
                    <input type="number" value={this.state.StudyMinutes} onChange={e => this.setState({StudyMinutes: e.target.value})} placeholder="Minutes"/>
                    <button type="submit">Submit your Study Time</button>
                </form>
            </div>
        )
    }
}

export default Study;