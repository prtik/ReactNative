import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2d2e7d',
    color: 'White',
    paddingVertical: 12,
    alignItems: 'center',

    borderRadius: 12,
  },
  card: {
    padding: 20,
    backgroundColor: '#E8E8F7',

    justifyContent: 'center',
  },
  container1: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: '#E8E8F7',
    padding: 19,
    elevation: 5,
    borderRadius: 10,

    alignContent: 'center',
    margin: 20,
    justifyContent: 'center',
  },
  incomeTextView: {
    color: 'black',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  incomeTextInput: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'black',
    color: 'black',
    backgroundColor: 'white',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    padding: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  startExpenseBtn: {color: 'white', fontWeight: 'bold', fontSize: 18},
});
