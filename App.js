import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {GameStatus, ButtonGroup, PlayerCard} from './components/index';
import {CHOICES} from './constants';
import {randomComputerChoice, getRoundOutcome} from './functions';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerChoice: {},
      computerChoice: {},
      result: '',
      win: 0,
      lose: 0,
      total: 0,
    }
  }
  onPressButton = playerChoice => {
    const foundChoice = CHOICES.find(choice => choice.name === playerChoice);
    const computerChoice = randomComputerChoice();
    const result = getRoundOutcome(playerChoice, computerChoice.name);
    const total = this.state.total + 1;
    let win = this.state.win;
    let lose = this.state.lose;
    if(result === 'Victory!')
      win++;
    else if(result === 'Defeat!')
      lose++;
    this.setState({
      playerChoice: foundChoice,
      computerChoice,
      result,
      win,
      lose,
      total,
    })
  };
  
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.gameStatusWrapper}>
          <GameStatus result={this.state.result} total={this.state.total} win={this.state.win} lose={this.state.lose}/>
        </View>
        <View style={styles.gamePlayWrapper}>
          <PlayerCard playerName='Player' choice={this.state.playerChoice}/>
          <Text>vs</Text>
          <PlayerCard playerName='Computer' choice={this.state.computerChoice}/>
        </View>
        <View style={styles.buttonGroupWrapper}>
          <ButtonGroup onPressButton={this.onPressButton}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#e9ebee',
  }, 

  gameStatusWrapper: {
    flex: 0.2,
    marginTop: 17,
  },

  gamePlayWrapper: { 
    flex: 0.4,
    margin: 10, 
    borderWidth: 2, 
    paddingTop: 65, 
    shadowRadius: 5, 
    paddingBottom: 65, 
    borderColor: 'grey', 
    shadowOpacity: 0.90, 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    justifyContent: 'space-around', 
    shadowColor: 'rgba(0,0,0,0.2)', 
    shadowOffset: { height: 5, width: 5 }, 
  }, 

  buttonGroupWrapper: {
    flex: 0.4,
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
});
