import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ScreenConfig from './ScreenConfig';
import IconConfig from './IconConfig'
import {HistoryArrayGroup} from './StorageModule'

var StyleConfig = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  astrofont:
  {
      fontFamily:(Platform.OS === 'ios')?'xxastro':'xxastro5',
      fontSize: 55,
      lineHeight:60, 
      textAlign:'center',
      height:60,
      width:60
  },
  menufont: {
    fontSize: ScreenConfig.__navigationMenuFontsize(),
    color: '#333333',
    height: ScreenConfig.getFontheight(),
    backgroundColor: '#ffffff',
  },
  hurdle_title: {
    color: '#333',
    fontSize: 18,
    marginLeft: 15
  },
  hurdle_show_text: {
    color: IconConfig.colorblue,
    fontSize: 16
  },
  hurdle_edit_text: {
    color: '#ff6548',
    fontSize: 16
  },
  selected_item_text: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
});
let FontStyleConfigThis = null
class FontStyleConfig extends React.Component {
  constructor(props) {
      super(props);
      this.state = {changesize:5
      };
      FontStyleConfigThis = this;
    (async()=>{
      await FontStyleConfigThis.reload()
    })()
  }

  async reload()
  {
    try{
      const ret = await  HistoryArrayGroup.load("FontStyleConfig")
      FontStyleConfigThis.state.changesize = undefined != ret?ret:5;
      console.log("FontStyleConfig recover", ret)
    }catch{
      FontStyleConfigThis.state.changesize = 5;
    }
     
  }
  async setfontsize(value)
  {

      FontStyleConfigThis.state.changesize = value
      
      return HistoryArrayGroup.save("FontStyleConfig",value)
    
  }
  getFontChangeSize()
  {
    return FontStyleConfigThis.state.changesize
  }
}
var o = new FontStyleConfig()
module.exports = {StyleConfig:StyleConfig,FontStyleConfig: o};  