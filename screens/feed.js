import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, Image} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { FlatList } from 'react-native-gesture-handler';
import StoryCard from './storyCard';
import {RFValue} from 'react-native-responsive-fontsize';

var customFonts={'Bubblegum-Sans':require('../assets/fonts/BubblegumSans-Regular.ttf')};
var stories=require('../temp_stories.json')

export default class Feed extends Component{
    constructor(){
        super();
        this.state={
            fontsLoaded:false
        }
    }

    renderItem=({item:story})=>{
        return <StoryCard
            story={story}
        />
    }

    async _loadFontsAsync(){
        await Font.loadAsync(customFonts);
        this.setState({fontsLoaded:true});
    }

    componentDidMount(){
        this._loadFontsAsync()
    }

    render(){
        if(!this.state.fontsLoaded){
            return <AppLoading/>
        }else{
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.androidSafeAreaView}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image source={require('../assets/logo.png')} style={{width:60, 
                        height:60, resizeMode:'contain', marginLeft:10}}/>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Story Share App</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                <FlatList
                    keyExtractor={(item, index)=>{index.toString}}
                    data={stories}
                    renderItem={this.renderItem}
                />

                </View>
            </View>
        )
        }
    }
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: "#15193c" }, droidSafeArea: { marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35) }, appTitle: { flex: 0.07, flexDirection: "row" }, appIcon: { flex: 0.3, justifyContent: "center", alignItems: "center" }, iconImage: { width: "100%", height: "100%", resizeMode: "contain" }, appTitleTextContainer: { flex: 0.7, justifyContent: "center" }, appTitleText: { color: "white", fontSize: RFValue(28), fontFamily: "Bubblegum-Sans" }, cardContainer: { flex: 0.93 } });