import { Component } from "react";
import {Button, StyleSheet, View, FlatList} from 'react-native'
import GoalInput from "./components/GoalInput"
import {GoalItems} from "./components/GoalItems"
interface Props {

}

interface State {  
  courseGoals:any
  modalIsVisible:boolean
}

class App extends Component<Props, State> {

  constructor(props:Props) {
    super(props)
    this.state = {      
      courseGoals: [],
      modalIsVisible:false

    }
  }

   
  startGoalHandler = () => {
      this.setState({modalIsVisible: true})
  }
  endGoalHandler = () => {
    this.setState({modalIsVisible: false})
  }
  
    addGoalHandler = (text:any) => {            
        this.setState({courseGoals: [...this.state.courseGoals, {text: text, id: Math.random().toString()}]},()=>{          
        })   
        this.setState({modalIsVisible: false})     
    }

    deleteGoalHandler = (id:any) => {        
      this.setState({courseGoals: this.state.courseGoals.filter((goal:any)=> goal.id !== id)})
    }
 
    render() {
      return(
      <View style={styles.appContainer}>
          <Button title="Add New Goal" onPress={this.startGoalHandler} color={"#a065ec"}/>
          {this.state.modalIsVisible && <GoalInput onAddGoal={this.addGoalHandler} 
          Modalvisible={this.state.modalIsVisible}
          onCancel={this.endGoalHandler}
          />}
          

          <View style={styles.goalsContainer}>
        
          <FlatList 
          data={this.state.courseGoals} 
          renderItem={(itemData)=>{return (<GoalItems text={itemData.item.text} 
          id={itemData.item.id}
          onDeleteItem={this.deleteGoalHandler}
          />)}}
          keyExtractor={(i)=>{return i.id}}
          />

          </View>

      </View>
      )
    }
}

export default App

const styles = StyleSheet.create({
  appContainer: {
      paddingTop: 50,
      paddingHorizontal: 16,
      flex:1,
      backgroundColor: '#1e085a', 
  },
 
  goalsContainer:{
    flex: 5,
  },
 

})