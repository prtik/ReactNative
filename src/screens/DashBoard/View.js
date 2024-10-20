import React, {useState,useEffect}from "react";
import { Text, TouchableOpacity, View, Modal, TextInput, FlatList, Button,BackHandler,Alert } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import {  useSelector, useDispatch } from 'react-redux';
import { addCategory } from "../../redux/features/categorySlice";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../navigation/Routes";
import { styles } from "./Style";


export const DashboardScreen = (props) => {

    const income_amount = useSelector(state => state.incomeInfoReducer.amount);
    const categories = useSelector(state => state.categoryReducer.categories);
    const expenses = useSelector(state => state.expenses.expenses); 
     // Get categories from Redux
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false); // Control modal visibility
    const [categoryName, setCategoryName] = useState(""); // Input for new category


    const handleAddCategory = () => {
        if (categoryName) {
            dispatch(addCategory(categoryName)); // Dispatch action to add category
            setCategoryName(""); // Clear input
            setModalVisible(false); // Close modal
        }
    };

    useEffect(() => {
        const backAction = () => {
            Alert.alert('Exit', 'Are you sure you want to exit this app?', [
                {
                  text: 'No',
                  onPress: () => {},
                  style: 'cancel',
                },
                {
                  text: 'Yes',
                  onPress: () => {
                    BackHandler.exitApp();
                    //  RNExitApp.exitApp();
                  },
                },
              ]);
          return true;
        };
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
      }, []);
    
    return(

        <ScrollView style={styles.scrollViewContainer}>
            <View>
            <View>
            <Text>Your Income</Text>
            <Text>{income_amount}</Text>
             </View>

             <View style={{marginTop:16}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text>Transactions</Text>
                <TouchableOpacity  onPress={() => setModalVisible(true)}>
                <Text>Add Category</Text>
                </TouchableOpacity> 
                </View>

                  {/* Display Categories as a FlatList */}
                  <FlatList
                        data={categories}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {

                            const filteredExpenses = expenses.filter(itemss => itemss.category === item);

                            const totalAmount = filteredExpenses.reduce((sum, item) => sum + item.amount, 0);


                            return(
                                <TouchableOpacity
                                onPress={() => {
                                    console.log("Categoryy propss item====",item);
                                    navigation.navigate(Routes.CATEGORY_EXPENSE_SCREEN, { category: item })}} // Navigate to CategoryExpenseScreen
                                >
                                <View style={{ marginVertical: 10 }}>
                                    <Text>{item}</Text>
                                    <Text>₹{totalAmount}</Text>
                                </View>
                                </TouchableOpacity>
                            );

                           
                        }}
                    />
           
           
             </View>



             </View>

              {/* Modal for Adding Category */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '80%', padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
                        <Text>Add a New Category</Text>
                        <TextInput
                            placeholder="Enter category name"
                            value={categoryName}
                            onChangeText={setCategoryName}
                            style={{ borderBottomWidth: 1, marginVertical: 20, padding: 5 }}
                        />
                        <Button title="Add Category" onPress={handleAddCategory} />
                        <Button title="Cancel" color="red" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </ScrollView>
      
    );
}