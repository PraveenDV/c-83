import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Platfrom, StatusBar, Image} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize'

var customFonts={'Bubblegum-Sans':require('../assets/fonts/BubblegumSans-Regular.ttf')};

export default class StoryCard extends Component{
    constructor(){
        super();
        this.state={
            fontsLoaded:false
        }
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
            <View style={styles.cardContainer}>
                <SafeAreaView style={styles.androidSafeAreaView}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image source={require('../assets/story_image_1.png')} style={{width:'95%', 
                        height:RFValue(250), resizeMode:'contain', alignSelf:'center'}}/>
                    </View>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.storyTitleText}>{this.props.story.title}</Text>
                        <Text style={styles.storyTitleText}>{this.props.story.author}</Text>
                        <Text style={styles.storyTitleText}>{this.props.story.description}</Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name={'heart'} color={'white'} size={RFValue(30)}/>
                            <Text style={styles.stoyTitleText}>12k</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
        }
    }
}

const styles=StyleSheet.create({
     container: {
          flex: 1 
        },
      cardContainer: { 
          margin: RFValue(13), 
          backgroundColor: "#2f345d", 
          borderRadius: RFValue(20) 
        }, 
        storyImage: { 
            resizeMode: "contain", 
            width: "95%", 
            alignSelf: "center", 
            height: RFValue(250)
         }, 
         titleContainer: { 
             paddingLeft: RFValue(20), 
             justifyContent: "center"
         }, 
         storyTitleText: {
              fontSize: RFValue(25), 
              fontFamily: "Bubblegum-Sans", 
              color: "white" 
            }, 
            storyAuthorText: { 
                fontSize: RFValue(18), 
                fontFamily: "Bubblegum-Sans", 
                color: "white"
             },
                 descriptionText: {
                      fontFamily: "Bubblegum-Sans", 
                      fontSize: 13, 
                      color: "white", 
                      paddingTop: RFValue(10) 
                    }, 
                    actionContainer: { 
                        justifyContent: "center", 
                        alignItems: "center", 
                        padding: RFValue(10) 
                },
                 likeButton: {
                      width: RFValue(160), 
                      height: RFValue(40), 
                      justifyContent: "center", 
                      alignItems: "center", 
                      flexDirection: "row", 
                      backgroundColor: "#eb3948", 
                      borderRadius: RFValue(30) 
                    },
                     likeText: {
                          color: "white", 
                          fontFamily: "Bubblegum-Sans", 
                          fontSize: RFValue(25), 
                          marginLeft: RFValue(5) 
                        } 
                    });