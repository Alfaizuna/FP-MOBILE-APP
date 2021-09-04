import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  labelUsername: {
    fontWeight: 'bold',
  },
  visibleButtonStyle: {
    marginRight: 20,
  },
  containerView: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  titleContainer: {
    // paddingLeft: 20,
    // paddingHorizontal: 20,
  },
  title: {
    color: 'black',
    fontSize: 28,
    // fontWeight: '900',
    // fontFamily: 'google-sans'
    // paddingLeft: 20,
  },
  subtitle: {
    color: 'grey',
    fontSize: 14,
    paddingTop: 5,

    // paddingLeft: 20,
  },
  buttonSocmed: {
    borderWidth: 0.5,
    borderColor: 'grey',
    width: '100%',
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    // marginRight:10
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    // borderWidth: 1,
    marginLeft: -10,
    // marginRight: -10,
    marginTop: 10,
    borderRadius: 12,
    paddingLeft: 10,
    backgroundColor: '#EEEEEE',
    // shadowColor: 'black',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  inputContainer: {
    paddingTop: 50,
    // marginRight: 10,
  },
  button: {
    // borderWidth: 1.5,
    // borderColor: '#4B40A4',
    width: '100%',
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    // marginRight: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 14,
  },
  forgotPasswordText: {
    color: '#03C4A1',
    textAlign: 'right',
    paddingRight: 10,
    marginTop: -10,
  },
  viewButton: {
    paddingRight: 10,
    paddingTop: 50,
  },
  buttonOr: {
    alignItems: 'center',
    padding: 20,
  },
  textOr: {
    color: 'grey',
  },
  viewGoogleButton: {
    paddingRight: 10,
  },
  textGoogleButton: {
    paddingLeft: 10,
    fontSize: 14,
  },
  viewRegisterButton: {
    alignItems: 'center',
    //   borderWidth: 1,
    marginTop: 70,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    //   height:120
  },
  textButtonSignUp: {
    color: '#03C4A1',
  },
});

export default styles