import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    
    button: {
      backgroundColor:'#2d2e7d',
      color:"White",
      paddingVertical:12,
          alignItems:'center',
          borderRadius:12
    },
    container:{
        backgroundColor: "white",
        padding:16,
        flex:1,
        alignContent:'center',
      
        justifyContent:'center'
     
    },
    incomeTextView:{
        backgroundColor: "white",
        color:"black",
        fontSize:24,
        marginBottom:20,
        fontWeight:'bold'
    },
    incomeTextInput:{
        borderWidth:1,
        borderRadius:12,
        borderColor:'black',
        color:"black",
        fontSize:24,
        marginBottom:20,
        fontWeight:'bold',
        padding:12
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
      },
  });