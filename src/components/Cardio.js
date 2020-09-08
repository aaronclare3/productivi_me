import React from 'react';

class Cardio extends React.Component {
    render(){
        return(
            <div>
                <h3>Hello, how was your run today?</h3>
                <form>
                    <label>Distance</label>
                    <input type="number" placeholder="Miles"/>
                    <label>Time</label>
                    <input type="number" placeholder="Minutes"/>
                    <button type="submit">Submit your Run</button>
                </form>
            </div>
        )
    }
}

export default Cardio;