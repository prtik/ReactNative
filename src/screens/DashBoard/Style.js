import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollViewContainer: {
    padding: 16,
    backgroundColor: 'white',
  },

  incomeContainer: {
    backgroundColor: '#f2f2ff',
    padding: 16,
    borderColor: '#2d2e7d',
    borderRadius: 10,
    borderWidth: 1,
  },

  incomeTextVaue: {color: 'black', fontSize: 26, fontWeight: '900'},

  Transactionstext: {fontSize: 16, fontWeight: 'bold', color: 'black'},

  addCategoryTextContainer: {
    backgroundColor: '#2d2e7d',
    borderRadius: 25,
    borderColor: '#2d2e7d',
    borderWidth: 0.5,
    marginEnd: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addCategoryText: {
    color: '#ffffff',
    alignItems: 'center',
    fontSize: 13,
    justifyContent: 'center',
    paddingVertical: 5,

    paddingHorizontal: 10,
  },
  categoryContainerMain: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2ff',
    marginTop: 10,
    borderRadius: 5,
    borderColor: '#2d2e7d',
    borderWidth: 1,
    padding: 10,
  },

  categoryContainer: {
    marginVertical: 10,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
