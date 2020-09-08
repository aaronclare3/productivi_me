import React from 'react';

class Spiritual extends React.Component {
    state = {SpiritualTime: ''}

    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state.SpiritualTime + ' time with God logged');
    }

    render(){
        return(
            <div>
                <h3>Hello, how was your time with God today?</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Time</label>
                    <input type="number" value={this.state.SpiritualTime} onChange={e => this.setState({SpiritualTime: e.target.value})} placeholder="Minutes"/>
                    <button type="submit">Submit your Time with God</button>
                </form>
            </div>
        )
    }
}

export default Spiritual;