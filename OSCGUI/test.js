/*
StripInvader OSC Interface using Control (http://charlie-roberts.com/Control/)

(c) by michael Vogt/neophob.com 2011
 */

loadedInterfaceName = "stripInvaderBetaV3";
interfaceOrientation = "portrait";



pages = [
/********** PAGE 1 *************/
[

/* RGB slider */
{
    "name":"knbr",
    "type":"Slider",
    "x":0.03, "y":0.0,
    "width":.22, "height":.83,
    "stroke": "#000055",
    "color": "#0000ff",
    "min": 0.0, "max": 1.0,
    "isXFader" : false,
    "isVertical" : true,
},
{
    "name":"knbg",
    "type":"Slider",
    "x":0.27, "y":0.0,
    "width":.22, "height":.83,
    "stroke": "#008800",
    "color": "#00ff00",
    "min": 0.0, "max": 1.0,
    "isXFader" : false,
    "isVertical" : true,
},
{
    "name":"knbb",
    "type":"Slider",
    "x":0.51, "y":0.0,
    "width":.22, "height":.83,
    "stroke": "#550000",
    "color": "#ff0000",
    "min": 0.0, "max": 1.0,
    "isXFader" : false,
    "isVertical" : true,
},
/* mode buttons */
{
     "name": "modd",
     "type": "Button",
     "x":.01, "y":.85,
     "width":.12, "height":.06,
     "mode": "toggle",
     "min":0.0, "max":1.0,
     "color": "#fc8000",
     "stroke": "#7e4000",
     "label": "1",
     "labelSize": "12",
},
{
     "name": "modd",
     "type": "Button",
     "x":.15, "y":.85,
     "width":.12, "height":.06,
     "mode": "toggle",
     "min":0.0, "max":2.0,
     "color": "#fc8000",
     "stroke": "#7e4000",
     "label": "2",
     "labelSize": "12",
},
{
     "name": "modd",
     "type": "Button",
     "x":.29, "y":.85,
     "width":.12, "height":.06,
     "mode": "toggle",
     "min":0.0, "max":3.0,
     "color": "#fc8000",
     "stroke": "#7e4000",
     "label": "3",
     "labelSize": "12",
},
{
     "name": "modd",
     "type": "Button",
     "x":.43, "y":.85,
     "width":.12, "height":.06,
     "mode": "toggle",
     "min":0.0, "max":4.0,
     "color": "#fc8000",
     "stroke": "#7e4000",
     "label": "4",
     "labelSize": "12",
},
{
     "name": "modd",
     "type": "Button",
     "x":.57, "y":.85,
     "width":.12, "height":.06,
     "mode": "toggle",
     "min":0.0, "max":5.0,
     "color": "#fc8000",
     "stroke": "#7e4000",
     "label": "5",
     "labelSize": "12",
},
{
     "name": "modd",
     "type": "Button",
     "x":.71, "y":.85,
     "width":.12, "height":.06,
     "mode": "toggle",
     "min":0.0, "max":6.0,
     "color": "#fc8000",
     "stroke": "#7e4000",
     "label": "6",
     "labelSize": "12",
},
{
     "name": "modd",
     "type": "Button",
     "x":.85, "y":.85,
     "width":.12, "height":.06,
     "mode": "toggle",
     "min":0.0, "max":7.0,
     "color": "#fc8000",
     "stroke": "#7e4000",
     "label": "7",
     "labelSize": "12",
},
{
     "name": "modd",
     "type": "Button",
     "x":.01, "y":.91,
     "width":.12, "height":.06,
     "mode": "toggle",
     "min":0.0, "max":8.0,
     "color": "#fc8000",
     "stroke": "#7e4000",
     "label": "9",
     "labelSize": "12",
},
{
     "name": "modd",
     "type": "Button",
     "x":.15, "y":.91,
     "width":.12, "height":.06,
     "mode": "toggle",
     "min":0.0, "max":9.0,
     "color": "#fc8000",
     "stroke": "#7e4000",
     "label": "10",
     "labelSize": "12",
},
{
     "name": "modd",
     "type": "Button",
     "x":.29, "y":.91,
     "width":.12, "height":.06,
     "mode": "toggle",
     "min":0.0, "max":10.0,
     "color": "#fc8000",
     "stroke": "#7e4000",
     "label": "11",
     "labelSize": "12",
},
{
     "name": "modd",
     "type": "Button",
     "x":.43, "y":.91,
     "width":.12, "height":.06,
     "mode": "toggle",
     "min":0.0, "max":11.0,
     "color": "#fc8000",
     "stroke": "#7e4000",
     "label": "12",
     "labelSize": "12",
},
{
     "name": "modd",
     "type": "Button",
     "x":.57, "y":.91,
     "width":.12, "height":.06,
     "mode": "toggle",
     "min":0.0, "max":12.0,
     "color": "#fc8000",
     "stroke": "#7e4000",
     "label": "13",
     "labelSize": "12",
},
{
     "name": "modd",
     "type": "Button",
     "x":.71, "y":.91,
     "width":.12, "height":.06,
     "mode": "toggle",
     "min":0.0, "max":13.0,
     "color": "#fc8000",
     "stroke": "#7e4000",
     "label": "14",
     "labelSize": "12",
},
{
     "name": "modd",
     "type": "Button",
     "x":.85, "y":.91,
     "width":.12, "height":.06,
     "mode": "toggle",
     "min":0.0, "max":14.0,
     "color": "#fc8000",
     "stroke": "#7e4000",
     "label": "15",
     "labelSize": "12",
},
/* speed slider */
{
    "name":"delay",
    "type":"Slider",
    "x":0.75, "y":0.0,
    "width":.22, "height":.4,
    "stroke": "#888888",
    "color": "#cccccc",
    "min": 0.0, "max": 1.0,
    "isXFader" : false,
    "isVertical" : true,
},
{
    "name": "delayLabel",
    "type": "Label",
    "x": 0.75, "y": 0.4,
    "width": .22, "height": .05,
    "color": "#cccccc",
    "value": "Delay",
},

/* -- AUDIO toggle PRESET Buttons */
{
     "name": "audio",
     "type": "Button",
     "x":.75, "y":.45,
     "width":.22, "height":.1,
     "mode": "toggle",
     "min":0.0, "max":1.0,
     "color": "#fc8000",
     "stroke": "#7e4000",
     "label": "AUDIO",
     "labelSize": "18",
},

/* -- Refresh GUI Button */
{
     "name": "refreshButton",
     "type": "Button",
     "x": 0.75, "y": .55,
     "width": .22, "height": .09,
     "mode": "contact",
     "color": "#fc8000",
     "stroke": "#7e4000",
     "ontouchstart": "interfaceManager.refreshInterface()",
     "label": "Update",
     "labelSize": "18",
},
/* -- Button for enabling Menu/Toolbar */
{
    "name": "tabButton",
    "type": "Button",
    "x": 0.75, "y": .74,
    "width": .22, "height": .09,
    "mode": "toggle",
    "color": "#fc8000",
    "stroke": "#7e4000",
    "isLocal": true,
    "ontouchstart": "if(this.value == this.max) { control.showToolbar(); } else { control.hideToolbar(); }",
    "label": "Menu",
    "labelSize": "18",
},
/* -- Save Preset */
{
     "name": "sav",
     "type": "Button",
     "x": 0.75, "y": .64,
     "width": .22, "height": .09,
     "mode": "contact",
     "color": "#fc8000",
     "stroke": "#7e4000",
     "label": "Preset",
     "labelSize": "18",
},

],

];
