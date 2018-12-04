import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: false,
      hash: {},
    };
  }
  componentDidMount() {
    setTimeout(() => {
      setTimeout(() => {
        this.buttonPress();
        
      }, 3000);
      this.buttonPress();
    }, 1000);
  }

  buttonPress() {
    let changeDisplay = this.state.isDisplayed;
    this.setState({
      isDisplayed: !changeDisplay,
    });
  }
// <TouchableHighlight onPress={() => navigate('HomeScreen')}>
//   <Grid />
// </TouchableHighlight>

  // stateChange() {
 
  // }

  render() {
    const { isDisplayed } = this.state;
    const img = this.props.value;
    console.log(this.props.img);
    console.log(this.state.hash);
    if (isDisplayed) {
      return(
        <TouchableHighlight onPress={() => {
          this.buttonPress();
          
        }}>
          <Image
            style={styles.cardImage }
            source={img}
            />     
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableHighlight onPress={() => {
          this.buttonPress();

          
        }}>
          <Image
            style={styles.cardImage}
            source={require('./img/Background_black.png')}
          />
        </TouchableHighlight>
      );
    }
  }
}
// const Card = (props) => {
//   // console.log(props.buttonPress());
//   if (props.isDisplayed) {
//     return (
//       <TouchableHighlight onPress={() => props.buttonPress()}>
//         <Image
//           style={styles.cardImage}
//           source={props.img}
//         />
//       </TouchableHighlight>
//     );
//   } else {
//     return (
//       <TouchableHighlight onPress={() => props.buttonPress()}>
//         <Image
//           style={styles.cardImage}
//           source={require('./img/Background_black.png')}
//         />
//       </TouchableHighlight>
//     );
//   }
// };

export default Card;

const styles = StyleSheet.create({
  cardImage: {
    width: 30,
    height: 42,
    margin: 2,
  },
});

