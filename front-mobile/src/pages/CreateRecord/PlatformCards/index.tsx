import React from 'react';
import { Text } from 'react-native';
import { GamePlatform } from './types';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import styles from './styles';

type Props = {
    platform: GamePlatform,
    onChange: (platform: GamePlatform) => void;
    icon: string;
    activePlatform?: GamePlatform;
}

const PlatformCard = ({platform, onChange, icon, activePlatform}:Props) => {

    const isActive = platform === activePlatform;
    const backgroundColor = isActive? "#FAD7C8": '#FFF';
    const textColor = isActive? "#ED7947" : '#9E9E9E';

    return(
    <RectButton
        style={[styles.platformCard, {backgroundColor}]}
        onPress={() => onChange(platform)}
    >
        <Icon name={icon} size={60} color={textColor} />
        <Text style={[styles.platformCardText, {color: textColor}]}>
            {platform === "PLAYSTATION" ? 'PS' : platform }
        </Text>
    </RectButton>
    )
}

export default PlatformCard;