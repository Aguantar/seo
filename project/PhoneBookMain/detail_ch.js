/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./detail_ch.css":
/*!***********************!*\
  !*** ./detail_ch.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ex/./detail_ch.css?");

/***/ }),

/***/ "./detail_ch.js":
/*!**********************!*\
  !*** ./detail_ch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _detail_ch_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail_ch.css */ \"./detail_ch.css\");\n\r\n        // 연락처 데이터 배열 \r\n        const data = [\r\n        {\"id\":\"1\", \"pic\": \"Marvin.png\", \"name\": \"Marvin McKinney\", \"hp\": \"(480) 555-0103\",\"email\" :\"tim.jennings@example.com\" },\r\n            { \"id\":\"2\",\"pic\": \"Eleanor.png\", \"name\": \"Eleanor Pena\", \"hp\": \"(209) 555-0104\",\"email\" :\"Eleanor.123@example.com\"  },\r\n            {\"id\":\"3\", \"pic\": \"Guy.png\", \"name\": \"Guy Hawkins\", \"hp\": \"(307) 555-0133\",\"email\" :\"Strongmarvi@example.com\"  },\r\n            { \"id\":\"4\",\"pic\": \"Esther.png\", \"name\": \"Esther Howard\", \"hp\": \"(239) 555-0108\",\"email\" :\"Esther123@example.com\"  },\r\n            { \"id\":\"5\",\"pic\": \"Kathryn.png\", \"name\": \"Kathryn Murphy\", \"hp\": \"(225) 555-0118\",\"email\" :\"Kathrn123@example.com\"  },\r\n            { \"id\":\"6\",\"pic\": \"Ralph.png\", \"name\": \"Ralph Edwards\", \"hp\": \"(808) 555-0111\",\"email\" :\"bill.sanders@example.com\"  }\r\n        ];\r\n\r\n        // URL에서 id 파라미터를 가져오기\r\n        const params = new URLSearchParams(window.location.search);  // 현재 URL에서 쿼리 문자열을 파싱\r\n        const id = params.get(\"id\");  // id 파라미터 값 가져오기\r\n         \r\n        // 해당 id를 가진 연락처를 데이터 배열에서 찾기\r\n        const person = data.find(p => p.id === id);  // id가 일치하는 사람을 찾아 반환\r\n        \r\n        // 만약 해당 연락처가 존재한다면\r\n        if (person) {\r\n            const contactDetailDiv = document.getElementById(\"contact-detail_ch\");\r\n            contactDetailDiv.innerHTML = `\r\n                <div style=\"text-align: center;\">\r\n                    <img src=\"${person.pic}\" alt=\"${person.name}\">\r\n                </div>\r\n                <div class=\"contact-info_ch\">\r\n                    <strong>이름<br></strong> \r\n                    <span id=\"person-name\">${person.name}</span>\r\n                    <input type=\"text\" id=\"name-input\" value=\"${person.name}\" style=\"display:none;\" />\r\n                    <button id=\"edit-name-btn\">수정</button><p/>\r\n                    \r\n                    <strong>전화번호<br></strong> ${person.hp} <p/>\r\n                    <strong>이메일<br></strong> ${person.email}\r\n                </div>\r\n            `;\r\n        \r\n            const nameSpan = document.getElementById(\"person-name\");\r\n            const nameInput = document.getElementById(\"name-input\");\r\n            const editButton = document.getElementById(\"edit-name-btn\");\r\n        \r\n            editButton.addEventListener(\"click\", () => {\r\n                if (editButton.textContent === \"수정\") {\r\n                    // 수정 모드로 전환\r\n                    nameSpan.style.display = \"none\";\r\n                    nameInput.style.display = \"inline-block\";\r\n                    editButton.textContent = \"저장\";\r\n                    nameInput.focus();\r\n                } else {\r\n                    // 저장 모드: 이름 적용\r\n                    const newName = nameInput.value.trim();\r\n                    if (newName !== \"\") {\r\n                        person.name = newName;\r\n                        nameSpan.textContent = newName;\r\n                    }\r\n                    nameSpan.style.display = \"inline\";\r\n                    nameInput.style.display = \"none\";\r\n                    editButton.textContent = \"수정\";\r\n                }\r\n            });\r\n        } else {\r\n            // 만약 해당 id의 사람이 없다면\r\n            document.getElementById(\"contact-detail_ch\").innerHTML = \"<p>존재하지 않는 연락처입니다.</p>\";  // 에러 메시지 출력\r\n        }\r\n\r\n        \r\n\r\n        // 삭제 버튼 클릭 시 동작하는 함수\r\n        function deleteContact() {\r\n            // 사용자가 삭제 확인을 했을 때\r\n            if (confirm(\"정말 삭제하시겠습니까?\")) {\r\n                // 이제 구현해야함\r\n            }\r\n        }\r\n   \n\n//# sourceURL=webpack://ex/./detail_ch.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./detail_ch.js");
/******/ 	
/******/ })()
;