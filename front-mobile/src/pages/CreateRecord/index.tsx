import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Alert } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import Header from '../../components/Header';
import PlatformCard from './PlatformCards';
import { GamePlatform, Game } from './PlatformCards/types';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
import { RectButton } from 'react-native-gesture-handler';
import { styles, pickerSelectStyle} from './styles';

const placeholder = {
    label: 'Selecione o Game',
    value: null
}

const BASE_URL = 'http://192.168.0.7:8080'

const mapSelectValue = (games: Game[]) =>{
    return games.map(game => ({
        ...game,
        label: game.title,
        value: game.id,
    }));
}

const CreateRecord = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [platform, setPlatform] = useState<GamePlatform>();
    const [selectGame, setSelectGame] = useState('');
    const [allGames, setAllGames] = useState<Game[]>([]);
    const [filteredGames, setFilteredGames] = useState<Game[]>([]);

    const handleChangePlatform = (selectedPlatform: GamePlatform) => {
        setPlatform(selectedPlatform);
        const gameByPlatform = allGames.filter(
            game => game.platform === selectedPlatform
        )
        setFilteredGames(gameByPlatform);
    }

    const handleSubmit = () => {
        const playLoaded = {name, age, gameId: selectGame};

        axios.post(`${BASE_URL}/records`, playLoaded)
        .then(() => {
            Alert.alert('Dados Salvos Com Sucesso!');
            setName('');
            setAge('');
            setSelectGame('');
            setPlatform(undefined);
        })
        .catch(() =>{
            Alert.alert("Erro ao Salvar Dados!");
        })
    }

    useEffect(() =>{
        axios.get(`${BASE_URL}/games`)
        .then(response =>{
            const selectValue = mapSelectValue(response.data);
            setAllGames(selectValue);
        })
        .catch(() =>{
            Alert.alert("Erro ao Listar Dados!");
        })
    }, [])

    return (
        <>
            <Header />
            <View style={styles.container}>
                <TextInput style={styles.inputText} placeholder="Nome"
                    placeholderTextColor="#9E9E9E" 
                    onChangeText={text => setName(text)}
                    value={name}
                    />
                <TextInput style={styles.inputText} placeholder="Idade"
                    placeholderTextColor="#9E9E9E"
                    keyboardType="numeric"
                    maxLength={3} 
                    onChangeText={text => setAge(text)}
                    value={age}
                    />
            </View>
            <View style={styles.platformContainer}>
                <PlatformCard platform="PC"
                    icon="laptop"
                    onChange={handleChangePlatform}
                    activePlatform={platform}
                />
                <PlatformCard platform="XBOX"
                    icon="xbox"
                    onChange={handleChangePlatform}
                    activePlatform={platform}
                />
                <PlatformCard platform="PLAYSTATION"
                    icon="playstation"
                    onChange={handleChangePlatform}
                    activePlatform={platform}
                />
            </View>
            <View>
                <RNPickerSelect placeholder={placeholder}
                    onValueChange={value => {
                        setSelectGame(value)
                    }}
                    items={filteredGames}
                    value={selectGame}
                    style={pickerSelectStyle}
                    useNativeAndroidPickerStyle={false}
                    Icon={() => {
                        return <Icon name="chevron-down" color="#9E9E9E" size={25} />
                    }
                    }
                />
                <View style={styles.footer}>
                    <RectButton style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>
                            SALVAR
                        </Text>
                    </RectButton>
                </View>
            </View>
        </>
    );
}

export default CreateRecord;
