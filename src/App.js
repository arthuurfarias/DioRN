import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Text,
    Pressable,
    Linking,
} from 'react-native';

const colorBackground = '#010409';
const colorFontGrey = '#C9D1D9';
const colorFontDark = '#4F565E';

const imageProfile = 'https://avatars.githubusercontent.com/u/101152439?s=400&u=24ea2f8a447c4283a6b909b057d4db4a2dfe82c6&v=4';
const urlToMyGithub = 'https://github.com/arthuurfarias';

const App = () => {
    const pressGoToGithub = async () => {
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res) {
            await Linking.openURL(urlToMyGithub);
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorBackground} barStyle="light-content" />
            <View style={style.content}>
                <Image
                    accessibilityLabel="Imagem perfil"
                    style={style.avatar}
                    source={{ uri: imageProfile }}
                />
                <Text
                    accessibilityLabel="Nome: Arthur Farias"
                    style={style.name}>
                    Arthur Farias
                </Text>
                <Text
                    accessibilityLabel="Nickname: arthuurfarias"
                    style={style.nickname}>
                    arthuurfarias
                </Text>
                <Text
                    accessibilityLabel="Descrição: Software Developer Student | React Native | Full Stack | JavaScript | HTML | CSS"
                    style={style.description}>
                    Software Developer Student | React Native | Full Stack | JavaScript | HTML | CSS
                </Text>

                <Pressable onPress={pressGoToGithub}>
                    <View style={style.button}>
                        <Text style={style.textButton}>
                            Open in Github
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({

    container: {
        backgroundColor: colorBackground,
        flex: 1,
        justifyContent: 'center',
    },

    content: {
        alignItems: 'center',
        padding: 20,
    },

    avatar: {
        borderColor: colorFontGrey,
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 2,
    },

    name: {
        color: colorFontGrey,
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },

    nickname: {
        color: colorFontGrey,
        fontSize: 18,
        color: colorFontDark,
    },

    description: {
        color: colorFontGrey,
        fontSize: 14,
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: colorFontDark,
        marginTop: 20,
        borderRadius: 10,
        padding: 20,
    },

    textButton: {
        color: colorFontGrey,
        fontSize: 16,
        fontWeight: 'bold',
    },
});