

import React, {Component} from 'react';
import {StyleSheet,View,Alert, Text,DeviceEventEmitter, FlatList,TouchableOpacity} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import { InputItem,WhiteSpace, List ,Icon,WingBlank,Button,Switch} from '@ant-design/react-native';
import IconConfig from '../config/IconConfig'
import ScreenConfig from '../config/ScreenConfig';
import {StyleConfig,FontStyleConfig} from '../config/StyleConfig';
import UserModule from '../config/UserModule'
import {HistoryArrayGroup} from '../config/StorageModule'
import {DevTimeManager} from '../net/NetApi'
import { HeaderBackButton } from '@react-navigation/stack';
var Agreement= new Array()
Agreement.push("")
Agreement.push("用户协议")
Agreement.push("特别提示")
Agreement.push("乾坤爻软件产品（以下简称“乾坤爻”）在此特别提醒您（用户）在注册成为用户之前，请认真阅读本《用户协议》（以下简称“协议”），确保您充分理解本协议中各条款。请您审慎阅读并选择接受或不接受本协议。除非您接受本协议所有条款，否则您无权注册、登录或使用本协议所涉服务。您的注册、登录、使用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束。")
Agreement.push("本协议约定乾坤爻与用户之间关于“乾坤爻”软件服务（以下简称“服务”）的权利义务。“用户”是指注册、登录、使用本服务的个人。本协议可由乾坤爻随时更新，更新后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知，用户可在本网站查阅最新版协议条款。在乾坤爻修改协议条款后，如果用户不接受修改后的条款，请立即停止使用乾坤爻提供的服务，用户继续使用乾坤爻提供的服务将被视为接受修改后的协议。")
Agreement.push("一、帐号注册")
Agreement.push("1、用户在使用本服务前需要注册一个“乾坤爻”帐号。“乾坤爻”帐号应当使用手机号码绑定注册，请用户使用尚未与“乾坤爻”帐号绑定的手机号码，以及未被乾坤爻根据本协议封禁的手机号码注册“乾坤爻”帐号。乾坤爻可以根据用户需求或产品需要对帐号注册和绑定的方式进行变更，而无须事先通知用户。")
Agreement.push("2、“乾坤爻”系基于地理位置的移动社交产品，用户注册时应当授权乾坤爻公开及使用其地理位置信息方可成功注册“乾坤爻”帐号。故用户完成注册即表明用户同意乾坤爻提取、公开及使用用户的地理位置信息。如用户需要终止向其他用户公开其地理位置信息，可自行设置为隐身状态。")
Agreement.push("3、鉴于“乾坤爻”帐号的绑定注册方式，您同意乾坤爻在注册时将使用您提供的手机号码及/或自动提取您的手机号码及自动提取您的手机设备识别码等信息用于注册。您同意给予运营商授权，授权运营商有权自动提取您的手机号码进行认证并用于“乾坤爻”账号注册，您保证遵守运营商的相关服务条款（点击查看服务条款），如运营商对您的手机号认证成功，则您的注册即完成。如您不同意对运营商的授权和/或服务条款或者是您的手机号认证失败，您可以手动修改运营商提取的手机号码，采取验证码方式进行注册登录。")
Agreement.push("4、在用户注册及使用本服务时，乾坤爻需要搜集能识别用户身份的个人信息以便乾坤爻可以在必要时联系用户，或为用户提供更好的使用体验。乾坤爻搜集的信息包括但不限于用户的姓名、性别、年龄、出生日期、身份证号、地址、学校情况、公司情况、所属行业、兴趣爱好、常出没的地方、个人说明；乾坤爻同意对这些信息的使用将受限于第三条用户个人隐私信息保护的约束。")
Agreement.push("二、服务内容")
Agreement.push("1、本服务的具体内容由乾坤爻根据实际情况提供，包括但不限于授权用户通过其帐号进行即时通讯、添加好友、加入群组、关注他人、发布留言。乾坤爻可以对其提供的服务予以变更，且乾坤爻提供的服务内容可能随时变更；用户将会收到乾坤爻关于服务变更的通知。")
Agreement.push("2、乾坤爻提供的服务包含免费服务与收费服务。用户可以通过付费方式购买收费服务，具体方式为：用户通过网上银行、支付宝或其他“乾坤爻”平台提供的付费途径支付一定数额的收费服务，从而获得收费服务使用权限。对于收费服务，乾坤爻会在用户使用之前给予用户明确的提示，只有用户根据提示确认其同意按照前述支付方式支付费用并完成了支付行为，用户才能使用该等收费服务。支付行为的完成以银行或第三方支付平台生成“支付已完成”的确认通知为准。")
Agreement.push("三、用户个人信息保护")
Agreement.push("1、用户在注册帐号或使用本服务的过程中，可能需要填写或提交一些必要的个人信息，如法律法规、规章规范性文件（以下称“法律法规”）规定的需要填写的身份信息。如用户提交的信息不完整或不符合法律法规的规定，则用户可能无法使用本服务或在使用本服务的过程中受到限制。")
Agreement.push("2、用户个人信息包括：1）用户自行提供的用户个人信息（如注册时填写的手机号码，电子邮件等个人信息，使用服务时提供的共享信息等）；2）其他方分享的用户个人信息；3）乾坤爻为提供服务而合法收集的用户必要个人信息（如使用服务时系统自动采集的设备或软件信息，浏览历史信息，通讯时间信息等技术信息，用户开启定位功能并使用服务时的地理位置信息等）。")
Agreement.push("其中个人隐私信息是指涉及用户个人身份或个人隐私的信息，比如，用户真实姓名、身份证号、手机号码、手机设备识别码、IP地址、用户聊天记录。非个人隐私信息是指用户对本服务的操作状态以及使用习惯等明确且客观反映在乾坤爻服务器端的基本记录信息、个人隐私信息范围外的其它普通信息，以及用户同意公开的上述隐私信息。乾坤爻保证在取得用户书面同意的情况下收集、使用或公开用户的个人隐私信息，用户同意乾坤爻无需获得用户的另行确认与授权即可收集、使用或公开用户的非个人隐私信息。")
Agreement.push("3、尊重用户个人信息的私有性是乾坤爻的一贯制度，乾坤爻将采取技术措施和其他必要措施，确保用户个人信息安全，防止在本服务中收集的用户个人信息泄露、毁损或丢失。在发生前述情形或者乾坤爻发现存在发生前述情形的可能时，乾坤爻将及时采取补救措施并告知用户，用户如发现存在前述情形亦需立即与乾坤爻联系。")
Agreement.push("4、乾坤爻未经用户同意不向任何第三方公开、 透露用户个人隐私信息。但以下特定情形除外：")
Agreement.push("(1) 乾坤爻根据法律法规规定或有权机关的指示提供用户的个人隐私信息；")
Agreement.push("(2) 由于用户将其用户密码告知他人或与他人共享注册帐户与密码，由此导致的任何个人信息的泄漏，或其他非因乾坤爻原因导致的个人隐私信息的泄露；")
Agreement.push("(3) 用户自行向第三方公开其个人隐私信息；")
Agreement.push("(4) 用户与乾坤爻及合作单位之间就用户个人隐私信息的使用公开达成约定，乾坤爻因此向合作单位公开用户个人隐私信息；")
Agreement.push("(5) 任何由于黑客攻击、电脑病毒侵入及其他不可抗力事件导致用户个人隐私信息的泄露；")
Agreement.push("(6) 用户个人信息已经经过处理无法识别特定个人且不能复原。")
Agreement.push("5、用户同意乾坤爻可在以下事项中使用用户的个人隐私信息：")
Agreement.push("(1) 乾坤爻向用户及时发送重要通知，如软件更新、本协议条款的变更；")
Agreement.push("(2) 乾坤爻内部进行审计、数据分析和研究等，以改进乾坤爻的产品、服务和与用户之间的沟通；")
Agreement.push("(3) 依本协议约定，乾坤爻管理、审查用户信息及进行处理措施；")
Agreement.push("(4) 适用法律法规规定的其他事项。")
Agreement.push("除上述事项外，如未取得用户事先同意，乾坤爻不会将用户个人隐私信息使用于任何其他用途。")
Agreement.push("6、乾坤爻重视对未成年人的保护。任何18岁以下的未成年人可以在父母的监护下注册实用乾坤爻")
Agreement.push("7、因乾坤爻提供的服务系基于地理位置提供的移动社交服务，用户确认，其地理位置信息为非个人隐私信息，用户成功注册“乾坤爻”帐号视为确认授权乾坤爻提取、公开及使用用户的地理位置信息。用户地理位置信息将作为用户公开资料之一，由乾坤爻向其他用户公开以便乾坤爻向用户提供基于地理位置的移动社交服务。如用户需要终止向其他用户公开其地理位置信息，可随时自行设置为隐身状态。")
Agreement.push("8、为了改善乾坤爻的技术和服务，向用户提供更好的服务体验，乾坤爻或可会自行收集使用或向第三方提供用户的非个人隐私信息。")
Agreement.push("9、乾坤爻保证在合法、正当与必要的原则下收集、使用或者公开用户个人信息且不会收集与提供的服务无关的用户个人信息。")
Agreement.push("10、乾坤爻十分注重保护用户的个人隐私，并制定了《乾坤爻隐私权政策》（点击查看），用户亦可以通过“设置”页面里的“帮助”来进行具体查看，用户确认并同意使用乾坤爻提供的服务将被视为接受《乾坤爻隐私权政策》。")
Agreement.push("四、内容规范")
Agreement.push("1、本条所述内容是指用户使用本服务过程中所制作、上载、复制、发布、传播的任何内容，包括但不限于帐号头像、名称、用户说明等注册信息及认证资料，或文字、语音、图片、视频、图文等发送、回复或自动回复消息和相关链接页面，以及其他使用帐号或本服务所产生的内容。")
Agreement.push("2、用户不得利用“乾坤爻”帐号或本服务制作、上载、复制、发布、传播如下法律、法规和政策禁止的内容：")
Agreement.push("(1) 反对宪法所确定的基本原则的；")
Agreement.push("(2) 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；")
Agreement.push("(3) 损害国家荣誉和利益的；")
Agreement.push("(4) 煽动民族仇恨、民族歧视，破坏民族团结的；")
Agreement.push("(5) 破坏国家宗教政策，宣扬邪教和封建迷信的；")
Agreement.push("(6) 散布谣言，扰乱社会秩序，破坏社会稳定的；")
Agreement.push("(7) 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；")
Agreement.push("(8) 侮辱或者诽谤他人，侵害他人合法权益的；")
Agreement.push("(9) 不遵守法律法规底线、社会主义制度底线、国家利益底线、公民合法权益底线、社会公共秩序底线、道德风尚底线和信息真实性底线的“七条底线”要求的；")
Agreement.push("(10) 含有法律、行政法规禁止的其他内容的信息。")
Agreement.push("3、用户不得利用“乾坤爻”帐号或本服务制作、上载、复制、发布、传播如下干扰“乾坤爻”正常运营，以及侵犯其他用户或第三方合法权益的内容：")
Agreement.push("(1) 含有任何性或性暗示的；")
Agreement.push("(2) 含有辱骂、恐吓、威胁内容的；")
Agreement.push("(3) 含有骚扰、垃圾广告、恶意信息、诱骗信息的；")
Agreement.push("(4) 涉及他人隐私、个人信息或资料的；")
Agreement.push("(5) 侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的；")
Agreement.push("(6) 含有其他干扰本服务正常运营和侵犯其他用户或第三方合法权益内容的信息。")
Agreement.push("五、使用规则")
Agreement.push("1、用户在本服务中或通过本服务所传送、发布的任何内容并不反映或代表，也不得被视为反映或代表乾坤爻的观点、立场或政策，乾坤爻对此不承担任何责任。")
Agreement.push("2、用户不得利用“乾坤爻”帐号或本服务进行如下行为：")
Agreement.push("(1) 提交、发布虚假信息，或盗用他人头像或资料，冒充、利用他人名义的；")
Agreement.push("(2) 强制、诱导其他用户关注、点击链接页面或分享信息的；")
Agreement.push("(3) 虚构事实、隐瞒真相以误导、欺骗他人的；")
Agreement.push("(4) 利用技术手段批量建立虚假帐号的；")
Agreement.push("(5) 利用“乾坤爻”帐号或本服务从事任何违法犯罪活动的；")
Agreement.push("(6) 制作、发布与以上行为相关的方法、工具，或对此类方法、工具进行运营或传播，无论这些行为是否为商业目的；")
Agreement.push("(7) 其他违反法律法规规定、侵犯其他用户合法权益、干扰“乾坤爻”正常运营或乾坤爻未明示授权的行为。")
Agreement.push("3、用户须对利用“乾坤爻”帐号或本服务传送信息的真实性、合法性、无害性、准确性、有效性等全权负责，与用户所传播的信息相关的任何法律责任由用户自行承担，与乾坤爻无关。如因此给乾坤爻或第三方造成损害的，用户应当依法予以赔偿。")
Agreement.push("4、乾坤爻提供的服务中可能包括广告，用户同意在使用过程中显示乾坤爻和第三方供应商、合作伙伴提供的广告。除法律法规明确规定外，用户应自行对依该广告信息进行的交易负责，对用户因依该广告信息进行的交易或前述广告商提供的内容而遭受的损失或损害，乾坤爻不承担任何责任。")
Agreement.push("5、除非乾坤爻书面许可，用户不得从事下列任一行为：")
Agreement.push("(1) 删除软件及其副本上关于著作权的信息；")
Agreement.push("(2) 对软件进行反向工程、反向汇编、反向编译，或者以其他方式尝试发现软件的源代码；")
Agreement.push("(3) 对乾坤爻拥有知识产权的内容进行使用、出租、出借、复制、修改、链接、转载、汇编、发表、出版、建立镜像站点等；")
Agreement.push("(4) 对软件或者软件运行过程中释放到任何终端内存中的数据、软件运行过程中客户端与服务器端的交互数据，以及软件运行所必需的系统数据，进行复制、修改、增加、删除、挂接运行或创作任何衍生作品，形式包括但不限于使用插件、外挂或非经乾坤爻授权的第三方工具/服务接入软件和相关系统；")
Agreement.push("(5) 通过修改或伪造软件运行中的指令、数据，增加、删减、变动软件的功能或运行效果，或者将用于上述用途的软件、方法进行运营或向公众传播，无论这些行为是否为商业目的；")
Agreement.push("(6) 通过非乾坤爻开发、授权的第三方软件、插件、外挂、系统，登录或使用乾坤爻软件及服务，或制作、发布、传播非乾坤爻开发、授权的第三方软件、插件、外挂、系统。")
Agreement.push("六、账户管理")
Agreement.push("1、 “乾坤爻”帐号的所有权归乾坤爻所有，用户完成申请注册手续后，获得“乾坤爻”帐号的使用权，该使用权仅属于初始申请注册人，禁止赠与、借用、租用、转让或售卖。乾坤爻因经营需要，有权回收用户的“乾坤爻”帐号。")
Agreement.push("2、用户可以通过1）查看与编辑个人资料页，2）“设置”页面里的“账号与安全”页面来查询、更改、删除、注销“乾坤爻”帐户上的个人资料、注册信息及传送内容等，但需注意，删除有关信息的同时也会删除用户储存在系统中的文字和图片。用户需承担该风险。")
Agreement.push("3、用户有责任妥善保管注册帐号信息及帐号密码的安全，因用户保管不善可能导致遭受盗号或密码失窃，责任由用户自行承担。用户需要对注册帐号以及密码下的行为承担法律责任。用户同意在任何情况下不使用其他用户的帐号或密码。在用户怀疑他人使用其帐号或密码时，用户同意立即通知乾坤爻。")
Agreement.push("4、用户应遵守本协议的各项条款，正确、适当地使用本服务，如因用户违反本协议中的任何条款，乾坤爻在通知用户后有权依据协议中断或终止对违约用户“乾坤爻”帐号提供服务。同时，乾坤爻保留在任何时候收回“乾坤爻”帐号、用户名的权利。")
Agreement.push("5、如用户注册“乾坤爻”帐号后一年不登录，通知用户后，乾坤爻可以收回该帐号，以免造成资源浪费，由此造成的不利后果由用户自行承担。")
Agreement.push("6、用户可以通过“设置”页面里的“账号与安全”页面来进行账号注销服务，用户确认注销账号是不可恢复的操作，用户应自行备份与乾坤爻账号相关的信息和数据，用户确认操作之前与乾坤爻账号相关的所有服务均已进行妥善处理。用户确认并同意注销账号后并不代表本乾坤爻账号注销前的账号行为和相关责任得到豁免或减轻，如在注销期间，用户的账号被他人投诉、被国家机关调查或者正处于诉讼、仲裁程序中，乾坤爻有限自行终止用户的账号注销并无需另行得到用户的同意。")
Agreement.push("七、数据储存")
Agreement.push("1、乾坤爻不对用户在本服务中相关数据的删除或储存失败负责。")
Agreement.push("2、乾坤爻可以根据实际情况自行决定用户在本服务中数据的最长储存期限，并在服务器上为其分配数据最大存储空间等。用户可根据自己的需要自行备份本服务中的相关数据。")
Agreement.push("3、如用户停止使用本服务或本服务终止，乾坤爻可以从服务器上永久地删除用户的数据。本服务停止、终止后，乾坤爻没有义务向用户返还任何数据。")
Agreement.push("八、风险承担")
Agreement.push("1、用户理解并同意，“乾坤爻”仅为用户提供信息分享、传送及获取的平台，用户必须为自己注册帐号下的一切行为负责，包括用户所传送的任何内容以及由此产生的任何后果。用户应对“乾坤爻”及本服务中的内容自行加以判断，并承担因使用内容而引起的所有风险，包括因对内容的正确性、完整性或实用性的依赖而产生的风险。乾坤爻无法且不会对因用户行为而导致的任何损失或损害承担责任。")
Agreement.push("如果用户发现任何人违反本协议约定或以其他不当的方式使用本服务，请立即向乾坤爻举报或投诉，举报或投诉电话为028-62836666，乾坤爻将依本协议约定进行处理。")
Agreement.push("2、用户理解并同意，因业务发展需要，乾坤爻保留单方面对本服务的全部或部分服务内容变更、暂停、终止或撤销的权利，用户需承担此风险。")
Agreement.push("九、知识产权声明")
Agreement.push("1、除本服务中涉及广告的知识产权由相应广告商享有外，乾坤爻在本服务中提供的内容（包括但不限于网页、文字、图片、音频、视频、图表等）的知识产权均归乾坤爻所有，但用户在使用本服务前对自己发布的内容已合法取得知识产权的除外。")
Agreement.push("2、除另有特别声明外，乾坤爻提供本服务时所依托软件的著作权、专利权及其他知识产权均归乾坤爻所有。")
Agreement.push("3、乾坤爻在本服务中所涉及的图形、文字或其组成，以及其他乾坤爻标志及产品、服务名称（以下统称“乾坤爻标识”），其著作权或商标权归乾坤爻所有。未经乾坤爻事先书面同意，用户不得将乾坤爻标识以任何方式展示或使用或作其他处理，也不得向他人表明用户有权展示、使用、或其他有权处理乾坤爻标识的行为。")
Agreement.push("4、上述及其他任何乾坤爻或相关广告商依法拥有的知识产权均受到法律保护，未经乾坤爻或相关广告商书面许可，用户不得以任何形式进行使用或创造相关衍生作品。")
Agreement.push("5、用户在使用乾坤爻服务时发表上传的文字、图片、视频、音频、软件以及表演等信息，此部分信息的知识产权归用户，责任由用户承担。但用户的发表、上传行为视为对乾坤爻的授权，用户理解并同意授予乾坤爻及其关联公司全球范围内完全免费、不可撤销、独家、永久、可转授权和可再许可的权利，包括但不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权以及《著作权法》规定的由著作权人享有的其他著作财产权利及邻接权利。乾坤爻可自行选择是否使用以及使用方式，包括但不限于将前述信息在乾坤爻旗下的服务平台上使用与传播，将上述信息再次编辑后使用，以及由乾坤爻授权给合作方使用、编辑与传播等。")
Agreement.push("十、法律责任")
Agreement.push("1、如果乾坤爻发现或收到他人举报或投诉用户违反本协议约定的，乾坤爻有权不经通知随时对相关内容，包括但不限于用户资料、聊天记录进行审查、删除，并视情节轻重对违规帐号处以包括但不限于警告、帐号封禁 、设备封禁 、功能封禁 的处罚，且通知用户处理结果。")
Agreement.push("2、因违反用户协议被封禁的用户，可以自行到 http://immomo.com/my 查询封禁期限，并在封禁期限届满后自助解封。其中，被实施功能封禁的用户会在封禁期届满后自动恢复被封禁功能。被封禁用户可向乾坤爻网站相关页面提交申诉，乾坤爻将对申诉进行审查，并自行合理判断决定是否变更处罚措施。")
Agreement.push("3、用户理解并同意，乾坤爻有权依合理判断对违反有关法律法规或本协议规定的行为进行处罚，对违法违规的任何用户采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，用户应承担由此而产生的一切法律责任。")
Agreement.push("4、用户理解并同意，因用户违反本协议约定，导致或产生的任何第三方主张的任何索赔、要求或损失，包括合理的律师费，用户应当赔偿乾坤爻与合作公司、关联公司，并使之免受损害。")
Agreement.push("十一、不可抗力及其他免责事由")
Agreement.push("1、用户理解并确认，在使用本服务的过程中，可能会遇到不可抗力等风险因素，使本服务发生中断。不可抗力是指不能预见、不能克服并不能避免且对一方或双方造成重大影响的客观事件，包括但不限于自然灾害如洪水、地震、瘟疫流行和风暴等以及社会事件如战争、动乱、政府行为等。出现上述情况时，乾坤爻将努力在第一时间与相关单位配合，及时进行修复，但是由此给用户或第三方造成的损失，乾坤爻及合作单位在法律允许的范围内免责。")
Agreement.push("2、本服务同大多数互联网服务一样，受包括但不限于用户原因、网络服务质量、社会环境等因素的差异影响，可能受到各种安全问题的侵扰，如他人利用用户的资料，造成现实生活中的骚扰；用户下载安装的其它软件或访问的其他网站中含有“特洛伊木马”等病毒，威胁到用户的计算机信息和数据的安全，继而影响本服务的正常使用等等。用户应加强信息安全及使用者资料的保护意识，要注意加强密码保护，以免遭致损失和骚扰。")
Agreement.push("3、用户理解并确认，本服务存在因不可抗力、计算机病毒或黑客攻击、系统不稳定、用户所在位置、用户关机以及其他任何技术、互联网络、通信线路原因等造成的服务中断或不能满足用户要求的风险，因此导致的用户或第三方任何损失，乾坤爻不承担任何责任。")
Agreement.push("4、用户理解并确认，在使用本服务过程中存在来自任何他人的包括误导性的、欺骗性的、威胁性的、诽谤性的、令人反感的或非法的信息，或侵犯他人权利的匿名或冒名的信息，以及伴随该等信息的行为，因此导致的用户或第三方的任何损失，乾坤爻不承担任何责任。")
Agreement.push("5、用户理解并确认，乾坤爻需要定期或不定期地对“乾坤爻”平台或相关的设备进行检修或者维护，如因此类情况而造成服务在合理时间内的中断，乾坤爻无需为此承担任何责任，但乾坤爻应事先进行通告。")
Agreement.push("6、乾坤爻依据法律法规、本协议约定获得处理违法违规或违约内容的权利，该权利不构成乾坤爻的义务或承诺，乾坤爻不能保证及时发现违法违规或违约行为或进行相应处理。")
Agreement.push("7、用户理解并确认，对于乾坤爻向用户提供的下列产品或者服务的质量缺陷及其引发的任何损失，乾坤爻无需承担任何责任：")
Agreement.push("(1) 乾坤爻向用户免费提供的服务；")
Agreement.push("(2) 乾坤爻向用户赠送的任何产品或者服务。")
Agreement.push("8、在任何情况下，乾坤爻均不对任何间接性、后果性、惩罚性、偶然性、特殊性或刑罚性的损害，包括因用户使用“乾坤爻”或本服务而遭受的利润损失，承担责任（即使乾坤爻已被告知该等损失的可能性亦然）。尽管本协议中可能含有相悖的规定，乾坤爻对用户承担的全部责任，无论因何原因或何种行为方式，始终不超过用户因使用乾坤爻提供的服务而支付给乾坤爻的费用(如有)。")
Agreement.push("十二、服务的变更、中断、终止")
Agreement.push("1、鉴于网络服务的特殊性，用户同意乾坤爻有权随时变更、中断或终止部分或全部的服务（包括收费服务）。乾坤爻变更、中断或终止的服务，乾坤爻应当在变更、中断或终止之前通知用户，并应向受影响的用户提供等值的替代性的服务；如用户不愿意接受替代性的服务。")
Agreement.push("2、如发生下列任何一种情形，乾坤爻有权变更、中断或终止向用户提供的免费服务或收费服务，而无需对用户或任何第三方承担任何责任：")
Agreement.push("(1) 根据法律规定用户应提交真实信息，而用户提供的个人资料不真实、或与注册时信息不一致又未能提供合理证明；")
Agreement.push("(2) 用户违反相关法律法规或本协议的约定；")
Agreement.push("(3) 按照法律规定或有权机关的要求；")
Agreement.push("(4) 出于安全的原因或其他必要的情形。")
Agreement.push("十三、“附近活动”服务说明与免责条款")
Agreement.push("1、乾坤爻“附近活动”功能板块，是以地理位置为基础、发布用户周边文化活动信息的活动信息共享平台（下称“本平台”）。")
Agreement.push("2、本平台发布之全部文化活动信息,包括但不限于活动地理位置信息，均直接或者间接来自于文化活动主办方。")
Agreement.push("3、本平台发布文化活动信息，意在宣传文化活动、丰富用户文化生活。本平台用户于本平台“附近活动”功能板块发布的留言、评论等信息，均系用户自行发布。本平台不对上述信息的真实性、准确性，或及时性、完整性负责。")
Agreement.push("4、如果相关文化活动主办方及/或相关权利主体，认为该等文化活动信息之发布，侵害其合法权益，可发邮件至mmsrc(at)immomo.com，本平台在核实其提供的证明材料后，将依法履行网络平台发布者的义务，维护其合法权益。")
Agreement.push("十四、其他")
Agreement.push("1、乾坤爻郑重提醒用户注意本协议中免除乾坤爻责任和限制用户权利的条款，请用户仔细阅读，自主考虑风险")
Agreement.push("2、本协议的效力、解释及纠纷的解决，适用于中华人民共和国法律。若用户和乾坤爻之间发生任何纠纷或争议，首先应友好协商解决，协商不成的，用户同意将纠纷或争议提交乾坤爻住所地有管辖权的人民法院管辖。")
Agreement.push("3、本协议的任何条款无论因何种原因无效或不具可执行性，其余条款仍有效，对双方具有约束力。")
Agreement.push("4、由于互联网高速发展，您与乾坤爻签署的本协议列明的条款可能并不能完整罗列并覆盖您与乾坤爻所有权利与义务，现有的约定也不能保证完全符合未来发展的需求。因此，乾坤爻隐私权政策、乾坤爻平台行为规范等均为本协议的补充协议，与本协议不可分割且具有同等法律效力。如您使用乾坤爻平台服务，视为您同意上述补充协议。")
Agreement.push("")
Agreement.push("")
let AgreePagethis = undefined
class AgreePage extends React.Component {
   constructor(props) {
    super(props);
		this.state = {
    };AgreePagethis = this

  }
  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    
    return{
      title: RouteConfig["AgreePage"].name,
      headerLeft: () => (
        <TouchableOpacity onPress={() => {navigate(RouteConfig['kitPage'].route, { text: "refresh" })}}>
        <HeaderBackButton >{RouteConfig['kitPage'].name}</HeaderBackButton>
        </TouchableOpacity>),
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
                        data={Agreement}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(data) => (<View><Text style={{fontSize:FontStyleConfig.getFontApplySize()+15,paddingLeft:15,paddingRight:15}}>{data.item}</Text><WhiteSpace size="xl" /></View>)}
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
module.exports=AgreePage;  