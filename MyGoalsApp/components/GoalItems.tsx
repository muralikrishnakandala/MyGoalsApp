import { Component } from "react";
import { StyleSheet, Text, Pressable, Alert, View } from "react-native";

interface Props {
text:any
id:any;
onDeleteItem:any
}
interface State {

}

export class GoalItems extends Component<Props, State> {
    constructor(props:Props) {
        super(props) 
        this.state = {

        }
    }
    onDeleteItemHandler = () => {
            this.props.onDeleteItem(this.props.id)
    }
    render() {
        return (
            <View style={styles.goalItems}>
            <Pressable onPress={this.onDeleteItemHandler} android_ripple={{color:'#ddd'}}>

            <Text style={styles.goalText} >{this.props.text}</Text>

            </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    goalItems: {
        margin:8,
        backgroundColor: '#5e0acc',
        borderRadius:8
        
    },
    goalText:{        
        textAlign:'center',
        color: 'white',
        padding:8,
      }
})

