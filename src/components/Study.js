import React from 'react';

class Study extends React.Component {
    render(){
        return(
            <div>
                <h3>Hello, how was your study time today?</h3>
                <form>
                    <label>Time</label>
                    <input type="number" placeholder="Minutes"/>
                    <button type="submit">Submit your Study Time</button>
                </form>
            </div>
        )
    }
}

export default Study;