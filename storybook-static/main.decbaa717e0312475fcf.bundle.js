(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(63),_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(64),_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(67),_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(65),_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(68),_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(21),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(22),styled_components__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__),_ListElement__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(66);function _templateObject4(){var data=Object(_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n    width: 10rem;\n    height: 2rem;\n    cursor: pointer;\n    margin: 1rem 0 1rem 0;\n    background-color: #0091DA;\n    color: white;\n    border: none;\n    border-radius: 0.5rem;\n\n"]);return _templateObject4=function(){return data},data}function _templateObject3(){var data=Object(_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n    display: flex;\n    flex-direction: column;\n\n    border-bottom: 0.01rem solid lightgray;\n    \n    margin: 0;\n    padding: 0;\n\n    div:nth-child(2n + 1 ) {\n        background-color: lightgray;\n    }\n"]);return _templateObject3=function(){return data},data}function _templateObject2(){var data=Object(_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n    display: flex;\n    justify-content: space-between;\n    background-color: #0091DA !important;\n    height: 4rem;\n    align-items: center;\n\n    li {\n        padding-left: 1rem;\n        list-style: none;\n        flex: 1 1 10rem;\n        color: white;\n    }\n"]);return _templateObject2=function(){return data},data}function _templateObject(){var data=Object(_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 50rem;\n\n    border-bottom: 0.01rem solid lightgray;\n"]);return _templateObject=function(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject()),Headers=styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject2()),UlContainer=styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.ul(_templateObject3()),Button=styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.button(_templateObject4()),List=function(_Component){function List(){var _getPrototypeOf2,_this;Object(_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,List);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=Object(_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_getPrototypeOf2=Object(_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(List)).call.apply(_getPrototypeOf2,[this].concat(args)))).state={showAll:!1},_this.handleShowAll=function(){_this.setState(function(prevState){return{showAll:!prevState.showAll}})},_this}return Object(_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(List,_Component),Object(_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(List,[{key:"render",value:function(){var payload,data=this.props.data,showAll=this.state.showAll,dataWithoutHeaders=Object.values(data).slice(1),dataObjShortend=Object.values(dataWithoutHeaders).slice(0,5);return payload=showAll?dataWithoutHeaders:dataObjShortend,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(UlContainer,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Headers,null,data.headers.map(function(el){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li",null,el)})),Object.entries(payload).map(function(el){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ListElement__WEBPACK_IMPORTED_MODULE_8__.a,{data:el[1]})})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{onClick:this.handleShowAll},"Show all"))}}]),List}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.a=List},152:function(module,exports,__webpack_require__){__webpack_require__(153),__webpack_require__(226),module.exports=__webpack_require__(227)},227:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(40),req=__webpack_require__(349);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(75)(module))},349:function(module,exports,__webpack_require__){var map={"./List/List.stories.js":350,"./List/ListElement.stories.js":362};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=349},350:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"data",function(){return data});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(40),_List__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(151),data={headers:["YDERLIGERE","PERSONKREDS","TITEL","VALGFORM","NAVN"],data1:{titles:["Info","Direction","Adm. dir"," - ","Jakob Riis"],details:{adresse:"Skovparken 106",postNrBy:"7190 Billund",indirekteBesiddelse:"Har indirekte besiddelser ",andreRettigheder:"Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed"}},data2:{titles:["Info","Direction","Adm. dir"," - ","Jakob Riis"],details:{adresse:"Skovparken 106",postNrBy:"7190 Billund",indirekteBesiddelse:"Har indirekte besiddelser ",andreRettigheder:"Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed"}},data3:{titles:["Info","Direction","Adm. dir"," - ","Jakob Riis"],details:{adresse:"Skovparken 106",postNrBy:"7190 Billund",indirekteBesiddelse:"Har indirekte besiddelser ",andreRettigheder:"Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed"}},data4:{titles:["Info","Direction","Adm. dir"," - ","Jakob Riis"],details:{adresse:"Skovparken 106",postNrBy:"7190 Billund",indirekteBesiddelse:"Har indirekte besiddelser ",andreRettigheder:"Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed"}},data5:{titles:["Info","Direction","Adm. dir"," - ","Jakob Riis"],details:{adresse:"Skovparken 106",postNrBy:"7190 Billund",indirekteBesiddelse:"Har indirekte besiddelser ",andreRettigheder:"Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed"}},data6:{titles:["Info","Direction","Adm. dir"," - ","Jakob Riis"],details:{adresse:"Skovparken 106",postNrBy:"7190 Billund",indirekteBesiddelse:"Har indirekte besiddelser ",andreRettigheder:"Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed"}},data7:{titles:["Info","Direction","Adm. dir"," - ","Jakob Riis"],details:{adresse:"Skovparken 106",postNrBy:"7190 Billund",indirekteBesiddelse:"Har indirekte besiddelser ",andreRettigheder:"Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed"}}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("List",module).add("List",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_2__.a,{data:data})})}.call(this,__webpack_require__(75)(module))},362:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"data",function(){return data});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(40),_ListElement__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(66),data={titles:["Direction","Adm. dir"," - ","Jakob Riis"],details:{adresse:"Skovparken 106",postNrBy:"7190 Billund",indirekteBesiddelse:"Har indirekte besiddelser ",andreRettigheder:"Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed"}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("List",module).add("ListElement",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListElement__WEBPACK_IMPORTED_MODULE_2__.a,{data:data})})}.call(this,__webpack_require__(75)(module))},66:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(63),_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(64),_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(67),_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(65),_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(68),_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(21),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(22),styled_components__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__),react_icons_md__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(99);function _templateObject3(){var data=Object(_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n    background-color: #F0F9FD !important;\n    padding-left: 1rem;\n    padding-right: 1rem;\n\n    p {\n        color: #0091DA;\n        font-weight: 600;\n    }\n\n    span {\n        color: #4FB3E5;\n        font-weight: 400;\n    }\n"]);return _templateObject3=function(){return data},data}function _templateObject2(){var data=Object(_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n    list-style: none;\n    display: flex;\n    padding-left: 1rem;\n    flex: 1 1 10rem;\n"]);return _templateObject2=function(){return data},data}function _templateObject(){var data=Object(_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    height: 3rem;\n    width: 100%;\n\n    cursor: pointer;\n\n    :hover {\n        color: #4FB3E5;\n    }\n\n"]);return _templateObject=function(){return data},data}var Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject()),DataElements=styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.li(_templateObject2()),DataExpanded=styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject3()),ListElement=function(_Component){function ListElement(){var _getPrototypeOf2,_this;Object(_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,ListElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=Object(_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_getPrototypeOf2=Object(_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(ListElement)).call.apply(_getPrototypeOf2,[this].concat(args)))).state={isOpen:!1},_this.handleIsOpen=function(){_this.setState(function(prevState){return{isOpen:!prevState.isOpen}})},_this}return Object(_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(ListElement,_Component),Object(_Users_mbv_Documents_Projects_Work_CRM_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(ListElement,[{key:"render",value:function(){var isOpen=this.state.isOpen,_this$props$data=this.props.data,titles=_this$props$data.titles,details=_this$props$data.details,dataExpanded=react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DataExpanded,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,"Adresse: ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",null,details.adresse)),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,"Postnr & By: ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",null,details.postNrBy)),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,"Indirekte besiddelser: ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",null,details.indirekteBesiddelse)),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,"Andre rettigheder: ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",null,details.andreRettigheder)));return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Wrapper,{onClick:this.handleIsOpen},titles.map(function(el){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DataElements,null," ",isOpen&&"Info"===el?react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.b,null)," ",el):isOpen||"Info"!==el?el:react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.a,null)," ",el)," ")})),!0===isOpen?dataExpanded:"")}}]),ListElement}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.a=ListElement}},[[152,1,2]]]);
//# sourceMappingURL=main.decbaa717e0312475fcf.bundle.js.map