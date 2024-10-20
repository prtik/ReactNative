import React, { useState } from "react";
import {Text,View,StyleSheet,Button,FlatList,TextInput,ToastAndroid} from "react-native"
import { styles } from "./Style";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Routes from "../../navigation/Routes";
import { useNavigation } from "@react-navigation/native";
import { setIncome } from "../../redux/features/incomeSlice";

import {  useDispatch } from 'react-redux';
import { TouchableOpacity } from "react-native-gesture-handler";



export const FinanceInfoScreen = (props) => {
    const navigation = useNavigation();
    const [incomeAmount,setIncomeAmount] = useState(0);
    const dispatch = useDispatch();


      const handleStartExpenseTracking = (amount) => {
        if(amount !== 0){
          console.log("adsfadfdasfda",amount)
          dispatch(setIncome(amount));
          navigation.navigate(Routes.DASHBOARD_SCREEN)
        }else{
          ToastAndroid.show("Please enter amount",ToastAndroid.SHORT);
        }
       
      };

    return(

        <View style={styles.container}>
            <Text style={styles.incomeTextView}>Please Enter your Income</Text>

            <TextInput
            label="Amount"
            value={incomeAmount}
            placeholder="Enter Amount"
            placeholderTextColor={"#d2d2d2"}
            cursorColor={"black"}
            onChangeText={text => setIncomeAmount(text)}
            keyboardType="numeric"
            autoCapitalize="none"
            style={styles.incomeTextInput}
            />

            <TouchableOpacity
             onPress={()=>{handleStartExpenseTracking(incomeAmount)}}>
              <View style={styles.button}>
                <Text style={{color:"white",fontWeight:'bold'}}>Start Expense Tracking</Text>
              </View>
            </TouchableOpacity>
            {/* <Button
            mode="contained"
            onPress={()=>{handleStartExpenseTracking(incomeAmount)}}
            style={styles.button}
            title="Start Expense Tracking"
          /> */}

            
        </View>
    );
}

