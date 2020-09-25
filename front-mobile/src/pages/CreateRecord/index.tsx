import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import Header from '../../components/Header';
import PlatformCard from './PlatformCards';
import { GamePlatform } from './PlatformCards/types';
import styles from './styles';

const CreateRecord = () => {

    const [platform, setPlatform] = useState<GamePlatform>();

    return (
        <>
            <Header />
            <View style={styles.container}>
                <TextInput style={styles.inputText} placeholder="Nome" 
                placeholderTextColor="#9E9E9E"/>
                <TextInput style={styles.inputText} placeholder="Idade" 
                placeholderTextColor="#9E9E9E"
                keyboardType="numeric"
                maxLength={3}/>
            </View>
            <View style={styles.platformContainer}>
                <PlatformCard platform="PC" 
                    icon="laptop"
                    onChange={() => null}
                    activePlatform={platform}
                />
                <PlatformCard platform="XBOX" 
                    icon="xbox"
                    onChange={() => null}
                    activePlatform={platform}
                />
                <PlatformCard platform="PLAYSTATION" 
                    icon="playstation"
                    onChange={() => null}
                    activePlatform={platform}
                />
            </View>
        </>
    );
}

export default CreateRecord;