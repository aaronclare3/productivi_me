import React from 'react';
import Motivation from './components/Motivation';
import axios from 'axios';
import Buttons from './components/Buttons';
import Cardio from './components/Cardio';
import Spiritual from './components/Spiritual';
import Study from './components/Study';

class App extends React.Component {
  state = {
    MotivationImages: '',
    isCardioTrue: false,
    isStudyTrue: false,
    isSpiritualTrue: false
  };

  

  getMotivationImages = async () => {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {query: 'motivation'},
      headers: {Authorization: 'Client-ID vE0h-guSKuieyv6imvOm_Wlrtt2Y7MUlEj2X3aCgQqY'}
    });
    this.setState({MotivationImages: response.data.urls.small});
    console.log(this.state.MotivationImages);
  }

  setActivityState = (activity) => {
    if(activity === 'cardio'){
      this.setState({
        isCardioTrue: true,
        isSpiritualTrue: false,
        isStudyTrue: false
      });
    }else if(activity === 'study'){
      this.setState({
        isCardioTrue: false,
        isSpiritualTrue: false,
        isStudyTrue: true
      });
    }else if(activity === 'spiritual'){
      this.setState({
        isCardioTrue: false,
        isSpiritualTrue: true,
        isStudyTrue: false
      });
    }
  }

  render(){
    return(
      <div>
        <Motivation motivationImage={this.state.MotivationImages} getMotivation={this.getMotivationImages}/>
        <Buttons setActivityState={this.setActivityState} />
        {this.state.isCardioTrue && <Cardio />}
        {this.state.isStudyTrue && <Study />}
        {this.state.isSpiritualTrue && <Spiritual />}
      </div>
    )
  }
}

export default App;
