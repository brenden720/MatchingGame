import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import Card from './card.js';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: {},
      // currentHash: {},
      // count: 0,
      isDisplayed: false,
    };
    // this.selectTwo = this.selectTwo.bind(this);
    this.buttonPress = this.buttonPress.bind(this);
  }

  // componentDidMount() {

  // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     setTimeout(() => {
  //       this.buttonPress();

  //     }, 3000);
  //     this.buttonPress();
  //   }, 1000);
  // }

  // stateChange() {
  //   let changeDisplay = this.state.isDisplayed;
  //   this.setState({
  //     isDisplayed: !changeDisplay,
  //   });
  //   return this.state.isDisplayed;
  // }

  buttonPress() {
    // let currentState = this.state;
    // currentState.isDisplayed = !this.state.isDisplayed;
    // this.setState({currentState});
    this.setState({
      isDisplayed: !this.state.isDisplayed,
    });
  }

  chooseCard(length) {
    return Math.floor(Math.random() * length);
  }

  // selectTwo(key) {
  //   let currentState = this.state;
  //   if (currentState.currentHash[key] !== undefined && currentState.currentHash[key] < currentState.hash[key]) {
  //     currentState.currentHash[key] += 1;
  //   } else if (currentState.currentHash[key] === undefined ) {
  //     currentState.currentHash[key] = 1;
  //   } else {
  //     currentState.currentHash[key] = 0;
  //   }

  // }

  render() {
    const { navigate } = this.props.navigation;
    const cardImages = [
      ['./img/Card_diamond.png', require('./img/Card_diamond.png')],
      ['./img/Card_spade.png', require('./img/Card_spade.png')],
      ['./img/Card_heart.png', require('./img/Card_heart.png')],
      ['./img/Card_club.png', require('./img/Card_club.png')],
      ['./img/Card_dog.jpg', require('./img/Card_dog.jpg')],
      ['./img/Card_simba.png', require('./img/Card_simba.png')],
      ['./img/Card_dodo.png', require('./img/Card_dodo.png')],
      ['./img/Card_Friar.png', require('./img/Card_Friar.png')],
    ];
    let gridItems = [];
    for (let i = 0; i < 16; i++) {
      const currentImage = cardImages[this.chooseCard(cardImages.length)];
      if (this.state.hash[currentImage[0]] !== undefined && this.state.hash[currentImage[0]] < 2) {
        gridItems.push(<Card key={i} value={currentImage[1]} img={currentImage[0]} buttonPress={this.buttonPress} isDisplayed={this.state.isDisplayed}/>);
        let currentState = this.state;
        currentState.hash[currentImage[0]] += 1;
        this.setState = {currentState};
      } else if (this.state.hash[currentImage[0]] === undefined) {
        gridItems.push(<Card key={i} value={currentImage[1]} img={currentImage[0]} buttonPress={this.buttonPress} isDisplayed={this.state.isDisplayed}/>);
        let currentState = this.state;
        currentState.hash[currentImage[0]] = 1;
        this.setState = {currentState};
      } else {
        i -= 1;
      }
    }
    
    return (
      <View style={styles.pageContainer}>
        <View style={styles.gridContainer}>{gridItems}</View>
      </View>
    );
  }
}

export default Grid;

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    marginTop: 150,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 256,
  },
  buttonContainer: {
    margin: 2,
    padding: 10,
    height: 45,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: 'green'
  },
  button: {
    fontSize: 20,
    color: 'white'
  },
});