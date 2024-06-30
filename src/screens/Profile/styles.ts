import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF787',
    padding: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
		justifyContent: 'space-between'
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userOccupation: {
    fontSize: 16,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    fontSize: 16,
    marginRight: 5,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 40,
  },
  historyText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 12
	}
});

export default styles;
