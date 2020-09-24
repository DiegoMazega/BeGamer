import React from 'react';
import { Text, View, Image, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import styles from './styles';

const Home = () => {

    const navi = useNavigation();

    const handleOnPress = () =>{
        navi.navigate('CreateRecord');
    }

    return (
        <>
            <Header />
            <View style={styles.container}>
                <Image source={require('../../assets/game.png')}
                    style={styles.gamerImage}
                />
                <Text style={styles.title}>Vote Agora!</Text>
                <Text style={styles.subTitle}>Nos Diga Qual é Seu Jogo Favorito!</Text>
            </View>
            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleOnPress}>
                    <Text style={styles.buttonText}>
                        COLETAR DADOS
                    </Text>
                    <View style={styles.buttonIcon}>
                        <Text>
                            <Icon name="chevron-right" 
                                color="#FFF"
                                size={25}
                            />
                        </Text>
                    </View>
                </RectButton>
            </View>
        </>
    )
};

export default Home;
