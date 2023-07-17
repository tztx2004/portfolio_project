"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var RefWrap = styled_components_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: fixed;\n    width: 50%;\n    height: 60px;\n    bottom: 0;\n    left: 5%;\n    color: #888;\n    font-size: 1vw;\n"], ["\n    position: fixed;\n    width: 50%;\n    height: 60px;\n    bottom: 0;\n    left: 5%;\n    color: #888;\n    font-size: 1vw;\n"])));
var Ref = function () {
    return (<RefWrap>
            <div>
                <h3>Made by Chan Jung</h3>
                <h3>Referenced : MinSeok Kim</h3>
            </div>
        </RefWrap>);
};
exports.default = Ref;
var templateObject_1;
