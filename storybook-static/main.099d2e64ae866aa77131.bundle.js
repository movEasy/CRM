(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{205:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(56),C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(57),C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(59),C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(58),C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(60),C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(4),styled_components__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__),_Overview_Overview__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(97),_OverviewDetails_OverviewDetails__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(98);function _templateObject2(){var data=Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    max-width: 100%;\n    background-color: #00A2A1;\n    border-radius: 0.4rem 0.4rem 0 0;\n\n    color: white;\n\n    h2:first-child {\n        padding-left: 1rem;\n    }\n\n    h2:last-child {\n        padding-right: 1rem;\n    }\n"]);return _templateObject2=function(){return data},data}function _templateObject(){var data=Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n    border: 1px solid black;\n    width: 50rem;\n    height: 20rem;\n    border-radius: 0.4rem;\n    overflow: hidden;\n"]);return _templateObject=function(){return data},data}var WrapperMain=styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject()),Header=styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject2()),id2=[["4016872","Siemens/MD/Christiaan Torres Stocki","complete"],["4014128-1204","Corp-AP Pension-Various tax advice","complete"]],id3=[["4016146","M&PS-Nielse Soelberg","complete"],["4016146","M&PS Siemens Project 7P","notComplete"]],Main=function(_Component){function Main(){var _getPrototypeOf2,_this;Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Main);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_getPrototypeOf2=Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Main)).call.apply(_getPrototypeOf2,[this].concat(args)))).state={departmentSelected:!1,id:""},_this.handleDepartmentSelect=function(id){console.log(id),_this.setState(function(prevState){return{departmentSelected:!prevState.departmentSelected,id:id}})},_this}return Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Main,_Component),Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Main,[{key:"render",value:function(){var dataDetails,_this2=this,departments=this.props.data.departments,_this$state=this.state,departmentSelected=_this$state.departmentSelected;switch(_this$state.id){case"1":dataDetails=departments.department1.details;break;case"2":dataDetails=id2;break;case"3":dataDetails=id3;break;default:dataDetails=""}return departmentSelected?react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(WrapperMain,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_OverviewDetails_OverviewDetails__WEBPACK_IMPORTED_MODULE_9__.a,{data:{details:dataDetails},onItemSelect:function(id){return _this2.handleDepartmentSelect(id)}})):react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(WrapperMain,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Header,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2",null,"Service line"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2",null,"Description"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2",null,"No. projects")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Overview_Overview__WEBPACK_IMPORTED_MODULE_8__.a,{data:{departments:departments},onItemSelect:function(id){return _this2.handleDepartmentSelect(id)}}))}}]),Main}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.a=Main},206:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(56),C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(57),C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(59),C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(58),C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(60),C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(4),styled_components__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__),_ListElement__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(99);function _templateObject4(){var data=Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n    width: 10rem;\n    height: 2rem;\n    cursor: pointer;\n    margin: 1rem 0 1rem 0;\n    background-color: #0091DA;\n    color: white;\n    border: none;\n    border-radius: 0.5rem;\n\n"]);return _templateObject4=function(){return data},data}function _templateObject3(){var data=Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n    display: flex;\n    flex-direction: column;\n\n    border-bottom: 0.01rem solid lightgray;\n    \n    margin: 0;\n    padding: 0;\n\n    div:nth-child(2n + 1 ) {\n        background-color: lightgray;\n    }\n"]);return _templateObject3=function(){return data},data}function _templateObject2(){var data=Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n    display: flex;\n    justify-content: space-between;\n    background-color: #0091DA !important;\n    height: 4rem;\n    align-items: center;\n\n    li {\n        padding-left: 1rem;\n        list-style: none;\n        flex: 1 1 10rem;\n        color: white;\n    }\n"]);return _templateObject2=function(){return data},data}function _templateObject(){var data=Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 50rem;\n\n    border-bottom: 0.01rem solid lightgray;\n"]);return _templateObject=function(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject()),Headers=styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject2()),UlContainer=styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.ul(_templateObject3()),Button=styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.button(_templateObject4()),List=function(_Component){function List(){var _getPrototypeOf2,_this;Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,List);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_getPrototypeOf2=Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(List)).call.apply(_getPrototypeOf2,[this].concat(args)))).state={showAll:!1},_this.handleShowAll=function(){_this.setState(function(prevState){return{showAll:!prevState.showAll}})},_this}return Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(List,_Component),Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(List,[{key:"render",value:function(){var payload,data=this.props.data,showAll=this.state.showAll,dataWithoutHeaders=Object.values(data).slice(1),dataObjShortend=Object.values(dataWithoutHeaders).slice(0,5);return payload=showAll?dataWithoutHeaders:dataObjShortend,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(UlContainer,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Headers,null,data.headers.map(function(el){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li",null,el)})),Object.entries(payload).map(function(el){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ListElement__WEBPACK_IMPORTED_MODULE_8__.a,{data:el[1]})})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{onClick:this.handleShowAll},"Show all"))}}]),List}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.a=List},207:function(module,exports,__webpack_require__){__webpack_require__(208),__webpack_require__(281),module.exports=__webpack_require__(282)},282:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),req=__webpack_require__(384);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(31)(module))},384:function(module,exports,__webpack_require__){var map={"./Box/ItemDetails/ItemDetails.stories.js":385,"./Box/Items/Items.stories.js":397,"./Box/Overview/Overview.stories.js":507,"./Box/OverviewDetails/OverviewDetails.stories.js":508,"./Box/index.stories.js":509,"./List/List.stories.js":510,"./List/ListElement.stories.js":511};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=384},385:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),_ItemDetails__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(95),data={id:"1",item:["4016145","M&PS Siemens Project 7P","notomplete"]};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Box",module).add("Item - details",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ItemDetails__WEBPACK_IMPORTED_MODULE_2__.a,{data:data})})}.call(this,__webpack_require__(31)(module))},397:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(47),_Items__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(96),data={id:"1",infoItem:["XXX1","Corporate Income Tax","10"]},actions={onItemSelect:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onItemSelect")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Box",module).add("Item",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Items__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({data:data},actions))})}.call(this,__webpack_require__(31)(module))},507:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(47),_Overview__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(97),data={departments:{department1:{id:"1",infoItem:["XXX1","Corporate Income Tax","10"]},department2:{id:"2",infoItem:["XXX2","Corporate Income Tax","10"]},department3:{id:"3",infoItem:["XXX3","Corporate Income Tax","10"]}}},actions={onItemSelect:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onItemSelect")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Box",module).add("Overview",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Overview__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({data:data},actions))})}.call(this,__webpack_require__(31)(module))},508:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),_OverviewDetails__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(47),__webpack_require__(98)),data={details:[["4016145","M&PS Siemens Project 7P","notComplete"],["4014674","Novartis-ch-Alexandra Bianca Abraham","complete"],["4016872","Siemens/MD/Christiaan Torres Stocki","complete"],["4014128-1204","Corp-AP Pension-Various tax advice","complete"],["4016146","M&PS-Nielse Soelberg","complete"],["4016146","M&PS Siemens Project 7P","notComplete"]]};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Box",module).add("Overview - details",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OverviewDetails__WEBPACK_IMPORTED_MODULE_3__.a,{data:data})})}.call(this,__webpack_require__(31)(module))},509:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(47),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(205),data={departments:{department1:{id:"1",infoItem:["XXX1","Corporate Income Tax","10"],details:[["4016145","M&PS Siemens Project 7P","notComplete"],["4014674","Novartis-ch-Alexandra Bianca Abraham","complete"],["4016872","Siemens/MD/Christiaan Torres Stocki","complete"],["4014128-1204","Corp-AP Pension-Various tax advice","complete"],["4016146","M&PS-Nielse Soelberg","complete"],["4016146","M&PS Siemens Project 7P","notComplete"],["4016146","M&PS Siemens Project 7P","notComplete"],["4016146","M&PS Siemens Project 7P","notComplete"],["4016146","M&PS Siemens Project 7P","notComplete"],["4016146","M&PS Siemens Project 7P","notComplete"]]},department2:{id:"2",infoItem:["XXX2","Corporate Tax","1"]},department3:{id:"3",infoItem:["XXX3","Income Tax","11"]}}},actions={onItemSelect:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onItemSelect")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Box",module).add("Index",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_3__.a,{data:data,actions:actions})})}.call(this,__webpack_require__(31)(module))},510:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"data",function(){return data});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),_List__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(206),data={headers:["YDERLIGERE","PERSONKREDS","TITEL","VALGFORM","NAVN"],data1:{titles:["Info","Direction","Adm. dir"," - ","Jakob Riis"],details:{adresse:"Skovparken 106",postNrBy:"7190 Billund",indirekteBesiddelse:"Har indirekte besiddelser ",andreRettigheder:"Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed"}},data2:{titles:["Info","Direction","Adm. dir"," - ","Jakob Riis"],details:{adresse:"Skovparken 106",postNrBy:"7190 Billund",indirekteBesiddelse:"Har indirekte besiddelser ",andreRettigheder:"Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed"}},data3:{titles:["Info","Direction","Adm. dir"," - ","Jakob Riis"],details:{adresse:"Skovparken 106",postNrBy:"7190 Billund",indirekteBesiddelse:"Har indirekte besiddelser ",andreRettigheder:"Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed"}},data4:{titles:["Info","Direction","Adm. dir"," - ","Jakob Riis"],details:{adresse:"Skovparken 106",postNrBy:"7190 Billund",indirekteBesiddelse:"Har indirekte besiddelser ",andreRettigheder:"Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed"}},data5:{titles:["Info","Direction","Adm. dir"," - ","Jakob Riis"],details:{adresse:"Skovparken 106",postNrBy:"7190 Billund",indirekteBesiddelse:"Har indirekte besiddelser ",andreRettigheder:"Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed"}},data6:{titles:["Info","Direction","Adm. dir"," - ","Jakob Riis"],details:{adresse:"Skovparken 106",postNrBy:"7190 Billund",indirekteBesiddelse:"Har indirekte besiddelser ",andreRettigheder:"Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed"}},data7:{titles:["Info","Direction","Adm. dir"," - ","Jakob Riis"],details:{adresse:"Skovparken 106",postNrBy:"7190 Billund",indirekteBesiddelse:"Har indirekte besiddelser ",andreRettigheder:"Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed"}}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("List",module).add("List",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_2__.a,{data:data})})}.call(this,__webpack_require__(31)(module))},511:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"data",function(){return data});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),_ListElement__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(99),data={titles:["Direction","Adm. dir"," - ","Jakob Riis"],details:{adresse:"Skovparken 106",postNrBy:"7190 Billund",indirekteBesiddelse:"Har indirekte besiddelser ",andreRettigheder:"Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed"}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("List",module).add("ListElement",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListElement__WEBPACK_IMPORTED_MODULE_2__.a,{data:data})})}.call(this,__webpack_require__(31)(module))},95:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),styled_components__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__),react_icons_md__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(61);function _templateObject(){var data=Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    display: flex;\n    max-width: 100%;\n    justify-content: space-between;\n    align-items: center;\n\n    padding-left: 1rem;\n    padding-right: 1rem;\n    flex: 1 0 auto;\n    max-height: 20%;\n\n    :hover {\n        color: blueviolet;\n    }\n\n    svg {\n        width: 1.2rem;\n        height: 1.2rem;\n        \n        &.complete {\n            color: green;\n        }\n\n        &.not-complete {\n            color: red;\n        }\n    }\n\n"]);return _templateObject=function(){return data},data}var ItemDetailsWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject()),ItemDetails=function(_ref){var _ref$data=_ref.data,id=_ref$data.id,item=_ref$data.item;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemDetailsWrapper,{key:id},item.map(function(el){return"notComplete"===el?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.a,{className:"not-complete"}):"complete"===el?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.a,{className:"complete"}):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,el)}))};__webpack_exports__.a=ItemDetails,ItemDetails.__docgenInfo={description:"",methods:[],displayName:"ItemDetails"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\Box\\ItemDetails\\ItemDetails.js"]={name:"ItemDetails",docgenInfo:ItemDetails.__docgenInfo,path:"src\\stories\\Box\\ItemDetails\\ItemDetails.js"})},96:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4);function _templateObject(){var data=Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    display: flex;\n    max-width: 100%;\n    justify-content: space-between;\n\n    padding-left: 1rem;\n    padding-right: 1rem;\n    flex: 1 0 auto;\n    max-height: 20%;\n\n    :hover {\n        color: blueviolet;\n    }\n\n"]);return _templateObject=function(){return data},data}var ItemWrapper=__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__).a.div(_templateObject()),Items=function(_ref){var _ref$data=_ref.data,id=_ref$data.id,infoItem=_ref$data.infoItem,onItemSelect=_ref.onItemSelect;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemWrapper,{key:Math.random(),onClick:function(){return onItemSelect(id)}},infoItem.map(function(el){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,el)}))};__webpack_exports__.a=Items,Items.__docgenInfo={description:"",methods:[],displayName:"Items"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\Box\\Items\\Items.js"]={name:"Items",docgenInfo:Items.__docgenInfo,path:"src\\stories\\Box\\Items\\Items.js"})},97:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),styled_components__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__),_Items_Items__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(96);function _templateObject(){var data=Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    display: flex;\n    flex-direction: column;\n    cursor: pointer;\n\n    max-width: 100%;\n    height: 100%;\n    overflow-y: scroll;\n"]);return _templateObject=function(){return data},data}var WrapperDepartment=styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject()),Overview=function(_ref){var departments=_ref.data.departments,_onItemSelect=_ref.onItemSelect;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrapperDepartment,null,Object.values(departments).map(function(el){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Items_Items__WEBPACK_IMPORTED_MODULE_3__.a,{key:Math.random(),onItemSelect:function(id){return _onItemSelect(id)},data:{id:el.id,infoItem:el.infoItem}})}))};__webpack_exports__.a=Overview,Overview.__docgenInfo={description:"",methods:[],displayName:"Overview"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\Box\\Overview\\Overview.js"]={name:"Overview",docgenInfo:Overview.__docgenInfo,path:"src\\stories\\Box\\Overview\\Overview.js"})},98:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),styled_components__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__),_ItemDetails_ItemDetails__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(95);function _templateObject(){var data=Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    display: flex;\n    flex-direction: column;\n    cursor: pointer;\n\n    max-width: 100%;\n    height: 100%;\n    overflow-y: scroll;\n"]);return _templateObject=function(){return data},data}var WrapperDetails=styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject()),OverviewDetails=function(_ref){var details=_ref.data.details;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrapperDetails,null,Object.values(details).map(function(el){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ItemDetails_ItemDetails__WEBPACK_IMPORTED_MODULE_3__.a,{data:{id:"1",item:el}})}))};__webpack_exports__.a=OverviewDetails,OverviewDetails.__docgenInfo={description:"",methods:[],displayName:"OverviewDetails"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\Box\\OverviewDetails\\OverviewDetails.js"]={name:"OverviewDetails",docgenInfo:OverviewDetails.__docgenInfo,path:"src\\stories\\Box\\OverviewDetails\\OverviewDetails.js"})},99:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(56),C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(57),C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(59),C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(58),C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(60),C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(4),styled_components__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__),react_icons_md__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(61);function _templateObject3(){var data=Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n    background-color: #F0F9FD !important;\n    padding-left: 1rem;\n    padding-right: 1rem;\n\n    p {\n        color: #0091DA;\n        font-weight: 600;\n    }\n\n    span {\n        color: #4FB3E5;\n        font-weight: 400;\n    }\n"]);return _templateObject3=function(){return data},data}function _templateObject2(){var data=Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n    list-style: none;\n    display: flex;\n    padding-left: 1rem;\n    flex: 1 1 10rem;\n"]);return _templateObject2=function(){return data},data}function _templateObject(){var data=Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    height: 3rem;\n    width: 100%;\n\n    cursor: pointer;\n\n    :hover {\n        color: #4FB3E5;\n    }\n\n"]);return _templateObject=function(){return data},data}var Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject()),DataElements=styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.li(_templateObject2()),DataExpanded=styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject3()),ListElement=function(_Component){function ListElement(){var _getPrototypeOf2,_this;Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,ListElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_getPrototypeOf2=Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(ListElement)).call.apply(_getPrototypeOf2,[this].concat(args)))).state={isOpen:!1},_this.handleIsOpen=function(){_this.setState(function(prevState){return{isOpen:!prevState.isOpen}})},_this}return Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(ListElement,_Component),Object(C_Users_mov_Desktop_DevProjects_kpmg_crm_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(ListElement,[{key:"render",value:function(){var isOpen=this.state.isOpen,_this$props$data=this.props.data,titles=_this$props$data.titles,details=_this$props$data.details,dataExpanded=react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DataExpanded,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,"Adresse: ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",null,details.adresse)),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,"Postnr & By: ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",null,details.postNrBy)),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,"Indirekte besiddelser: ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",null,details.indirekteBesiddelse)),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,"Andre rettigheder: ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",null,details.andreRettigheder)));return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Wrapper,{onClick:this.handleIsOpen},titles.map(function(el){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DataElements,null," ",isOpen&&"Info"===el?react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.c,null)," ",el):isOpen||"Info"!==el?el:react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.b,null)," ",el)," ")})),!0===isOpen?dataExpanded:"")}}]),ListElement}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.a=ListElement}},[[207,1,2]]]);
//# sourceMappingURL=main.099d2e64ae866aa77131.bundle.js.map