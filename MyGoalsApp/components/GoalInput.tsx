import { Component } from "react";
import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native'

interface Props {
onAddGoal:Function
onCancel:any
Modalvisible:boolean
}

interface State {
  enteredGoalText:any

}


class GoalInput extends Component<Props, State> {

    constructor(props:Props) {
        super(props)
        this.state = {
          enteredGoalText: '',
        }
      }

    goalInputHandler = (enteredText:any) => {
        this.setState({enteredGoalText: enteredText})
  }
  addInputGoalHandler = () => {
    this.props.onAddGoal(this.state.enteredGoalText)
  }
    render() {
        return (
            <Modal visible={this.props.Modalvisible} animationType="slide" >
           <View style={styles.inputContainer}>
            <Image source={require('../assests/goal.png')} style={styles.image}/>
           <TextInput placeholder="Your Course goal"      
           style={styles.textInput}

           onChangeText={this.goalInputHandler}
           />
           <View style={styles.buttonContianer}>
            <View  style={styles.button}>
           <Button title="Add Goal" onPress={this.addInputGoalHandler} color={"#b180f0"}/>
           </View>
           
           <View style={styles.button}>   
           <Button title="Cancel" onPress={this.props.onCancel} color={"#f31282"} />
           </View>
           </View>
                   
          </View>
          </Modal>
        )
    }
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        padding:16,
        backgroundColor: '#311b6b'
      },
      textInput:{
          borderWidth:1,
          borderColor: '#e4d0ff',
          backgroundColor: '#e4d0ff',
          color: '#120438',
          width:'100%',
          padding:16,
          
      },
      buttonContianer: {
        flexDirection:'row'
      },
      button:{
        width:100,
        marginHorizontal:8,
        marginTop: 16
      
      },
      image : {
        width:150,
        height: 150,
        margin: 20
      }
})
