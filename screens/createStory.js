import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, Image, ScrollView, TextInput} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import {RFValue} from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker'

var customFonts={'Bubblegum-Sans':require('../assets/fonts/BubblegumSans-Regular.ttf')};

export default class CreateStory extends Component{
    constructor(){
        super();
        this.state={
            fontsLoaded:false,
            previewImage:'image_1',
            dropDownHeight:40,
            
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
            var preview_images={
                'image_1':require('../assets/story_image_1.png'),
                'image_2':require('../assets/story_image_2.png'),
                'image_3':require('../assets/story_image_3.png'),
                'image_4':require('../assets/story_image_4.png'),
                'image_5':require('../assets/story_image_5.png')
            }
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.androidSafeAreaView}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image source={require('../assets/logo.png')} style={{width:60, 
                        height:60, resizeMode:'contain', marginLeft:10}}/>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Create a Story</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <ScrollView>
                    <Image source={preview_images[this.state.previewImage]} style={{width:'93%', 
                        height:RFValue(250), resizeMode:'contain', marginVertical:RFValue(10), borderRadius:RFValue(10),
                        alignSelf:'center'}}/>
                        <View style={{height:RFValue(this.state.dropDownHeight)}}>
                            <DropDownPicker
                                items={[
                                    {label:'Image_1', value:'image_1'},
                                    {label:'Image_2', value:'image_2'},
                                    {label:'Image_3', value:'image_3'},
                                    {label:'Image_4', value:'image_4'},
                                    {label:'Image_5', value:'image_5'},
                                ]}
                                defaultValue={this.state.previewImage}
                                containerStyle={{height:40, borderRadius:20, marginBottom:10}}
                                onOpen={()=>{
                                    this.setState({dropDownHeight:170})
                                }}
                                onClose={()=>{
                                    this.setState({dropDownHeight:40})
                                }}
                                style={{backgroundColor:'transparent'}}
                                ItemStyle={{justifyContent:'flex-start'}}
                                dropDownStyle={{backgroundColor:'#2f345d'}}
                                labelStyle={{color:'white', fontFamily:'Bubblegum-Sans'}}
                                arrowStyle={{color:'white', fontFamily:'Bubblegum-Sans'}}
                                onChangeItem={(item)=>{
                                    this.setState({previewImage:item.value})
                                }}
                            />
                        </View>
                        <TextInput
                            placeholder={'Title'}
                            placeholderTextColor='white'
                            onChangeText={(title)=>{
                                this.setState({title})
                            }}
                            style={styles.inputFont}
                        />
                        <TextInput
                            placeholder={'Description'}
                            placeholderTextColor='white'
                            onChangeText={(description)=>{
                                this.setState({description})
                            }}
                            multiline={true}
                            numberOfLines={4}
                            style={[styles.inputFont, styles.inputFontExtra, styles.inputTextBig]}
                        />
                        <TextInput
                            placeholder={'Write your Story here'}
                            placeholderTextColor='white'
                            onChangeText={(story)=>{
                                this.setState({story})
                            }}
                            multiline={true}
                            numberOfLines={30}
                            style={[styles.inputFont, styles.inputFontExtra, styles.inputTextBig]}
                        />
                        <TextInput
                            placeholder={'Moral of the Story'}
                            placeholderTextColor='white'
                            onChangeText={(moral)=>{
                                this.setState({moral})
                            }}
                            multiline={true}
                            numberOfLines={2}
                            style={[styles.inputFont, styles.inputFontExtra, styles.inputTextBig]}
                        />
                        
                    </ScrollView>
                </View>
                <View style={{flex:0.08}}/>
            </View>
        )
        }
    }
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: "#15193c" }, droidSafeArea: { marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35) }, appTitle: { flex: 0.07, flexDirection: "row" }, appIcon: { flex: 0.3, justifyContent: "center", alignItems: "center" }, iconImage: { width: "100%", height: "100%", resizeMode: "contain" }, appTitleTextContainer: { flex: 0.7, justifyContent: "center" }, appTitleText: { color: "white", fontSize: RFValue(28), fontFamily: "Bubblegum-Sans" }, fieldsContainer: { flex: 0.85 }, previewImage: { width: "93%", height: RFValue(250), alignSelf: "center", borderRadius: RFValue(10), marginVertical: RFValue(10), resizeMode: "contain" }, inputFont: { height: RFValue(40), borderColor: "white", borderWidth: RFValue(1), borderRadius: RFValue(10), paddingLeft: RFValue(10), color: "white", fontFamily: "Bubblegum-Sans" }, inputFontExtra: { marginTop: RFValue(15) }, inputTextBig: { textAlignVertical: "top", padding: RFValue(5) } });