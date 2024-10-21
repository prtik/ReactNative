// screens/ExpenseScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TextInput,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addExpense} from '../../redux/features/expenseSlice';

export const CategoryExpenseScreen = props => {
  const [modalVisible, setModalVisible] = useState(false); // To control modal visibility
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState(''); // To hold the input value
  const dispatch = useDispatch();
  const category = props.route.params.category;
  // console.log("propssssssssssss===========",category);
  const expenses = useSelector(state => state.expenses.expenses); // Get expenses from Redux store

  // Function to add a new expense
  const handleAddExpense = () => {
    if (amount) {
      dispatch(
        addExpense({
          amount: parseFloat(amount),
          category: category,
          description: description,
        }),
      ); // Dispatch the action with the amount
      setAmount('');
      setDescription('');
      setModalVisible(false); // Close the modal after adding
    }
  };

  return (
    <View style={{padding: 16}}>
      <View style={{flexDirection: 'row'}}>
        {/* <Text style={{fontSize:28,alignSelf:'center'}}>{`<`}</Text> */}
        {expenses.length != [] && (
          <Text
            style={{
              fontSize: 20,
              marginBottom: 10,
              fontWeight: 'bold',
              color: 'black',
            }}>
            {category} Expenses
          </Text>
        )}
      </View>

      {/* Button to Add Expense */}
      {category !== 'All' && (
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
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
            Add Expense
          </Text>
        </TouchableOpacity>
      )}

      {/* List of Expenses */}
      {expenses.length == [] ? (
        <View style={{alignItems: 'center', marginTop: 100}}>
          <Text>No expense found</Text>
        </View>
      ) : (
        <FlatList
          data={
            category === 'All'
              ? expenses
              : expenses.filter(item => item.category === category)
          }
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View
              style={{
                padding: 10,
                borderBottomWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderColor: '#2d2e7d',
              }}>
              <Text style={{color: 'black', fontWeight: '600'}}>
                {item.description}{' '}
                {category === 'All' ? ' | ' + item.category : ''}
              </Text>
              <Text style={{color: 'green', fontWeight: '600'}}>
                ₹{item.amount}
              </Text>
            </View>
          )}
        />
      )}

      {/* Modal for Adding Expense */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              width: '80%',
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
            }}>
            <Text style={{marginBottom: 10}}>
              Enter Expense Amount and Description
            </Text>
            <TextInput
              keyboardType="numeric"
              placeholder="Amount"
              value={amount}
              onChangeText={setAmount}
              style={{borderBottomWidth: 1, marginBottom: 20, padding: 5}}
            />
            <TextInput
              keyboardType="default"
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
              style={{borderBottomWidth: 1, marginBottom: 20, padding: 5}}
            />
            <Button title="OK" onPress={handleAddExpense} />
            <TouchableOpacity
              style={{marginTop: 10}}
              onPress={() => setModalVisible(false)}>
              <Text style={{color: 'red'}}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
