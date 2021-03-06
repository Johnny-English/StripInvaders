/*
StripInvader OSC Interface using Control (http://charlie-roberts.com/Control/)

(c) by michael Vogt/neophob.com 2011
 */

loadedInterfaceName = "stripInvaderBetaV2";
interfaceOrientation = "portrait";



pages = [
/********** PAGE 1 *************/
[

/* RGB slider */
{
    "name":"knbb",
    "type":"Slider",
    "x":0.0, "y":0.0,
    "width":.22, "height":.6, 
    "stroke": "#550000",
    "color": "#ff0000",
    "min": 0.0, "max": 1.0,
    "isXFader" : false,
    "isVertical" : true,
},
{
    "name":"knbg",
    "type":"Slider",
    "x":0.25, "y":0.0, 
    "width":.22, "height":.6,
    "stroke": "#008800",
    "color": "#00ff00",
    "min": 0.0, "max": 1.0,
    "isXFader" : false,
    "isVertical" : true,
},
{
    "name":"knbr",
    "type":"Slider",
    "x":0.5, "y":0.0,
    "width":.22, "height":.6,
    "stroke": "#000088",
    "color": "#0000ff",
    "min": 0.0, "max": 1.0,
    "isXFader" : false,
    "isVertical" : true,
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
    "x": 0.75, "y": 0.40,
    "width": .22, "height": .05,
    "color": "#cccccc",
    "value": "Delay",
},
	
/* -- RANDOM PRESET Buttons */
{
     "name": "mode",
     "type": "Button",
     "x":0.75, "y":0.42,
     "width":.22, "height":.1,
     "mode": "momentary",
     "min":0.0, "max":1.0,
     "color": "#fc8000",
     "stroke": "#7e4000",
     "label": "MODE",
     "labelSize": "18",
},
/* -- AUDIO toggle PRESET Buttons */
{
     "name": "audio",
     "type": "Button",
     "x":.75, "y":.0.54,
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
     "x": 0.75, "y": .66,
     "width": .22, "height": .1,
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
    "x": 0.75, "y": .9,
    "width": .22, "height": .1,
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
     "x": 0.75, "y": .78,
     "width": .22, "height": .1,
     "mode": "contact",
     "color": "#fc8000",
     "stroke": "#7e4000",
     "label": "Preset",
     "labelSize": "18",
},

],

];



