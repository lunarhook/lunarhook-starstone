

import React, {Component} from 'react';
import {StyleSheet,View,FlatList, Text,DeviceEventEmitter} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { InputItem,WhiteSpace, List ,Icon,WingBlank,Button,Switch} from '@ant-design/react-native';
import IconConfig from '../config/IconConfig'
import ScreenConfig from '../config/ScreenConfig';
import {StyleConfig} from '../config/StyleConfig';
import UserModule from '../config/UserModule'
import {HistoryArrayGroup} from '../config/StorageModule'
import {DevTimeManager} from '../net/NetApi'
var Privacyment = new Array()
Privacyment.push("")
Privacyment.push("1. 乾坤爻软件尊重并保护所有使用服务用户的个人隐私权。为了给您提供更准确、更有个性化的服务，本软件会按照本隐私权政策的规定使用和披露您的个人信息。但本软件将以高度的勤勉、审慎义务对待这些信息。除本隐私权政策另有规定外，在未征得您事先许可的情况下 ，本软件不会将这些信息对外披露或向第三方提供。本软件会不时更新本隐私权政策 。 您在同意本软件服务使用协议之时，即视为您已经同意本隐私权政策全部内容。本隐私 权政策属于本软件服务使用协议不可分割的一部分。")
Privacyment.push("a) 在您注册本软件帐号时，您根据本软件要求提供的个人注册信息；")
Privacyment.push("b) 在您使用本软件网络服务，或访问本软件平台网页时，本软件自动接收并记录的您的浏览器和所在设备的信息，包括但不限于您的IP地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；")
Privacyment.push("c) 本软件通过合法途径从商业伙伴处取得的用户个人数据。")
Privacyment.push("d) 本软件通过软件内测试工具获取的信息采集归属本软件所有，同时也属于用户的隐私数据，受到相关隐私政策保护")
Privacyment.push("您了解并同意，以下信息不适用本隐私权政策：")
Privacyment.push("a) 您在使用本软件平台提供的搜索服务时输入的关键字信息；")
Privacyment.push("b) 本软件收集到的您在本软件使用时收集到的相关信息数据，包括但不限于参与活动、成交 信息及评价详情；")
Privacyment.push("c) 违反法律规定或违反本软件规则行为及本软件已对您采取的措施。")
Privacyment.push("2. 信息使用")
Privacyment.push("a) 本软件不会向任何无关第三方提供、出售、出租、交易您的个人信息，除非事先得到您的许可，或该第三方和本软件（含本软件关联公司）单独或共同为您提供服务 ，且在该服务结束后，其将被禁止访问包括其以前能够访问的所有这些资料。")
Privacyment.push("b) 本软件亦不允许任何第三方以任何手段收集、编辑、出售或者无偿传播您的个人信息。 任何本软件平台用户如从事上述活动，一经发现，本软件有权立即终止与该用户的服务协议。")
Privacyment.push("c) 为服务用户的目的，本软件可能通过使用您的个人信息，向您提供您感兴趣的信息，包括但不限于向您发出产品和服务信息，或者与本软件合作伙伴共享信息以便他们向您发送 有关其产品和服务的信息（后者需要您的事先同意）。")
Privacyment.push("d) 为服务用户的目的，在获得用户授权许可以后，可以使用授权的数据信息发送给第三方机构或者提供服务的第三方个人，授权后的第三方持有信息不在受到本隐私权政策的保护")
Privacyment.push("3. 信息披露 在如下情况下，本软件将依据您的个人意愿或法律的规定全部或部分的披露您的个人信息 ：")
Privacyment.push("a) 经您事先同意，向第三方披露；")
Privacyment.push("b) 为提供您所要求的产品和服务，经过授权后必须和第三方分享的您的个人信息；")
Privacyment.push("c) 根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露；")
Privacyment.push("d) 如您出现违反中国有关法律、法规或者本软件服务协议或相关规则的情况，需要向第三方披露；")
Privacyment.push("e) 其它本软件根据法律、法规或者网站政策认为合适的披露。")
Privacyment.push("4. 信息存储和交换，本软件收集的有关您的信息和资料将保存在本软件及（或）其关联公司的服务器上，这些信息和资料可能传送至您所在国家、地区或本软件收集信息和资料所在地的境外并在境外被访问、存储和展示(目前并不支持中国以外的地区用户注册)。")
Privacyment.push("5. 信息安全")
Privacyment.push("a) 本软件帐号均有安全保护功能，请妥善保管您的用户名及密码信息。本软件将通过对用户密码进行加密等安全措施确保您的信息不丢失，不被滥用和变造。尽管有前述安全措施 ，但同时也请您注意在信息网络上不存在“完善的安全措施”。")
Privacyment.push("b) 在使用本软件网络服务进行网上服务时，您不可避免的要向提供服务对或潜在的服务提供方方披露自己的个人信息，如联络方式或者邮政地址。请您妥善保护自己的个人信息，仅在必要的情形下向他人提供。如您发现自己的个人信息泄密，尤其是本软件用户名及密码发生泄露，请您立即联络本软件客服，以便本软件采取相应措施。")
Privacyment.push("")
let PrivacyPagethis = undefined
class PrivacyPage extends React.Component {
   constructor(props) {
    super(props);
		this.state = {
    };PrivacyPagethis = this

  }
  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    
    return{
      title: RouteConfig["PrivacyPage"].name,
    }
  };
  componentWillUnmount()
  {
    DeviceEventEmitter.emit('privacycheck', '')
  }
  render()
  {

    return(  
      <FlatList 
                        ref={(flatList)=>this._flatList = flatList}
                        useFlatList={true}
                        //1数据的获取和渲染
                        //data={undefined != content[this.state.keyindex]?content[this.state.keyindex]:""}
                        data={Privacyment}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(data) => (<View><Text style={{fontSize:15,paddingLeft:15,paddingRight:15}}>{data.item}</Text><WhiteSpace size="xl" /></View>)}
                        >
            </FlatList>)
  }

}
var styles = StyleSheet.create ({
  container: {
    flex:1,
  },
  subtitleView:{
    flexDirection:'row',
    paddingLeft:10,
    //paddingTop:5
  },
  ratingText:{
    paddingLeft:10,
    color:'blue'
  },


  list:{
    height:45,
    //borderWidth:1,
    marginLeft: 10,
    paddingLeft:10,
    //borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    //textAlign:'center', 
    //textDecorationLine:'underline'
  },

  inputpicker: {

    marginLeft: 35, 
    marginRight: 35, 
    marginTop: 50,
  },
});
module.exports=PrivacyPage;  