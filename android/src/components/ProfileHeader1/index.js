import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Button, SearchBar} from '@rneui/themed';
import { CircleButton, Dropdown } from '../Button';
import { assets } from '../../assets'
import { useNavigation } from '@react-navigation/native'
import ProfileProduct from '../../screens/ProfileProduct';

class ProfileHeader1 extends React.Component {
    state = {
      search: '',
    };
  
    updateSearch = search => {
      this.setState({search});
    };
  
    render() {
      const {search} = this.state;
      const { navigation } = this.props;
      return (
        <View style={{backgroundColor: '#E9E9E9'}}>
          <ImageBackground source={assets.banner} imageStyle={{ opacity:0.7 }}>
            <CircleButton imgUrl={assets.back} left={25} top={35} handlePress={()=>navigation.goBack()}/>
            <SearchBar
              placeholder="Type Here..."
              onChangeText={this.updateSearch}
              value={search}
              platform={'android'}
              containerStyle={{
                width: 260,
                height: 40,
                borderRadius: 10,
                justifyContent: 'center',
                marginTop: 15,
                marginLeft: 50,
              }}
              inputStyle={{fontSize: 15}}
            />
            <View style={{ flexDirection:'row', justifyContent:'space-between', marginVertical:10, marginHorizontal:20, alignItems:'center' }}>
              <Image source={assets.toko} style={{ borderRadius: 100, width: 70, height: 70, }} />
              <View>
                <Text style={{ fontSize:15, fontWeight:'900', color:'black' }}>fitrah_shop</Text>
                <View style={{ flexDirection:'row', alignItems:'center' }}>
                  <View style={{ width:8, height:8, backgroundColor:"#7AC93B", borderRadius:100 }} />
                  <Text style={{ marginLeft:10, fontWeight:'500', color:'black' }}>online</Text>
                </View>
                <View style={{ flexDirection:'row', alignItems:'center' }}>
                  <Image source={assets.fullstar}/>
                  <Text style={{ marginLeft:10, fontWeight:'500', color:'black' }}>4.9  |  20 Product</Text>
                </View>
              </View>
              <View>
                <Button title={"Chat now"} titleStyle={{ fontSize:14 }} color={"#304B3B"} buttonStyle={{ width:100, height:35, borderRadius:5 }}/>
              </View>
            </View>
          </ImageBackground>
          <View style={{ flexDirection:'row', width:'100%', height:60, backgroundColor:'#304B3B' }}>
              <TouchableOpacity style={{ width:'50%', alignItems:'center', justifyContent:'center' }} onPress={()=>navigation.navigate("ProfileShop")}>
                <Text style={{ color:'white', fontSize:16, fontWeight:'800' }}>Shop</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width:'50%', alignItems:'center', justifyContent:'center', borderBottomWidth:2, borderBottomColor:'#FDDE67' }}>
                <Text style={{ color:'#FDDE67', fontSize:16, fontWeight:'800' }}>Product</Text>
              </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 15,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '700',
                color: 'gray',
                marginTop: 10,
              }}>
              Sort by
            </Text>
            <Dropdown label="Relevancy" />
          </View>
        </View>
      );
    }
  }

export default function(props) {
  const navigation = useNavigation();

  return <ProfileHeader1 {...props} navigation={navigation} />;
}