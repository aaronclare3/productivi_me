import React from 'react';

class Spiritual extends React.Component {
    render(){
        return(
            <div>
                <h3>Hello, how was your time with God today?</h3>
                <form>
                    <label>Time</label>
                    <input type="number" placeholder="Minutes"/>
                    <button type="submit">Submit your Time with God</button>
                </form>
            </div>
        )
    }
}

export default Spiritual;