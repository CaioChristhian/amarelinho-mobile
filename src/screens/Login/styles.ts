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
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
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
    color: 'blue',
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
