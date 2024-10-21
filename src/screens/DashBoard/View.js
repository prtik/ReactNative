import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  FlatList,
  Button,
  BackHandler,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {addCategory} from '../../redux/features/categorySlice';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../navigation/Routes';
import {styles} from './Style';
import {formatIncome} from '../../GlobalFunctions/formatNumbers';

export const DashboardScreen = props => {
  const income_amount = useSelector(state => state.incomeInfoReducer.amount);
  const categories = useSelector(state => state.categoryReducer.categories);
  const expenses = useSelector(state => state.expenses.expenses);
  // Get categories from Redux
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false); // Control modal visibility
  const [categoryName, setCategoryName] = useState(''); // Input for new category

  const handleAddCategory = () => {
    if (categoryName) {
      dispatch(addCategory(categoryName)); // Dispatch action to add category
      setCategoryName(''); // Clear input
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

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View>
        <View style={styles.incomeContainer}>
          <Text style={{color: 'gray'}}>Income</Text>
          <Text style={styles.incomeTextVaue}>₹ {income_amount}</Text>
        </View>

        <View style={{marginTop: 16}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.Transactionstext}>Transactions</Text>
            <TouchableOpacity
              style={styles.addCategoryTextContainer}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.addCategoryText}>Category +</Text>
            </TouchableOpacity>
          </View>

          {/* Display Categories as a FlatList */}
          <FlatList
            data={categories}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              const filteredExpenses = expenses.filter(
                itemss => itemss.category === item,
              );

              const totalExpenseAmount = expenses.reduce(
                (sum, item) => sum + item.amount,
                0,
              );

              const totalCategoryAmount = filteredExpenses.reduce(
                (sum, item) => sum + item.amount,
                0,
              );

              return (
                <TouchableOpacity
                  onPress={() => {
                    console.log('Categoryy propss item====', item);
                    navigation.navigate(Routes.CATEGORY_EXPENSE_SCREEN, {
                      category: item,
                    });
                  }} // Navigate to CategoryExpenseScreen
                  style={styles.categoryContainerMain}>
                  <View style={styles.categoryContainer}>
                    <Text
                      style={{
                        color: '#454545',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      {item}
                    </Text>
                    {item !== 'All' && (
                      <Text
                        style={{
                          color: 'green',
                          fontWeight: 'bold',
                          fontSize: 18,
                        }}>
                        ₹{formatIncome(totalCategoryAmount.toString())}
                      </Text>
                    )}

                    {item === 'All' && (
                      <Text
                        style={{
                          color: 'green',
                          fontWeight: 'bold',
                          fontSize: 18,
                        }}>
                        ₹{formatIncome(totalExpenseAmount.toString())}
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>

      {/* Modal for Adding Category */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              width: '80%',
              padding: 20,
              backgroundColor: 'white',
              borderRadius: 10,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
              Add a New Category
            </Text>
            <TextInput
              placeholder="Enter category name"
              value={categoryName}
              onChangeText={setCategoryName}
              style={{borderBottomWidth: 1, marginVertical: 20, padding: 5}}
            />
            {/* <Button title="Add Category" onPress={handleAddCategory} /> */}

            <TouchableOpacity
              onPress={handleAddCategory}
              style={{
                alignItems: 'center',
                backgroundColor: '#2d2e7d',
                borderRadius: 10,
                padding: 10,
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 16,
                }}>
                Add Category
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text
                style={{
                  color: 'red',
                  marginTop: 10,
                  textAlign: 'center',
                  fontSize: 16,
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
            {/* <Button
              title="Cancel"
              color="red"
              onPress={() => setModalVisible(false)}
            /> */}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};
