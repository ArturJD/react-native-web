import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import { Spring, config } from 'react-spring/renderprops'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      flag: false
    }
  }

  _toggleFlag(){
    this.setState({
      flag: !this.state.flag
    })
  }

  render() {
    return (
      <Spring 
        //showAndHide={{opacity: 1}, {opacity: 0}}
        from={{ opacity: 0, marginLeft: -60 }} 
        to={{ opacity: 1, marginLeft: 0 }} 
        config={config.slow}
        >
        {props=>(
          <View style={styles.container}>
            <Text style={props}>Um app react native na interwebs 😎</Text>
            <Button title='Teste' onPress={() => { alert('Só funfa o alert padrãozinho'); this._toggleFlag() }} />
          </View>
        )}
      </Spring>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
