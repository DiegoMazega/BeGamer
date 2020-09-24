import React from 'react';
import { Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Header = () => {
    const navi = useNavigation();
    const hanldeOnPress = () => {
        navi.navigate('Home');
    }

    return (
        <TouchableWithoutFeedback onPress={hanldeOnPress}>
            <View style={styles.header}>
                <Image source={require('../../assets/logo.png')} />
                <Text style={styles.textLogo1}>Big game</Text>
                <Text style={styles.textLogo2}>Survey</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};


export default Header;