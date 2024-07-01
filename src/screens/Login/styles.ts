import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCF787',
  },
  logo: {
    width: 200,
    height: 200,
		marginBottom: 24,
  },
  title: {
    fontSize: 42,
    marginBottom: 10,
    fontStyle: 'italic',
    fontWeight: '600',
  },
  input: {
		backgroundColor: '#FFFFFF',
    width: '80%',
    height: 40,
    borderRadius: 15,
    marginBottom: 10,
    padding: 10,
  },
  forgotPassword: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
		marginTop: 10
  },
  buttonText: {
    color: 'white',
  },
  registerButton: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  registerText: {
    color: '#0273BB',
  },
  socialButton: {
    width: '80%',
    height: 40,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  socialText: {
    color: 'white',
  },
});

export default styles;
