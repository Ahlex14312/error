/*
* Name : joy.js
* @author : Roberto D'Amico (Bobboteck)
* Last modified : 09.06.2020
* Revision : 1.1.6
*
* Modification History:
* Date Version Modified By Description
* 2020-06-09 1.1.6 Roberto D'Amico Fixed Issue #10 and #11
* 2020-04-20 1.1.5 Roberto D'Amico Correct: Two sticks in a row, thanks to @liamw9534 for the suggestion
* 2020-04-03 Roberto D'Amico Correct: InternalRadius when change the size of canvas, thanks to @vanslipon for the suggestion
* 2020-01-07 1.1.4 Roberto D'Amico Close #6 by implementing a new parameter to set the functionality of auto-return to 0 position
* 2019-11-18 1.1.3 Roberto D'Amico Close #5 correct indication of East direction
* 2019-11-12 1.1.2 Roberto D'Amico Removed Fix #4 incorrectly introduced and restored operation with touch devices
* 2019-11-12 1.1.1 Roberto D'Amico Fixed Issue #4 - Now JoyStick work in any position in the page, not only at 0,0
*
* The MIT License (MIT)
*
* This file is part of the JoyStick Project (https://github.com/bobboteck/JoyStick).
* Copyright (c) 2015 Roberto D'Amico (Bobboteck).
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
/**
* @desc Principal object that draw a joystick, you only need to initialize the object and suggest the HTML container
* @costructor
* @param container {String} - HTML object that contains the Joystick
* title {String} (optional) - The ID of canvas (Default value is 'joystick')
* width {Int} (optional) - The width of canvas, if not specified is setted at width of container object (Default value is the width of container object)
* height {Int} (optional) - The height of canvas, if not specified is setted at height of container object (Default value is the height of container object)
* internalFillColor {String} (optional) - Internal color of Stick (Default value is '#00AA00')
* internalLineWidth {Int} (optional) - Border width of Stick (Default value is 2)
* internalStrokeColor {String}(optional) - Border color of Stick (Default value is '#003300')
* externalLineWidth {Int} (optional) - External reference circonference width (Default value is 2)
* externalStrokeColor {String} (optional) - External reference circonference color (Default value is '#008000')
* autoReturnToCenter {Bool} (optional) - Sets the behavior of the stick, whether or not, it should return to zero position when released (Default value is True and return to zero)
*/
var JoyStick=function(t,e){var i=void 0===(e=e||{}).title?"joystick":e.title,n=void 0===e.width?0:e.width,o=void 0===e.height?0:e.height,r=void 0===e.internalFillColor?"#00AA00":e.internalFillColor,h=void 0===e.internalLineWidth?2:e.internalLineWidth,a=void 0===e.internalStrokeColor?"#003300":e.