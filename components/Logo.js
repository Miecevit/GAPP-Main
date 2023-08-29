import React from 'react';
import {
  Image,
  StyleSheet
} from 'react-native';

import logo from '../assets/gapplogo.png';

const Logo = (props) => {
  const birlesikStyle = StyleSheet.flatten([styles.logo, props.style]);
  return (
    <Image style = {birlesikStyle} source = {logo}/>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 150, 
    height: 150 , 
    marginTop: 75, 
    marginBottom: 40,
    borderRadius: 100,
  }
})

export default Logo;