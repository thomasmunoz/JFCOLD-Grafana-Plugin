/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
define(["@grafana/data","react","@emotion/css","@grafana/ui"], (__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE__emotion_css__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__) => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/SimplePanel.tsx":
/*!************************************!*\
  !*** ./components/SimplePanel.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SimplePanel: () => (/* binding */ SimplePanel)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/css */ \"@emotion/css\");\n/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ \"@grafana/ui\");\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst getStyles = ()=>{\n    return {\n        wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)`\n      font-family: Open Sans;\n      position: relative;\n    `,\n        svg: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)`\n      position: absolute;\n      top: 0;\n      left: 0;\n    `,\n        textBox: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)`\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    `\n    };\n};\nconst SimplePanel = ({ options, data, width, height })=>{\n    const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();\n    const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.wrapper, (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)`\n          width: ${width}px;\n          height: ${height}px;\n        `)\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n        className: styles.svg,\n        width: width,\n        height: height,\n        xmlns: \"http://www.w3.org/2000/svg\",\n        xmlnsXlink: \"http://www.w3.org/1999/xlink\",\n        viewBox: `-${width / 2} -${height / 2} ${width} ${height}`\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", {\n        style: {\n            fill: theme.colors.primary.main\n        },\n        r: 100\n    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: styles.textBox\n    }, options.showSeriesCount && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Number of series: \", data.series.length), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Text option value: \", options.text)));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpbXBsZVBhbmVsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBR2E7QUFDYTtBQUlwRCxNQUFNSyxZQUFZO0lBQ2hCLE9BQU87UUFDTEMsU0FBU0wsaURBQUcsQ0FBQzs7O0lBR2IsQ0FBQztRQUNETSxLQUFLTixpREFBRyxDQUFDOzs7O0lBSVQsQ0FBQztRQUNETyxTQUFTUCxpREFBRyxDQUFDOzs7OztJQUtiLENBQUM7SUFDSDtBQUNGO0FBRU8sTUFBTVEsY0FBK0IsQ0FBQyxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUU7SUFDM0UsTUFBTUMsUUFBUVYsc0RBQVNBO0lBQ3ZCLE1BQU1XLFNBQVNaLHVEQUFVQSxDQUFDRTtJQUMxQixxQkFDRSwyREFBQ1c7UUFDQ0MsV0FBV2YsZ0RBQUVBLENBQ1hhLE9BQU9ULE9BQU8sRUFDZEwsaURBQUcsQ0FBQztpQkFDSyxFQUFFVyxNQUFNO2tCQUNQLEVBQUVDLE9BQU87UUFDbkIsQ0FBQztxQkFHSCwyREFBQ047UUFDQ1UsV0FBV0YsT0FBT1IsR0FBRztRQUNyQkssT0FBT0E7UUFDUEMsUUFBUUE7UUFDUkssT0FBTTtRQUNOQyxZQUFXO1FBQ1hDLFNBQVMsQ0FBQyxDQUFDLEVBQUVSLFFBQVEsRUFBRSxFQUFFLEVBQUVDLFNBQVMsRUFBRSxDQUFDLEVBQUVELE1BQU0sQ0FBQyxFQUFFQyxPQUFPLENBQUM7cUJBRTFELDJEQUFDUSx5QkFDQywyREFBQ0M7UUFBT0MsT0FBTztZQUFFQyxNQUFNVixNQUFNVyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSTtRQUFDO1FBQUdDLEdBQUc7d0JBSTNELDJEQUFDWjtRQUFJQyxXQUFXRixPQUFPUCxPQUFPO09BQzNCRSxRQUFRbUIsZUFBZSxrQkFBSSwyREFBQ2IsYUFBSSxzQkFBbUJMLEtBQUttQixNQUFNLENBQUNDLE1BQU0saUJBQ3RFLDJEQUFDZixhQUFJLHVCQUFvQk4sUUFBUXNCLElBQUk7QUFJN0MsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL29oYXlvb2x0ZC1saXZlb2JqZWN0YXBpY2FsbC1wYW5lbC8uL2NvbXBvbmVudHMvU2ltcGxlUGFuZWwudHN4PzIyMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBhbmVsUHJvcHMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNpbXBsZU9wdGlvbnMgfSBmcm9tICd0eXBlcyc7XG5pbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IHVzZVN0eWxlczIsIHVzZVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgUGFuZWxQcm9wczxTaW1wbGVPcHRpb25zPiB7fVxuXG5jb25zdCBnZXRTdHlsZXMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgd3JhcHBlcjogY3NzYFxuICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBgLFxuICAgIHN2ZzogY3NzYFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICBgLFxuICAgIHRleHRCb3g6IGNzc2BcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGAsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgU2ltcGxlUGFuZWw6IFJlYWN0LkZDPFByb3BzPiA9ICh7IG9wdGlvbnMsIGRhdGEsIHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lMigpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgc3R5bGVzLndyYXBwZXIsXG4gICAgICAgIGNzc2BcbiAgICAgICAgICB3aWR0aDogJHt3aWR0aH1weDtcbiAgICAgICAgICBoZWlnaHQ6ICR7aGVpZ2h0fXB4O1xuICAgICAgICBgXG4gICAgICApfVxuICAgID5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3ZnfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICB2aWV3Qm94PXtgLSR7d2lkdGggLyAyfSAtJHtoZWlnaHQgLyAyfSAke3dpZHRofSAke2hlaWdodH1gfVxuICAgICAgPlxuICAgICAgICA8Zz5cbiAgICAgICAgICA8Y2lyY2xlIHN0eWxlPXt7IGZpbGw6IHRoZW1lLmNvbG9ycy5wcmltYXJ5Lm1haW4gfX0gcj17MTAwfSAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0Qm94fT5cbiAgICAgICAge29wdGlvbnMuc2hvd1Nlcmllc0NvdW50ICYmIDxkaXY+TnVtYmVyIG9mIHNlcmllczoge2RhdGEuc2VyaWVzLmxlbmd0aH08L2Rpdj59XG4gICAgICAgIDxkaXY+VGV4dCBvcHRpb24gdmFsdWU6IHtvcHRpb25zLnRleHR9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjc3MiLCJjeCIsInVzZVN0eWxlczIiLCJ1c2VUaGVtZTIiLCJnZXRTdHlsZXMiLCJ3cmFwcGVyIiwic3ZnIiwidGV4dEJveCIsIlNpbXBsZVBhbmVsIiwib3B0aW9ucyIsImRhdGEiLCJ3aWR0aCIsImhlaWdodCIsInRoZW1lIiwic3R5bGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwieG1sbnMiLCJ4bWxuc1hsaW5rIiwidmlld0JveCIsImciLCJjaXJjbGUiLCJzdHlsZSIsImZpbGwiLCJjb2xvcnMiLCJwcmltYXJ5IiwibWFpbiIsInIiLCJzaG93U2VyaWVzQ291bnQiLCJzZXJpZXMiLCJsZW5ndGgiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SimplePanel.tsx\n");

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   plugin: () => (/* binding */ plugin)\n/* harmony export */ });\n/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ \"@grafana/data\");\n/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SimplePanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SimplePanel */ \"./components/SimplePanel.tsx\");\n\n\nconst plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_components_SimplePanel__WEBPACK_IMPORTED_MODULE_1__.SimplePanel).setPanelOptions((builder)=>{\n    return builder.addTextInput({\n        path: 'text',\n        name: 'Simple text option',\n        description: 'Description of panel option',\n        defaultValue: 'Default value of text input option'\n    }).addBooleanSwitch({\n        path: 'showSeriesCount',\n        name: 'Show series counter',\n        defaultValue: false\n    }).addRadio({\n        path: 'seriesCountSize',\n        defaultValue: 'sm',\n        name: 'Series counter size',\n        settings: {\n            options: [\n                {\n                    value: 'sm',\n                    label: 'Small'\n                },\n                {\n                    value: 'md',\n                    label: 'Medium'\n                },\n                {\n                    value: 'lg',\n                    label: 'Large'\n                }\n            ]\n        },\n        showIf: (config)=>config.showSeriesCount\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUVXO0FBRWhELE1BQU1FLFNBQVMsSUFBSUYsc0RBQVdBLENBQWdCQyxnRUFBV0EsRUFBRUUsZUFBZSxDQUFDLENBQUNDO0lBQ2pGLE9BQU9BLFFBQ0pDLFlBQVksQ0FBQztRQUNaQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxjQUFjO0lBQ2hCLEdBQ0NDLGdCQUFnQixDQUFDO1FBQ2hCSixNQUFNO1FBQ05DLE1BQU07UUFDTkUsY0FBYztJQUNoQixHQUNDRSxRQUFRLENBQUM7UUFDUkwsTUFBTTtRQUNORyxjQUFjO1FBQ2RGLE1BQU07UUFDTkssVUFBVTtZQUNSQyxTQUFTO2dCQUNQO29CQUNFQyxPQUFPO29CQUNQQyxPQUFPO2dCQUNUO2dCQUNBO29CQUNFRCxPQUFPO29CQUNQQyxPQUFPO2dCQUNUO2dCQUNBO29CQUNFRCxPQUFPO29CQUNQQyxPQUFPO2dCQUNUO2FBQ0Q7UUFDSDtRQUNBQyxRQUFRLENBQUNDLFNBQVdBLE9BQU9DLGVBQWU7SUFDNUM7QUFDSixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2hheW9vbHRkLWxpdmVvYmplY3RhcGljYWxsLXBhbmVsLy4vbW9kdWxlLnRzP2MyMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFuZWxQbHVnaW4gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNpbXBsZU9wdGlvbnMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFNpbXBsZVBhbmVsIH0gZnJvbSAnLi9jb21wb25lbnRzL1NpbXBsZVBhbmVsJztcblxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBQYW5lbFBsdWdpbjxTaW1wbGVPcHRpb25zPihTaW1wbGVQYW5lbCkuc2V0UGFuZWxPcHRpb25zKChidWlsZGVyKSA9PiB7XG4gIHJldHVybiBidWlsZGVyXG4gICAgLmFkZFRleHRJbnB1dCh7XG4gICAgICBwYXRoOiAndGV4dCcsXG4gICAgICBuYW1lOiAnU2ltcGxlIHRleHQgb3B0aW9uJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGVzY3JpcHRpb24gb2YgcGFuZWwgb3B0aW9uJyxcbiAgICAgIGRlZmF1bHRWYWx1ZTogJ0RlZmF1bHQgdmFsdWUgb2YgdGV4dCBpbnB1dCBvcHRpb24nLFxuICAgIH0pXG4gICAgLmFkZEJvb2xlYW5Td2l0Y2goe1xuICAgICAgcGF0aDogJ3Nob3dTZXJpZXNDb3VudCcsXG4gICAgICBuYW1lOiAnU2hvdyBzZXJpZXMgY291bnRlcicsXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIH0pXG4gICAgLmFkZFJhZGlvKHtcbiAgICAgIHBhdGg6ICdzZXJpZXNDb3VudFNpemUnLFxuICAgICAgZGVmYXVsdFZhbHVlOiAnc20nLFxuICAgICAgbmFtZTogJ1NlcmllcyBjb3VudGVyIHNpemUnLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiAnc20nLFxuICAgICAgICAgICAgbGFiZWw6ICdTbWFsbCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogJ21kJyxcbiAgICAgICAgICAgIGxhYmVsOiAnTWVkaXVtJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiAnbGcnLFxuICAgICAgICAgICAgbGFiZWw6ICdMYXJnZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBzaG93SWY6IChjb25maWcpID0+IGNvbmZpZy5zaG93U2VyaWVzQ291bnQsXG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6WyJQYW5lbFBsdWdpbiIsIlNpbXBsZVBhbmVsIiwicGx1Z2luIiwic2V0UGFuZWxPcHRpb25zIiwiYnVpbGRlciIsImFkZFRleHRJbnB1dCIsInBhdGgiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJkZWZhdWx0VmFsdWUiLCJhZGRCb29sZWFuU3dpdGNoIiwiYWRkUmFkaW8iLCJzZXR0aW5ncyIsIm9wdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwic2hvd0lmIiwiY29uZmlnIiwic2hvd1Nlcmllc0NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./module.ts\n");

/***/ }),

/***/ "@emotion/css":
/*!*******************************!*\
  !*** external "@emotion/css" ***!
  \*******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_css__;

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./module.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;