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
/* mode slider */
{
    "name":"modd",
    "type":"Slider",
    "x":0.03, "y":0.85,
    "width":0.94, "height":.1,
    "stroke": "#fc8000",
    "color": "#7e4000",
    "min": 0.0, "max": 14.0,
    "isXFader" : true,
    "isVertical" : false,
},
{
    "name": "moddLabel",
    "type": "Label",
    "x": 0.0, "y": 0.95,
    "width": 1.0, "height": .05,
    "color": "#7e4000",
    "value": /modd/,
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
