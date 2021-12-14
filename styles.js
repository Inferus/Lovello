import { StyleSheet } from 'react-native';


  export const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#FFF4F2",
          
        },
        text: {
          color: "black",
          fontSize: 49
        },
        navbar: {
          
          flex: 0.13,
          backgroundColor: 'white',
          justifyContent: 'flex-end',
          alignItems: 'center',
          shadowColor: 'black',
          shadowRadius: 5,
          shadowOpacity: 0.2,
         zIndex: 9999
          
        },
        footer:{
          flex: 0.11,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: 'black',
          shadowRadius: 5,
          shadowOpacity: 0.1,
          zIndex: 9999
        },
        content: {
          flex: 1,
          backgroundColor: "black",
          
        },
      });



