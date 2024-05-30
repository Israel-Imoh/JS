//alert('hello')

/*
var myVariable;
undefined
var m
undefined
var myVariable = shawn;
var myVariable = 30;
undefined
var myVariableShawn = 10;
undefined
myVariable = 30;
30
var myVariable2 = 'Hello';
undefined
myVariable2;
'Hello'
var myVariable2 = 'Hello again';
undefined
myVariable2;
'Hello again'
myVariable2 = 5;
5
var customerH = 32;
undefined
CU
customerH;
32

// Basic Operators
const operator = 5;
undefined
operator
5
5+5
10
5*8
40
var myVar = 5;
undefined
myVar
5
5+5
10
myVar = myVar + 5;
10
10 - 5
5
myVar - 3;
7
myVar = myVar - 5;
5
10 * 10
100
20/10
2
myVar = myVar / 2;
2.5
5 + 'hello';
'5hello'
100 + 'hello';
'100hello'
'hello' + 'david'
'hellodavid'
'hello' + ' david';
'hello david'
5 * 'hello';
NaN

// Basic Operators Shorthand
var myVar = 10;
undefined
myVar = myVar + 5;
15
myVar
15
myVar += 5
20
myVar;
20
myVar -= 10;
10
myVar
10
myVar /= 2;
5
myVar;
5
myVar *= 5;
25
myVar
25
myVar += 1;
26
myVar;
26
myVar ++
26
myVar
27
++ myVar;
28
myVar;
28
*/

// Writing to the document and the console
/*
var myVar = 'Israel';
undefined
document.write(myVar);
undefined
console.log(myVar);
 Israel
undefined
document.wite(10);
document.write(10);
undefined
console.log(11);
 11
undefined
console.log(20*5);
 100
undefined
document.write(20/5);
undefined
*/

// Boolean
/*
var iLikeMeat = true;
undefined
iLikeMeat;
true
iLikeMeat = false;
false
7 > 5
true
7 < 5
false
7 === 7
true
7 === 5
false
0
0
Boolean(7 > 5)
true
Boolean(5)
true
Boolean(-7)
true
Boolean(0)
false
Boolean(-0)
false
Boolean('Hello')
true
Boolean()
false
Boolean("")
false
*/

/*
// If Statements
var youLikeMeat = true;
var myNum = 10;

/*if (myNum == 10) {
    document.write('myNum is equal 10');
} else {
    document.write('myNum is not equal to 10');
}

if (youLikeMeat) {
    document.write('You like meat');
} else {
    document.write('You hate meat');
}
*/

// Else If statements

/*
var myAge = 49;

if (myAge > 30) {

    document.write('You are over 30')

} else if (myAge > 20) {

    document.write('You are over 20')

} else if(myAge > 10) {

    document.write('You are over 10')

} else {
    document.write('You are not over 10')
}

var jerseyNo = 8;

if (jerseyNo > 23) {

    document.write('Jersey number is 45')

} else if(jerseyNo > 13) {

    document.write('Jersey number is 23')

} else if(jerseyNo > 10) {
    document.write('Jersey number is 08')
} else {
    document.write('Jersey number is not 08')
}
*/


/*
// Comparison operators

var x = 5;
undefined
x > 4
true
x > 5
false
x >= 5
true
x >= 5
true
x <= 5
true
x === 5
true
x === 4
false
x != 4
true
x = '5'
'5'
x == 5
true
x === 5
false
x === '5'
true
x = 5
5
x !== 5
false
x = '5'
'5'
x !== 5
true
*/

/*
// Logical Operators

var myAge = 14;
/*
if(myAge >= 18 && myAge <= 30) {

    document.write('You can come, you cool dude'
    )

} else {
    document.write('You aint coming')
}

if (myAge < 18 || myAge > 30 || myAge === 25) {
    document.write('You aint coming')
} else {
    document.write('You can come, you cool dude')
}

if(myAge >= 15 && myAge <= 20) {
    document.write('You can play under 20')
} else {
    document.write('You are too old to play under 20')
} 

if(myAge > 15 || myAge > 18 || myAge === 20) {
    document.write('You are too old to play under 15 ')
} else {
    document.write('You are eligible to play under 15')
}
*/

// While loops
/*
var age = 5;

while(age < 10) {
    console.log('Your age is less than 10');
    age++;
} 

document.write('You are now over 10');



var score = 50;

while(score < 100) {
    console.log('Your score is less than 100');
    score++
}
document.write('Your score is well over 50');
*/

/*
// For loops
for(age = 1; age < 10; age++) {
    console.log('Your age is less than 10');
 }
    document.write('You are now over 10');

    //Looping through links
var links = document.getElementsByTagName('a');

for (i = 0; i < links.length; i++) {
    console.log(`This is link number ${i}`);
}
document.write('All links now looped')



/*
//Break and continue
for (i = 0; i < 10; i++) {

    if(i === 5 || i === 3) {
        continue; 
    }
    console.log(i);

    if(i === 7) {

        break;

    }
}

console.log('I have broken out of the loop');
*/


/*
// Loops practical examples
var links = document.getElementsByTagName('a');

for(i = 0; i < links.length; i++) {

    links[i].className = `Link-${i}`;

}*/


/*
// Functions

function getAverage(a,b,c,d,e,f) {
    var average = (a + b + c + d + e + f) / 6;
    console.log(average);
    return average;
}

var myResult = getAverage(7,8,9,10,11,12);
console.log(`the average is ${myResult}`);

function getScores(a,b,c,d,e,f,g) {
    var score = (a+b+c+d+e+f+g) / 7;
    console.log(score);
    return score;
}

var highScore = getScores(1,2,3,4,5,6,7);
console.log(`your high score is ${highScore}`)
*/


/*
// Variable scope

function getAverage(a,b,c,d,e,f) {
    var average = (a + b + c + d + e + f) / 6; // Local variable
    console.log(average);
    return average;
}

var myResult = getAverage(7,8,9,10,11,12); // Global variable


function logResult() {
    console.log(`the average is ${myResult} inside the function`);
}

logResult();
*/


/*
// Working with numbers
var a = 5;
var b = 5;

console.log(a + b);
//console.log(typeof (a + b) ); ----- to know the datatype

//console.log(Math.round(7.4));
console.log(Math.floor(8.9));
console.log(Math.ceil(8.1));
console.log(Math.max(7,4,9,8));
console.log(Math.PI);
*/

/*
// NAN Not a number
var a = 'hello ';
var b = 7;

if(isNaN(b)) {
    console.log('that aint even a number')
} else {
    console.log(`result is ${a+b}`)
}

//Double negative
if(!isNaN(a)) {
    console.log(`result is ${a+b}`)
} else {
    console.log('that aint even a number')
}
if(!isNaN(b)) {
    console.log(`result is ${a+b}`)
} else {
    console.log('that aint even a number')
}


if(isNaN(a)) {
    console.log('that aint even a number')
} 
*/

/*
// Strings
var myString1 = 'I am a ninja string';
//var myString = 'I\'m a "fun" string'; --- to espace quotation mark in a string

if(myString.indexOf('ninja') === -1) {
    console.log('the word ninja is not in the string')
} else {
    console.log(`the word ninja starts at position ${myString.indexOf('ninja')}`);
}

var string1 = 'abc';
var string2 = 'bca';

console.log(string1 < string2);
*/

/*
// Splitting and slicing strings
var str = 'Hello World';
undefined
str
'Hello World'
var str2 = str;
undefined
var str2 = str.slice(2,9);
undefined
str2;
'llo Wor'
var str3 = str.slice(2);
undefined
str3
'llo World'
var tags = 'meat, ham, salad, pork, beef, chicken';
undefined
tags;
'meat, ham, salad, pork, beef, chicken'
var tagArray = tags.split(',');
undefined
tagArray;
(6) ['meat', ' ham', ' salad', ' pork', ' beef', ' chicken']
*/


/*
// Arrays
const myArray = [];
undefined
myArray[0] = 25;
25
myArray[0];
25
myArray[1] = 35;
35
myArray[2] = true;
true
myArray[3] ='hello';
'hello'
myArray;
(4) [25, 35, true, 'hello']
myArray[2] = false;
false
myArray;
(4) [25, 35, false, 'hello']
var myArray2 = [10,20,'hi',false];
undefined
myArray2;
(4) [10, 20, 'hi', false]
var myArray3 = new Array();
undefined
var myArray4 = new Array(5);
undefined
myArray2.length
4
myArray2.sort();
(4) [10, 20, false, 'hi']
myArray2.reverse();
(4) ['hi', false, 20, 10]
*/

/*
// Intro to Objects
var myString = new String();
undefined
myString = 'hello';
'hello'
myString;
'hello'
myString.length
5
myString.toUpperCase;
myString.toUpperCase();
'HELLO'
myString2 = 'hi there';
'hi there'
myString2.length
8
*/

/*
// Creating an object
        //properties
var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = 'Shawn';

console.log(myCar.r);

    //methods
myCar.drive = function() {console.log('now driving');};

myCar.drive();

myCar.price = function() {console.log('I got this car for 1000 bucks');};

myCar.price();

var myCar2 = {
    maxSpeed: 70,
    driver: 'Wagwan',
    drive: function() { 
        console.log("now driving again");
    }

}

console.log(myCar2.maxSpeed);
myCar2.drive();

var myCar2 = {
    maxSpeed: 70,
    driver: 'Wagwan',
    drive: function(speed,Time) { 
        console.log(speed * Time);
    }

}

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);
*/

/*
// 'THIS' Keyword
var myCar2 = {
    maxSpeed: 70,
    driver: 'Wagwan',
    drive: function(speed,Time) { 
        console.log(speed * Time);
    },
    test: function() {
        console.log(this);
    }

};

var myCar3 = {
    maxSpeed: 80,
    driver: 'netninja',
    drive: function(speed,Time) { 
        console.log(speed * Time);
    },
    test: function() {
        console.log(this);
    },
    logDriver: function() {
        console.log(`Driver name is ${this.driver}`);
    }

};

myCar3.logDriver();
console.log(myCar2.maxSpeed);

myCar2.test();
myCar3.test();
*/

/*
// Construcror functions
var myCar3 = {
    maxSpeed: 80,
    driver: 'netninja',
    drive: function(speed,Time) { 
        console.log(speed * Time);
    },
    logDriver: function() {
        console.log(`Driver name is ${this.driver}`);
    }

};


var Car = function(maxspeed, driver) {
    this.maxspeed = maxspeed;
    this.driver = driver;
    this.drive = function(speed,Time,acceleration) { 
        console.log(speed * Time / acceleration);
    };
    this.logDriver = function() {
        console.log(`Driver name is ${this.driver}`);
    }

};

var myCar = new Car(70, 'Ninja man');
var myCar1 = new Car(60, 'Shawn');
var myCar2 = new Car(870, 'Brad');
var myCar3 = new Car(20, 'Israel');
var myCar4 = new Car(74, 'BRO');
var myCar5 = new Car(90, 'Ninja');
var myCar6 = new Car(10, 'NETNinja');

myCar.drive(30, 5, 2);
myCar3.logDriver();
console.log(myCar5.maxspeed);
*/


/*
//Date Object

var myDate = new Date();
console.log(myDate);

var myPastDate = new Date(1545, 11, 2, 10, 30, 59);
var myFutureDate = new Date(2025, 9, 8, 12, 30, 59);

console.log(myFutureDate);
console.log(myPastDate);


var birthday = new Date(1985, 0, 15, 11, 15, 25);
var birthday2 = new Date(1985, 0, 15, 11, 15, 25);

// get the month of the date (0-11)
console.log(birthday.getMonth());
//get the full year(YYY)
console.log(birthday.getFullYear());
//get date of the month(1-31)
console.log(birthday.getDate());
//get the day of the week(0-6)
console.log(birthday.getDay());
//get hour of the date (0-23)
console.log(birthday.getHours());
//get the numbers of milliseconds since 1st Jan 1970
console.log(birthday.getTime());

if(birthday.getTime === birthday2.getTime) {
    console.log('Birthdays are equal')
} else {
    console.log('Birthdays are not equal')
}

var myBirthday = new Date(2003, 9, 8, 3, 45, 55)
var myBirthday2 = new Date(2003, 9, 8, 3, 45, 55)

// get the month of the date (0-11)
console.log(myBirthday.getMonth());
//get the full year(YYY)
console.log(myBirthday.getFullYear());
//get date of the month(1-31)
console.log(myBirthday.getDate());
//get the day of the week(0-6)
console.log(myBirthday.getDay());
//get hour of the date (0-23)
console.log(myBirthday.getHours());
//get the numbers of milliseconds since 1st Jan 1970
console.log(myBirthday.getTime());

if(myBirthday.getTime === myBirthday2.getTime) {
    console.log('Birthdays are equal')
} else {
    console.log('Birthdays are not equal')
}
*/

/*
// DOM - Document Object Model
// Traversying the DOM

var myBody = document.getElementsByTagName('body');
undefined
myBody;
HTMLCollection [body]
myBody[0].innerHTML;
`\n        <div class="content">\n        <h1>Welcome To My Website</h1>\n\n        <p>I am excited to eventually start learning coding</p>\n\n        <a href="http://facebook.com/OGtech network">Here is the official facebook page of OGtech Network</a>\n\n        <h1>What i have learnt so far</h1>\n\n        <ol>\n            <li>Divs and Spans</li>\n            <li>Attributes</li>\n            <li>List</li>\n            <li>Links</li>\n            <li>and more</li>\n        </ol>\n\n        <p>I am proud of my new career path</p>\n\n        <p><em>Proudly powered and sponsored by;</em></p>\n\n        <h1><strong>OGTech Networks Ltd</strong></h1>\n\n        <p>Mentored by;</p>\n\n        <p><strong>De-Prof</strong></p>\n\n        <h1>Bonus: Optional extra credit</h1>\n\n        <p>Can you figure out how to make a picture a link</p>\n\n        <img src="izzy.jpg" alt="Izzy's logo on screen">\n    </div>\n    \x3C!-- Code injected by live-server -->\n\x3Cscript>\n\t// <![CDATA[  <-- For SVG support\n\tif ('WebSocket' in window) {\n\t\t(function () {\n\t\t\tfunction refreshCSS() {\n\t\t\t\tvar sheets = [].slice.call(document.getElementsByTagName("link"));\n\t\t\t\tvar head = document.getElementsByTagName("head")[0];\n\t\t\t\tfor (var i = 0; i < sheets.length; ++i) {\n\t\t\t\t\tvar elem = sheets[i];\n\t\t\t\t\tvar parent = elem.parentElement || head;\n\t\t\t\t\tparent.removeChild(elem);\n\t\t\t\t\tvar rel = elem.rel;\n\t\t\t\t\tif (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {\n\t\t\t\t\t\tvar url = elem.href.replace(/(&|\\?)_cacheOverride=\\d+/, '');\n\t\t\t\t\t\telem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());\n\t\t\t\t\t}\n\t\t\t\t\tparent.appendChild(elem);\n\t\t\t\t}\n\t\t\t}\n\t\t\tvar protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';\n\t\t\tvar address = protocol + window.location.host + window.location.pathname + '/ws';\n\t\t\tvar socket = new WebSocket(address);\n\t\t\tsocket.onmessage = function (msg) {\n\t\t\t\tif (msg.data == 'reload') window.location.reload();\n\t\t\t\telse if (msg.data == 'refreshcss') refreshCSS();\n\t\t\t};\n\t\t\tif (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {\n\t\t\t\tconsole.log('Live reload enabled.');\n\t\t\t\tsessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);\n\t\t\t}\n\t\t})();\n\t}\n\telse {\n\t\tconsole.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');\n\t}\n\t// ]]>\n\x3C/script>\n\n`
myBody[0].innerHTML = "<p>I am a indaboski</p>";
'<p>I am a indaboski</p>'

// Text content method
var myTitle = document.getElementById('page-title');
undefined
myTitle;
<h1 id=​"page-title">​What i have learnt so far​</h1>​
myTitle.textContent;
'What i have learnt so far'
myTitle.textContent = 'YO nINJA GET READY TO LEARN';
'YO nINJA GET READY TO LEARN'

var myTitle2 = document.querySelector('#page-title');
undefined
myTitle2;
<h1 id=​"page-title">​What i have learnt so far​</h1>​
myTitle2.textContent;
'What i have learnt so far'
myTitle2.textContent = 'Yo NINJA';
'Yo NINJA'
*/

/*
// Accessing and changing attributes 

var link = document.getElementById('test');
undefined
link;
<a href=​"#home" id=​"test" class=​"ninja">​Home​</a>​
link.getAttribute('href');
'#home'
link.getAttribute('class');
'ninja'
link.setAttribute('class', 'pie');
undefined
link.setAttribute('alt', 'hello');
undefined
link.className;
'pie'
link.className = 'ninja';
'ninja'
link.href;
'file:///C:/Users/USER/Desktop/CSS%20Crash%20course/my%20website/index.html#home'
link.style;
CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}accentColor: ""additiveSymbols: ""alignContent: ""alignItems: ""alignSelf: ""alignmentBaseline: ""all: ""animation: ""animationComposition: ""animationDelay: ""animationDirection: ""animationDuration: ""animationFillMode: ""animationIterationCount: ""animationName: ""animationPlayState: ""animationRange: ""animationRangeEnd: ""animationRangeStart: ""animationTimeline: ""animationTimingFunction: ""appRegion: ""appearance: ""ascentOverride: ""aspectRatio: ""backdropFilter: ""backfaceVisibility: ""background: ""backgroundAttachment: ""backgroundBlendMode: ""backgroundClip: ""backgroundColor: ""backgroundImage: ""backgroundOrigin: ""backgroundPosition: ""backgroundPositionX: ""backgroundPositionY: ""backgroundRepeat: ""backgroundSize: ""basePalette: ""baselineShift: ""baselineSource: ""blockSize: ""border: ""borderBlock: ""borderBlockColor: ""borderBlockEnd: ""borderBlockEndColor: ""borderBlockEndStyle: ""borderBlockEndWidth: ""borderBlockStart: ""borderBlockStartColor: ""borderBlockStartStyle: ""borderBlockStartWidth: ""borderBlockStyle: ""borderBlockWidth: ""borderBottom: ""borderBottomColor: ""borderBottomLeftRadius: ""borderBottomRightRadius: ""borderBottomStyle: ""borderBottomWidth: ""borderCollapse: ""borderColor: ""borderEndEndRadius: ""borderEndStartRadius: ""borderImage: ""borderImageOutset: ""borderImageRepeat: ""borderImageSlice: ""borderImageSource: ""borderImageWidth: ""borderInline: ""borderInlineColor: ""borderInlineEnd: ""borderInlineEndColor: ""borderInlineEndStyle: ""borderInlineEndWidth: ""borderInlineStart: ""borderInlineStartColor: ""borderInlineStartStyle: ""borderInlineStartWidth: ""borderInlineStyle: ""borderInlineWidth: ""borderLeft: ""borderLeftColor: ""borderLeftStyle: ""borderLeftWidth: ""borderRadius: ""borderRight: ""borderRightColor: ""borderRightStyle: ""borderRightWidth: ""borderSpacing: ""borderStartEndRadius: ""borderStartStartRadius: ""borderStyle: ""borderTop: ""borderTopColor: ""borderTopLeftRadius: ""borderTopRightRadius: ""borderTopStyle: ""borderTopWidth: ""borderWidth: ""bottom: ""boxShadow: ""boxSizing: ""breakAfter: ""breakBefore: ""breakInside: ""bufferedRendering: ""captionSide: ""caretColor: ""clear: ""clip: ""clipPath: ""clipRule: ""color: ""colorInterpolation: ""colorInterpolationFilters: ""colorRendering: ""colorScheme: ""columnCount: ""columnFill: ""columnGap: ""columnRule: ""columnRuleColor: ""columnRuleStyle: ""columnRuleWidth: ""columnSpan: ""columnWidth: ""columns: ""contain: ""containIntrinsicBlockSize: ""containIntrinsicHeight: ""containIntrinsicInlineSize: ""containIntrinsicSize: ""containIntrinsicWidth: ""container: ""containerName: ""containerType: ""content: ""contentVisibility: ""counterIncrement: ""counterReset: ""counterSet: ""cursor: ""cx: ""cy: ""d: ""descentOverride: ""direction: ""display: ""dominantBaseline: ""emptyCells: ""fallback: ""fill: ""fillOpacity: ""fillRule: ""filter: ""flex: ""flexBasis: ""flexDirection: ""flexFlow: ""flexGrow: ""flexShrink: ""flexWrap: ""float: ""floodColor: ""floodOpacity: ""font: ""fontDisplay: ""fontFamily: ""fontFeatureSettings: ""fontKerning: ""fontOpticalSizing: ""fontPalette: ""fontSize: ""fontStretch: ""fontStyle: ""fontSynthesis: ""fontSynthesisSmallCaps: ""fontSynthesisStyle: ""fontSynthesisWeight: ""fontVariant: ""fontVariantAlternates: ""fontVariantCaps: ""fontVariantEastAsian: ""fontVariantLigatures: ""fontVariantNumeric: ""fontVariantPosition: ""fontVariationSettings: ""fontWeight: ""forcedColorAdjust: ""gap: ""grid: ""gridArea: ""gridAutoColumns: ""gridAutoFlow: ""gridAutoRows: ""gridColumn: ""gridColumnEnd: ""gridColumnGap: ""gridColumnStart: ""gridGap: ""gridRow: ""gridRowEnd: ""gridRowGap: ""gridRowStart: ""gridTemplate: ""gridTemplateAreas: ""gridTemplateColumns: ""gridTemplateRows: ""height: ""hyphenateCharacter: ""hyphenateLimitChars: ""hyphens: ""imageOrientation: ""imageRendering: ""inherits: ""initialLetter: ""initialValue: ""inlineSize: ""inset: ""insetBlock: ""insetBlockEnd: ""insetBlockStart: ""insetInline: ""insetInlineEnd: ""insetInlineStart: ""isolation: ""justifyContent: ""justifyItems: ""justifySelf: ""left: ""letterSpacing: ""lightingColor: ""lineBreak: ""lineGapOverride: ""lineHeight: ""listStyle: ""listStyleImage: ""listStylePosition: ""listStyleType: ""margin: ""marginBlock: ""marginBlockEnd: ""marginBlockStart: ""marginBottom: ""marginInline: ""marginInlineEnd: ""marginInlineStart: ""marginLeft: ""marginRight: ""marginTop: ""marker: ""markerEnd: ""markerMid: ""markerStart: ""mask: ""maskClip: ""maskComposite: ""maskImage: ""maskMode: ""maskOrigin: ""maskPosition: ""maskRepeat: ""maskSize: ""maskType: ""mathDepth: ""mathShift: ""mathStyle: ""maxBlockSize: ""maxHeight: ""maxInlineSize: ""maxWidth: ""minBlockSize: ""minHeight: ""minInlineSize: ""minWidth: ""mixBlendMode: ""negative: ""objectFit: ""objectPosition: ""objectViewBox: ""offset: ""offsetAnchor: ""offsetDistance: ""offsetPath: ""offsetPosition: ""offsetRotate: ""opacity: ""order: ""orphans: ""outline: ""outlineColor: ""outlineOffset: ""outlineStyle: ""outlineWidth: ""overflow: ""overflowAnchor: ""overflowClipMargin: ""overflowWrap: ""overflowX: ""overflowY: ""overlay: ""overrideColors: ""overscrollBehavior: ""overscrollBehaviorBlock: ""overscrollBehaviorInline: ""overscrollBehaviorX: ""overscrollBehaviorY: ""pad: ""padding: ""paddingBlock: ""paddingBlockEnd: ""paddingBlockStart: ""paddingBottom: ""paddingInline: ""paddingInlineEnd: ""paddingInlineStart: ""paddingLeft: ""paddingRight: ""paddingTop: ""page: ""pageBreakAfter: ""pageBreakBefore: ""pageBreakInside: ""pageOrientation: ""paintOrder: ""perspective: ""perspectiveOrigin: ""placeContent: ""placeItems: ""placeSelf: ""pointerEvents: ""position: ""prefix: ""quotes: ""r: ""range: ""resize: ""right: ""rotate: ""rowGap: ""rubyPosition: ""rx: ""ry: ""scale: ""scrollBehavior: ""scrollMargin: ""scrollMarginBlock: ""scrollMarginBlockEnd: ""scrollMarginBlockStart: ""scrollMarginBottom: ""scrollMarginInline: ""scrollMarginInlineEnd: ""scrollMarginInlineStart: ""scrollMarginLeft: ""scrollMarginRight: ""scrollMarginTop: ""scrollPadding: ""scrollPaddingBlock: ""scrollPaddingBlockEnd: ""scrollPaddingBlockStart: ""scrollPaddingBottom: ""scrollPaddingInline: ""scrollPaddingInlineEnd: ""scrollPaddingInlineStart: ""scrollPaddingLeft: ""scrollPaddingRight: ""scrollPaddingTop: ""scrollSnapAlign: ""scrollSnapStop: ""scrollSnapType: ""scrollTimeline: ""scrollTimelineAxis: ""scrollTimelineName: ""scrollbarColor: ""scrollbarGutter: ""scrollbarWidth: ""shapeImageThreshold: ""shapeMargin: ""shapeOutside: ""shapeRendering: ""size: ""sizeAdjust: ""speak: ""speakAs: ""src: ""stopColor: ""stopOpacity: ""stroke: ""strokeDasharray: ""strokeDashoffset: ""strokeLinecap: ""strokeLinejoin: ""strokeMiterlimit: ""strokeOpacity: ""strokeWidth: ""suffix: ""symbols: ""syntax: ""system: ""tabSize: ""tableLayout: ""textAlign: ""textAlignLast: ""textAnchor: ""textCombineUpright: ""textDecoration: ""textDecorationColor: ""textDecorationLine: ""textDecorationSkipInk: ""textDecorationStyle: ""textDecorationThickness: ""textEmphasis: ""textEmphasisColor: ""textEmphasisPosition: ""textEmphasisStyle: ""textIndent: ""textOrientation: ""textOverflow: ""textRendering: ""textShadow: ""textSizeAdjust: ""textTransform: ""textUnderlineOffset: ""textUnderlinePosition: ""textWrap: ""timelineScope: ""top: ""touchAction: ""transform: ""transformBox: ""transformOrigin: ""transformStyle: ""transition: ""transitionBehavior: ""transitionDelay: ""transitionDuration: ""transitionProperty: ""transitionTimingFunction: ""translate: ""unicodeBidi: ""unicodeRange: ""userSelect: ""vectorEffect: ""verticalAlign: ""viewTimeline: ""viewTimelineAxis: ""viewTimelineInset: ""viewTimelineName: ""viewTransitionName: ""visibility: ""webkitAlignContent: ""webkitAlignItems: ""webkitAlignSelf: ""webkitAnimation: ""webkitAnimationDelay: ""webkitAnimationDirection: ""webkitAnimationDuration: ""webkitAnimationFillMode: ""webkitAnimationIterationCount: ""webkitAnimationName: ""webkitAnimationPlayState: ""webkitAnimationTimingFunction: ""webkitAppRegion: ""webkitAppearance: ""webkitBackfaceVisibility: ""webkitBackgroundClip: ""webkitBackgroundOrigin: ""webkitBackgroundSize: ""webkitBorderAfter: ""webkitBorderAfterColor: ""webkitBorderAfterStyle: ""webkitBorderAfterWidth: ""webkitBorderBefore: ""webkitBorderBeforeColor: ""webkitBorderBeforeStyle: ""webkitBorderBeforeWidth: ""webkitBorderBottomLeftRadius: ""webkitBorderBottomRightRadius: ""webkitBorderEnd: ""webkitBorderEndColor: ""webkitBorderEndStyle: ""webkitBorderEndWidth: ""webkitBorderHorizontalSpacing: ""webkitBorderImage: ""webkitBorderRadius: ""webkitBorderStart: ""webkitBorderStartColor: ""webkitBorderStartStyle: ""webkitBorderStartWidth: ""webkitBorderTopLeftRadius: ""webkitBorderTopRightRadius: ""webkitBorderVerticalSpacing: ""webkitBoxAlign: ""webkitBoxDecorationBreak: ""webkitBoxDirection: ""webkitBoxFlex: ""webkitBoxOrdinalGroup: ""webkitBoxOrient: ""webkitBoxPack: ""webkitBoxReflect: ""webkitBoxShadow: ""webkitBoxSizing: ""webkitClipPath: ""webkitColumnBreakAfter: ""webkitColumnBreakBefore: ""webkitColumnBreakInside: ""webkitColumnCount: ""webkitColumnGap: ""webkitColumnRule: ""webkitColumnRuleColor: ""webkitColumnRuleStyle: ""webkitColumnRuleWidth: ""webkitColumnSpan: ""webkitColumnWidth: ""webkitColumns: ""webkitFilter: ""webkitFlex: ""webkitFlexBasis: ""webkitFlexDirection: ""webkitFlexFlow: ""webkitFlexGrow: ""webkitFlexShrink: ""webkitFlexWrap: ""webkitFontFeatureSettings: ""webkitFontSmoothing: ""webkitHyphenateCharacter: ""webkitJustifyContent: ""webkitLineBreak: ""webkitLineClamp: ""webkitLocale: ""webkitLogicalHeight: ""webkitLogicalWidth: ""webkitMarginAfter: ""webkitMarginBefore: ""webkitMarginEnd: ""webkitMarginStart: ""webkitMask: ""webkitMaskBoxImage: ""webkitMaskBoxImageOutset: ""webkitMaskBoxImageRepeat: ""webkitMaskBoxImageSlice: ""webkitMaskBoxImageSource: ""webkitMaskBoxImageWidth: ""webkitMaskClip: ""webkitMaskComposite: ""webkitMaskImage: ""webkitMaskOrigin: ""webkitMaskPosition: ""webkitMaskPositionX: ""webkitMaskPositionY: ""webkitMaskRepeat: ""webkitMaskSize: ""webkitMaxLogicalHeight: ""webkitMaxLogicalWidth: ""webkitMinLogicalHeight: ""webkitMinLogicalWidth: ""webkitOpacity: ""webkitOrder: ""webkitPaddingAfter: ""webkitPaddingBefore: ""webkitPaddingEnd: ""webkitPaddingStart: ""webkitPerspective: ""webkitPerspectiveOrigin: ""webkitPerspectiveOriginX: ""webkitPerspectiveOriginY: ""webkitPrintColorAdjust: ""webkitRtlOrdering: ""webkitRubyPosition: ""webkitShapeImageThreshold: ""webkitShapeMargin: ""webkitShapeOutside: ""webkitTapHighlightColor: ""webkitTextCombine: ""webkitTextDecorationsInEffect: ""webkitTextEmphasis: ""webkitTextEmphasisColor: ""webkitTextEmphasisPosition: ""webkitTextEmphasisStyle: ""webkitTextFillColor: ""webkitTextOrientation: ""webkitTextSecurity: ""webkitTextSizeAdjust: ""webkitTextStroke: ""webkitTextStrokeColor: ""webkitTextStrokeWidth: ""webkitTransform: ""webkitTransformOrigin: ""webkitTransformOriginX: ""webkitTransformOriginY: ""webkitTransformOriginZ: ""webkitTransformStyle: ""webkitTransition: ""webkitTransitionDelay: ""webkitTransitionDuration: ""webkitTransitionProperty: ""webkitTransitionTimingFunction: ""webkitUserDrag: ""webkitUserModify: ""webkitUserSelect: ""webkitWritingMode: ""whiteSpace: ""whiteSpaceCollapse: ""widows: ""width: ""willChange: ""wordBreak: ""wordSpacing: ""wordWrap: ""writingMode: ""x: ""y: ""zIndex: ""zoom: ""epubCaptionSide: <value unavailable>epubTextCombine: <value unavailable>epubTextEmphasis: <value unavailable>epubTextEmphasisColor: <value unavailable>epubTextEmphasisStyle: <value unavailable>epubTextOrientation: <value unavailable>epubTextTransform: <value unavailable>epubWordBreak: <value unavailable>epubWritingMode: <value unavailable>cssFloat: ""cssText: ""length: 0parentRule: null[[Prototype]]: CSSStyleDeclaration
*/

/*
// Changing Styles
var title = document.getElementById("page-title");
undefined
title.setAttribute("style", 'position: relative;');
undefined
title.setAttribute('style', 'left: 10px;');
undefined
title.setAttribute('style', 'position: relative; left: 10px;');
undefined
title.style.left = '20px';
'20px'
title.style.top = '10px';
'10px'
title.style.color = 'red';
'red'
title.style.backgroundColor = 'blue';
*/


/*
//Adding elements to the DOM

// Create the element in JAVASCRIPT
var newLi = document.createElement("li");
undefined
newLi;
<li>​</li>​
var newA = document.createElement('a');
undefined
newA;
<a>​</a>​
var menu = document.getElementById('navbar').getElementsByTagName('ul')[0];
undefined
menu;
<ul>​<li>​<a href=​"#home" id=​"test" class=​"ninja" alt=​"hello">​Home​</a>​</li>​<li>​<a href=​"#">​About​</a>​</li>​<li>​<a href=​"#">​Services​</a>​</li>​<li>​<a href=​"#">​Contact​</a>​</li>​</ul>​
menu.appendChild(newLi);
<li>​</li>​
newLi.appendChild(newA);
<a>​</a>​
newA.innerHTML = 'Blog';
'Blog'
newA.setAttribute('href', '#blog');
undefined

menu.insertBefore(newLi, menu.getElementsByTagName('li')[0]);
<li>​…​</li>​
menu.insertBefore(newLi, menu.getElementsByTagName('li')[2]);
<li>​…​</li>​
menu.insertBefore(newLi, menu.getElementsByTagName('li')[1]);
<li>​…​</li>​
menu.insertBefore(newLi, menu.getElementsByTagName('li')[4]);

//
var li = document.createElement('li');
undefined
li;
<li>​</li>​
var a = document.createElement('a');
undefined
a;
<a>​</a>​
var nav = document.getElementById('navbar').getElementsByTagName('ul')[0];
undefined
menu;
<ul>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​</ul>​
menu.appendChild(li);
<li>​</li>​
li.appendChild(a);
<a>​</a>​
a.innerHTML = 'Location';
'Location'
a.setAttribute('href', '#loction');
undefined
a.setAttribute('href', '#location');
undefined
menu.insertBefore(li, menu.getElementsByTagName('li')[0]);
<li>​…​</li>​
*/


/*
// Removing elements from the DOM
 parent = document.getElementById('navbar').getElementsByTagName('ul')[0];
undefined
parent;
<ul>​…​</ul>​
var child =  parent.getElementsByTagName('li')[0];
undefined
child;
<li>​<a href=​"#location">​Location​</a>​</li>
​
var remove = parent.removeChild(child);
undefined

// To add the element back
parent.appendChild(remove);
<li>​…​</li>​
var P = document.getElementById('navbar').getElementsByTagName('ul')[0];
undefined
var C = P.getElementsByTagName('li')[4];
undefined
var remove = parent.removeChild(child);
undefined
var C = P.getElementsByTagName('li')[4];
undefined
C
<li>​…​</li>​<a href=​"#">​Contact​</a>​</li>​
var C = P.getElementsByTagName('li')[3];
undefined
C
<li>​</li>​<a href=​"#blog">​Blog​</a>​</li>​
var remove = P.removeChild(C);
undefined
// To add the element back
    P.appendChild(remove);
<li>​…​</li>
​*/

/*
// Javascripts Events
var title = document.getElementById('page-title');
undefined
title
<h1 id=​"page-title">​What i have learnt so far​</h1>​
title.onclick = function () {};
ƒ () {}
title.onclick = function () { alert('you clicked me');};
ƒ () { alert('you clicked me');}
title.onmouseover = function(){ alert('you hovered your mouse over me'); };
ƒ (){ alert('you hovered your mouse over me'); }
*/

/*
// onclick event
var content =  document.getElementById('content');
var button = document.getElementById('show-more');

button.onclick = function() {

    if(content.className == 'open'){
        //shrink the box
        content.className = '';
        button.innerHTML = 'Show More';
    } else {
        //expand the box
        content.className = 'open';
        button.innerHTML = 'Show Less';
    }
 
};


//
var content = document.querySelector('#content');
var button = document.querySelector('#show-more');

button.onclick = function() {

    if(content.className === 'open') {
        //shrink the box
        content.className = '';
        button.innerHTML = 'Show More';
    } else {
        //expland the box
        content.className = 'open';
        button.innerHTML = 'Show Less';
    }

};
*/

/*
// Window onload event - when the script tag is above the html
window.onload = function(){

    var content = document.querySelector('#content');
    var button = document.querySelector('#show-more');
    
    button.onclick = function() {
    
        if(content.className === 'open') {
            //shrink the box
            content.className = '';
            button.innerHTML = 'Show More';
        } else {
            //expland the box
            content.className = 'open';
            button.innerHTML = 'Show Less';
        }
    
    };

}

//
function setUpEvents() {

var content = document.querySelector('#content');
var button = document.querySelector('#show-more');

button.onclick = function() {

    if(content.className === 'open') {
        //shrink the box
        content.className = '';
        button.innerHTML = 'Show More';
    } else {
        //expland the box
        content.className = 'open';
        button.innerHTML = 'Show Less';
    }

};

}

window.onload = function(){

    setUpEvents();

}
*/

//javascript timers
/*var myMessage = document.querySelector('#message');

function showMessage() {
    myMessage.className = 'show';
}

 setTimeout(showMessage, 3000);

 var colorChanger = document.querySelector('#color-changer');
 var colors = ['red', 'blue', 'green', 'pink'];
 var counter = 0;

 function changeColor(){

    if(counter >= colors.length){
        counter = 0;
    }

    colorChanger.style.background = colors[counter];
    counter++;

 }

 //setInterval(changeColor, 3000);

 // To stop a timer
 var myTimer = setInterval(changeColor, 3000);

colorChanger.onclick = function(){
    clearInterval(myTimer);
    colorChanger.innerHTML = 'Timer stopped';
};

const message = document.querySelector('#message');

function show (){
    message.className = 'show'; 
}

setTimeout(show, 3000);

var change = document.querySelector('#color-changer');
var color = ['gold', 'orange', 'purple', 'gray'];
var cont = 0;

function changer(){
        if(cont >= color.length){
            cont = 0;
        }

    change.style.background = color[cont];
    cont++;
}

//setInterval(changer, 3000);

// stop timer
var any = setInterval(changer, 3000);

change.onclick = function(){
    clearInterval(any);
    change.innerHTML = 'STOP'
}
*/

/*
// Accessing form elements
var myform = document.forms.myform
undefined
myform;
<form action name=​"myform" id=​"my-form">​…​</form>​
myform.name.value
''
myform.name.value
'Ninja'
myform.color.value
'blue'

//Onfocus method
myform.name.onfocus = function(){myform.name.style.border = '4px solid pink'}
ƒ (){myform.name.style.border = '4px solid pink'}
myform.name.onblur = function(){myform.name.style.border = 'none'}
ƒ (){myform.name.style.border = 'none'}
*/


// Form Validation
/*var myform = document.forms.myform;
var message = document.querySelector('#message');

myform.onsubmit = function(){
    if(myform.name.value  === '' ) {
        message.innerHTML = 'Please enter a name';
        return false;
    } else {
        message.innerHTML = '';
        return true;
    }
}

var myform = document.forms.myform;
var message = document.querySelector('#message');

myform.onsubmit = function(){
    if(myform.name.value === '' || myform.email.value === '') {
        message.innerHTML = 'Please enter all fields'
        return false;
    } else {
        message.innerHTML = '';
        return true;
    }
}
*/

/*
// Javascript Libraries
var myPara = document.getElementById('content').getElementsByTagName('p')[5];
var myPara2 = $('#content p:last-child');

var myPara2 = $('#content p:last-child');

undefined
myPara2.addClass('test');
n.fn.init {0: p.test, length: 1, prevObject: n.fn.init, context: document, selector: '#content p:last-child'}
myPara2.removeClass('test');
n.fn.init {0: p, length: 1, prevObject: n.fn.init, context: document, selector: '#content p:last-child'}
myPara2.fadeOut();
n.fn.init {0: p, length: 1, prevObject: n.fn.init, context: document, selector: '#content p:last-child'}
myPara2.fadeIn();
n.fn.init {0: p, length: 1, prevObject: n.fn.init, context: document, selector: '#content p:last-child'}
myPara2.css({positon: 'relative', color: 'red'})
n.fn.init {0: p, length: 1, prevObject: n.fn.init, context: document, selector: '#content p:last-child'}
myPara2.animate({left: '50px'})
n.fn.init {0: p, length: 1, prevObject: n.fn.init, context: document, selector: '#content p:last-child'}
myPara2.animate({left: '50px'});
n.fn.init {0: p, length: 1, prevObject: n.fn.init, context: document, selector: '#content p:last-child'}*/
