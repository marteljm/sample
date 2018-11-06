cheatsheet.js 03nov2018 16:23

https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/t/lecture/5752808?start=0
setup for iOS
https://facebook.github.io/react-native/docs/getting-started.html
components: xcode(apple app bldr, iOS simulator), homebrew (install node), Node(run js outside browser)/NPM(dependency mgmt), watchman(watchinf file changes), RN CLI (run native cmd line tool)

I did some high level soul searching yesterday above the smog. Here’s my (current) plan. There are a number of really cool sounding jobs out there, But I’m stuck here for at least 2 months. I get paid OK. So: 1. help where I’m wanted, 2. learn react native, 3. learn everything I can about machine learning. That will take me about 3 months.

-------------
https://www.udemy.com/react-the-complete-guide-incl-redux
codepen.io editor
+components: react, react DOM, Babel (js preprocessor, JSX)
single page apps that have dynamic components - client rendering vs multipage prepared on server
reactjs.org
jsbin.com editor to render js, html...

next-gen JS
let :use instead of var  let x="max';"
const :never changes)

Arrow functions
funtion myFun(x) {}
const myFun=(x,y) => { console.log(x); return x+y;}

import person from './person.js'  // iimports default
import {baseData} from ...

//classes
class Human {
	constructor() {
		this.gender='male';
	}
	// OR in ES7
	gender='value';
	printGender() {
		console.log(this.gender);
	}
	// OR ES 7
	printGender = () => {
		console.log(this.gender);
	}
}
class Person extends Human {
	constructor() {
		super();
		this.name='Max';
	}
	printName() {
		console.log(this.name);
	}
}
const p= new Person()
p.printGender();

// spread & rest ops ... pull out all elements
...oldObj, newstuff)
// destructor - pull out single elements
// copy the object (using spread) vs referening pointer
.filter  map const double {x=number.map((nuym) => {return num*2})

Chapter27 -react setup
npm - pkg mgr
webpack - bundler
compiler js compiler - Babel
- dev server on local machine
atom (MS VS) - editor
0. https://github.com/facebook/create-react-app     // for instructions
1. nodejs.org | download (npm, dev server)
  This package has installed:
	•	Node.js v11.1.0 to /usr/local/bin/node
	•	npm v6.4.1 to /usr/local/bin/npm
  Make sure that /usr/local/bin is in your $PATH.
2. terminal |
  sudo npm install -g create-react-app
  create-react-app projname    //creates folder for project and setup
  cd projname
  sudo npm start

PROJECT Files
src\package.json - dependencies, scripts
src\index.js  -
public\... assets to loaded
public\index.html  // root page
src\index.js  // access to root ReactDOM.render( )
src\App.js   // react class - THIS IS THE MAIN FILE

React.createElement('div', {className: 'App'}, React.createElement('Hi React'), ...)   //html to render
=== JSX - only get one root element div
  <div className="App">
  <h1> Hi React</h1>
  </div>

Create another component in src | create sub folder (convention Cap start)
Person.js   //function that return jsx
const person = (props) => {
  return <p>I'm a Person named {props.name} and I am {props.age} old and {props.children}</p>
}
<Person name="Barb" age="30" > SOME children Concat stuff </Person>

state defined only in Component derived

console.log('whatever see in browser's dev tools console)




---------------
//JAVASCRIPT
//Access page structure and elements (html, css) and control presentation and behavior then thru scripting
//ES6 needs transpiler like Babel to comile to bassic js
// jQuery library for js functions
// angular, react, vue are frameworks fthat build websites like interactive web apps
// node.js runtime browser platform environment
// io HTML file
<script type=”txt/javascript”>{ }</script>  // comment- type not required
<script src=”tabs.js”></>    // must close

//inspect, console
// console execs js
alert("junk in msg box of pages")
console.log("hello " + typeof str);

// <script src="test.js"></script>  // ref js file
// js renders as soon as browser encouters.
// async  // load when needed
// defer  // wait until everything else is loaded
// case sensitive, use camelCase
// var and function  are camelCase, class are Capitlized, const all caps
// whitespace ignored
// end with ;
/* comment multi line */
// single line comment

jsx can’t handle hyphens in the css/html  so {{background:emphasis}}


var date= new Date();
var a, b = 0;
var str = "any surrounding 'yuk' quotes \" escaped"
var bool = true;  //or false
var empty = null; // undefined  if not deifned
var player1= {name:"fred", score:100, doFunc:null}; // creates object
player1.doFunc= funcName;     // set func to call in the object
const constVar=5; 	// static var never changes
let var;	//use these in code blocks
var arr=[1,3,5];   properties and methods
arr[0]++;
arr.length;
arr.join; // returns all the ele of the array in one concated object
arr.map(func); // create new array by perfomring func on all ele
arr.reduce(func); // flatten using func(acc,val) return one value (sum array)
arr.find(ele);	// return first matching
arr.findIndex(ele);	//return arr index of matching
arr.reverse();		// revers array
arr.push/pop // add/remove from end of arr
arr.shift/unshift("added", "2added"); // add / remove from startPos
arr.splice(0, 2, 'parrot', 'anemone', 'blue'); //remove 2ele at 0 and insert next 3
var p = arr.slice(); // copy array
var i = arr.indexOf(searchFor, startPos);

+= /= -= ++ --  ++a a++ != && || % mod
NaN - not a number err
math.round ... // math functions
.slice() // copies

if (a==b) {true exec} else {false exec};
a==b ? true : false;
(a === b) // exact equality, no type conversion
for (let i=0; i<parm1.length; i++) { }
while (i<10) {i++; }
do {i++; } while (i<10);
break;  // terminate the loop
continue; // start at top of loop

// functions
function funcName(parm1, parm2=1) { // go through all the <li> elements
	globalVar; // no var then it is global!
	var internalVar;
	if (true) {var internalVar})	// this is the same as outer internvar! so need let
	let internalVarAbsolute=7;	// strict to block // USE THIS TO LIMIT SCOPE TO THAT BLOCK
	return parm1[parm2]=999;
}
var a = funcName(arr, 2);   // call func and save return in a

// anonymous function, no name. the var is the function
var anonVar = function(parm1, parm2=1) { // go through all the <li> elements
	return parm1[parm2]=999;
}
var a = anonVar(arr, 2);

// immediate invoke the function, as the browser sees it, note the ( pre func:
var anonVar = (function(parm1, parm2=1) { // go through all the <li> elements
	return parm1[parm2]=999;
})(arr,2)

// OBJECT and properties
var course=new Object();
var course = {
	title:"stuff",
	desc:"descrip"
	updateMe: function()
		{return course.title+course.desc}
}

function Course(titleIn,descIn) {
	this.title=titleIn;
	this.desc=descIn;
	this.updateViews= function()
		{return this.views;}
}
var c1 = new Course("my Title", "my Descript")
// course.title     same as    course["title"]  (wp:image) from another tech
// CLOSURES function nested in another function that use outside vars

// DOM BOM nodes
window. // top level Object
document. // DOM node tree  .title  .URL   .head   .body
document.body.innerHTML="<h3>Today is: " + date + "<h3>" + str
var x=document.querySelector(".main-nav").innerHTNL="ya";  // get 1st ele in the doc
document.querySelectorAll(".post-content p").outerHTML;	// get all ele matching this hier .post.p in the doc into an array
document.querySelectorAll('a[href^="http"]'); // href attr starting with http
document.querySelectorAll("a", "div")  // comma separators act as an OR
//https://developer.mozilla.org/en-US/docs/Web/API/Element
// many ele are read-only. to change them use the methods: add, remove, item, toggle, contains
// attributes name:value pairs
element.getAttribute()     setAttribute(target, calue)

// rather than setting existing create new ele, create text node to go in, add text node to ele, add ele to dom
const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");
var altText = THEIMAGE.getAttribute("alt");
var captionElement = document.createElement("figcaption");
var captionText = document.createTextNode(altText);   // see alt way below
captionElement.appendChild(captionText);
console.log(captionElement);
FEATURED.appendChild(captionElement);
THEIMAGE.setAttribute("alt", "");
// or simpler
const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");
var altText = THEIMAGE.getAttribute("alt");
var captionElement = document.createElement("figcaption");
captionElement.append(altText);   // changed here
console.log(captionElement);
FEATURED.append(captionElement);
THEIMAGE.setAttribute("alt", "");

//add inline custom css to ele.
document.querySelector(".cta a").style.backgroundColor="green" // if has dash, use camelCase
// or this way can use has/get/set methods
document.querySelector(".cta a").setAttribute("style", "padding:2em; color:blue; background-color:black");
// these overides css, so better to do a class

//EVENTS
//1. detect click event, bind/attach behavior to DOM Node. onclick run function
// browser event: load, error, online, resize, scroll
// dom level: focus, blur (lose focus), Reset/submit, mouse
// mdn event reference

//Event Handler Onclick toggling DOM
const CTA=document.querySelector(".cta a");
const ALERT=document.querySelector("#booking-alert");
CTA.classList.remove("hide");
ALERT.classList.add("hide");
function reveal(e) {
  e.preventDefault();
  CTA.classList.toggle("hide");
  ALERT.classList.toggle("hide");
  console.log("flipper");
}
CTA.onclick = reveal;  // no parenthesis so won't loadCSS, can only do one onclick
//Better yet replace last line with Event Listener, these can be stacked
CTA.addEventListener("click", reveal, false);
CTA.addEventListener("click", function(){console.log("gogo")}, false)
/// want to pass e and the trigger Object
CTA.addEventListener("click", function (e){reveal(e,this);}, false);

testArea.addEventListener("keypress", start, false);    // keyboard events
testArea.addEventListener("keyup", spellCheck, false);
interval=setInterval(runTimer,10);  // call this function every thousandth second

// responsive images:  dependent on window size
imgSrc=imsrc.slice (0,-8); strip last 8 chars

// TOOLS
// open the console
// click on brace to see pair - blue underline
// red background text in atom
// long green text is literal string - check quotes
// console.log    console.info box    console.error  - red text
// inspect | sources, (debugger) set breakpoint by clicking opn line#, step, hover over var
// jslint.com   better: jshint  or eslint
  // npm install -g eslint  // install esliint globally then
  // npm init   // in your project folder to create package.json (what pkgs to use)
  // eslint --init to configure what eslint looks for
  // atom | project |Settings |Install | eslint linter, install the others
//minify.org to minify the code  ->  script.min.js.   sources pretty print unminifies


//stuff

//Destructuring -> mapping one array or object into another~ish
 {Contacts.map(({id, first/*as defined in Contacts*/: fullName/*what it will now be called*/, avatar, last: username}) => (
   <li key={id} style={{paddingTop: '15px'}}>
     <Profile
       fullName={fullName}
       avatar={avatar}
       username={username}/>
   </li>

window.onload=function () {
	tabLinks = document.getElementById(“tabs”).getElementsByTagName(“li”);
	// get from DOM and store array of them
	tabLinks[i].onClick = function() { // assign event listenr onClick to call this function
		funcName(this); }
	return false;		//disable
}

REACT TRAINING NOTES ==============================================
// arrow funcitons
const MyFunc = (parm1, parms2=default) => {
	  return `Only ${parm1} easy`;
}
(parms) => ({ })   //returns object, no return needed
// undefined default parms (not a null)

{ javascript }    // curly brackets indicate JAVASCRIPT

React component must start Capital letter, single node <div>

REDUX
state is an object that determines what you see,
single state tree is read-only: dispatch action, describe the action
good for scale
what is the logical object?

ES6 JAVASCRIPT Day 1 ===========================
const greet = function (salute) =>
name => salute + ' ' + 'salute'
const hellowgreet = greet('hello');
 -----
const salesPitch = `Only ${payments} easy payments of $${price}!`

const BigBird = {height: `8'2"`, color: '#f7f16d', age: 'timeless'};
const {color, height} = BigBird;

//color === '#f7f16d'   //height === `8'2"`           "
const colors = ['#f00', '#0f0', '#00f'];
const [red, green] = colors;
const a = [1,2,3]
// Destructuring
const flatArray = [...a, 4, 5];   //flatArray uses ... to do rest : [1, 2, 3, 4, 5]
const b = {a:1, b:2, d: {z:1}};
const flatObject = {...b, c:3};   //flatObject == {a:1, b:2, c:3, d: {z:1}};
const person = {
  givenName: "Dave",
  familyName: "Jackson",
  age: 31
};

const ext = ({givenName, familyName, ...user}) => {
  return {...user, admin:'tru', givenName, familyName, commonName:givenName+familyName};
or
  return {...user, admin:'tru', givenName, familyName, commonName:’${givenName} ${familyName}’};
}
console.log(ext(person))

// google apiconst
isbn = '039480001X'
const service = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
fetch(service)
  .then(res => res.ok ? res.json() : Promise.reject())
  .then(res => {
    console.log(res.items[0].volumeInfo.authors)//do stuff
  })
  .catch(res => console.log(res));
OR
fetch(service)
  .then(res => res.ok ? res.json() : Promise.reject())
.then(res=>res.items[0])
.then(res=>res.volumeInfo)
.then(res=>console.log(res))
.catch(res => console.log(res));

// esoteric promises
const Dice = cheatiness => new Promise((resolve, reject)=>{
  setTimeout(()=>{
    const rollValue = Math.floor( (Math.random() * 6) +1 );
    if(rollValue > cheatiness){
      resolve(rollValue);
    } else {
      reject(`${rollValue} wasn't high enough`);
    }
  }, 1000)
});
Dice(3)
.then(console.log)
.catch(console.log)

const asyncSleep = (ms) => new Promise((resolve,reject)=>{
  Throw('error')
  setTimeout(resolve, ms)
});
asyncSleep(1000)
.then (res =>console.log('Yay!'))
.catch(res =>console.log('Bad!'))

------- function factory query string
const isbn = '039480001X'
const service = q => `https://www.googleapis.com/books/v1/volumes?q=${q}`;

const bookService = query =>fetch(service(query))
  .then(res => res.ok ? res.json() : Promise.reject(res))

bookService('babylons ashes')
.then(res=>res.items[0])
.then(res=>res.volumeInfo)
.then(res=>({title: res.title, desc:res.description}))
.then(console.log)
.catch(res => console.log(res));

----- import export modules
AUTHOR ----
export default () => {
  //...
}
export const mySpecificFunction = () => {
CONSUME  ----
import lib, * as everything from './lib.js';    // default and everything
import {mySpecificFunction as msf} from './lib.js';

lib(); //the default export
mySpecificFunction();

----- classes
class Shape {
  constructor(origin) {
    this.origin = origin;
  }
}

class Rectangle extends Shape {
  constructor(length, width, origin) {
    super(origin);
    this.l=length;
    this.w=width;
  }
  perim(){
    return 2*this.l + 2*this.w;
  }
}

const myRect= new Rectangle (3,4, {x:10, y:25});
console.log("total=" + myRect.perim());

REACT DAY – TUESDAY ========================

//Import Dependancies
const {React} = window;
const {ReactDOM} = window;

//sample data for convenience
const book = {
  title:"Oh, the Places You'll Go!",
  link: 'https://www.amazon.com/Oh-Places-Youll-Dr-Seuss/dp/0679805273',
  author: 'Dr. Seuss'
};

const link = React.createElement('a', {href: 'mailto:joe@example.com'}, book.title);

//render component to output target
ReactDOM.render(link, document.getElementById('app'));

const MyComponent = () => (
  <h1>A nice static component!</h1> // this is createElement, not html
);
const {React} = window;
const {ReactDOM} = window;

const MyComponent = () => (   // has to be Capitalized otherwise interp as htnl
  <ul>
       {
         [1,2,3,4,5,6,7,8,9,10].map(
           num => (<p>{num%2==0?num:null}</p>))
       }
  </ul>
);

//Render the component
ReactDOM.render(
  <MyComponent />,
  document.getElementById("app")
);
OR
         [1,2,3,4,5,6,7,8,1].map( num => {
             if ( num%2==0) return <p>{num}</p> })

//Import Dependancies
const {React} = window;
const {ReactDOM} = window;

const book = {
  "title": "Oh, the Places You'll Go!",
  "publisher": "Random House Books for Young Readers",
  "publishedDate": "1990",
  "pageCount": 48,
  "thumbnail": "https://books.google.com/books/content?id=_LettPDhwR0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  "authors": [
    "Dr. Seuss",
    "Ghost Author's name"
  ]
};

const Greet = ({title = "Title", publisher = "Publisher", publishedDate = "Published Date", pageCount = "Page Count", thumbnail, author = "Authors"}) => (
<div>
    <h1 style={{color: 'blue'}}>{title}</h1>
    <div style={{display: 'flex'}}>
    <img src={thumbnail} />
      <h2>{publishedDate}</h2>
      <p>{publisher}</p></div>
   </div>
);

//Render the component
ReactDOM.render(
  <Greet {...book} />,
  document.getElementById("app")
);

//Import Dependancies
const {React} = window;
const {ReactDOM} = window;

const book = {
  title: "Oh, The Places You'll Go!",
  thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/518eq5NjZkL._SX359_BO1,204,203,200_.jpg',
  details: {
    author: 'Dr. Seuss',
    published: '22 Jan 1990',
    age: '2-8 years',
    isbn: '0679805273'
    }
};

const List=({items})=>(
  <ul>
    {
      items.map(item=><li>{item}</li>)
    }
  </ul>
)

const Tile = ({title, thumbnail, details, children}) => (
 <div className="tile">
    <img src={thumbnail} />
    <section>
    <h3>{title}</h3>
      <span>{children}</span>
      <List items={details} />
    </section>
  </div>
);

const {details, ...rest}=book;
const items=Object.keys(details).map(item=>details[item]);

ReactDOM.render(<Tile {...rest} details={items}
    />, document.querySelector('#app'));

stateful COMPONENT  - lifecycle event

class Tile extends React.Component{
    render(){
     const {img, title, description} = this.props;
      return(
        <div>
          <figure>
            <img src={img} />
          </figure>
          <section>
            <h2>{title}</h2>
            <p>{description}</p>
          </section>
        </div>
      )
    }
  }

class CountUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  componentWillMount(){
      setInterval(() => {
        this.count()
      }, 1000);
  }

count(){
    this.setState(state => ({
      number: state.number + 1
    }))
  }

  render(){
    return(
      <div>{this.state.number}</div>
    )
  }

//Import Dependancies
const {React} = window;
const {ReactDOM} = window;

const isbn = '039480001X'
const service = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null
    };
  }

  componentWillMount(){
    fetch(service)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(res=>res.items[0])
    .then(res=>res.volumeInfo)
    .then((res)=>{
      this.setState({
        title:res.title
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.title ? (
         <h1> {this.state.title} </h1>
      ) : (
        <h1> waiting... </h1>
        )}
          </div>
      )
   }
}

ReactDOM.render(<Tile />,
                document.querySelector('#app')
);

Fetch google top10, state

//Import Dependancies
const {React} = window;
const {ReactDOM} = window;

/* Tile Component */
const Tile = ({title, subtitle, description, thumbnail}) => (

  <section className="tile">

    {thumbnail && (
      <figure>
        <img src={thumbnail} />
      </figure>
    )}

    <div>
      <header>
        <h2 className="tile__title">{title}</h2>
        {subtitle && (<small>{subtitle}</small>)}
      </header>
      <p className="tile__body">
         {description}
      </p>
    </div>
  </section>
);

/* Helper Functions */
const fetchBooksByIsbn = (isbn) =>
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${isbn}`)
    .then(res => res.ok? res.json() : Promise.reject(res));

const deconstructGoogleResponse = ({items=[]}) => (
  items.map( ({volumeInfo: {title, publisher, description, imageLinks}}) => {
    const {thumbnail} = imageLinks;
    return {title, publisher, description, thumbnail};
  })
);

/* Container Component */
class BookContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      books: []
    }
  }

  componentWillMount() {
    const {isbn} = this.props;
    this.setState({loading: true});
    fetchBooksByIsbn(isbn)
      .then(deconstructGoogleResponse)
      .then((books) => this.setState({books, loading: false}))
      .catch(()=>this.setState({error: true}))
  }

  render() {
    const {books, loading, error} = this.state;

    if(error) {
      return <h4>You broke it 💔</h4>;
    }

    if(loading) {
      return <h4>Loading <i>⌛️</i></h4>
    }

    if(books.length===0) {
      return <h4>No books 😭</h4>;
    }

    return (
      <ul className="container">
        {books.map( ({title, publisher, description, thumbnail}) => (
          <li key={title}>
             <Tile
               title={title}
               subtitle={publisher}
               description={description}
               thumbnail={thumbnail}
             />
          </li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <BookContainer isbn='dog' />,
  document.body
);

// const isbn = '039480001X'

this.hide = this.hide.bind(this);
binding to the parent object so on the call of the behavior its not the button that called it

flatten out props
//Import Dependancies
const {React} = window;
const {ReactDOM} = window;

const DrawerHandle = ({children, onClick}) => (
<button onClick={onClick}>{children}</button>
);

const DrawerBody = ({children}) => (
<div>{children}</div>
);


class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((state) => ({
      open: !state.open
    }))
  }

  render() {
    const {open} = this.state;
    const {title, children} = this.props;

    return (
    <div>
      <DrawerHandle
        onClick={this.toggle}>
        {title}
      </DrawerHandle>

        {open && (
        <DrawerBody>{children}</DrawerBody>)}
    </div>
    );
  }
}

ReactDOM.render(
  <Drawer title="click here to learn more">
    More stuff.
    </Drawer>,
  document.body
)

handling FORM input

//Import Dependancies
const {React} = window;
const {ReactDOM} = window;

//Use React Class syntax --> Smart (stateful) component
class SimpleForm extends React.Component{

  constructor(props){
    super(props);

    //create the initial state
    this.state = {
      checked1: false,
      checked2: false,
      textin: null
    }

    //Bind actions to this instance of "this"
    //when component is rendered
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextin = this.handleTextin.bind(this);
  }

  //called when the checkbox value changes
  handleChange1(e){
    this.setState({ checked1: e.target.checked });
  }
  handleChange2(e){
    this.setState({ checked2: e.target.checked });
  }
  handleTextin(e){
    this.setState({ textin: e.target.value });
  }
  //called when the submit button is pressed
  handleSubmit(e){
    const {onSubmit} = this.props;
    console.log(e);
    onSubmit(e, this.state.textin);
  }

  render(){
    return (
      <div>
        <h2>AND form</h2>
        <input type="checkbox" checked={this.state.checked1} onChange={this.handleChange1} />
        <input type="checkbox" checked={this.state.checked2} onChange={this.handleChange2} />
        <input type="text" name="fname" onChange={this.handleTextin}/>
        <p><button onClick={this.handleSubmit}>Submit</button></p>
      </div>
    )
  }
}

const submitAction = (event, data) => {
  console.log(data);
}

ReactDOM.render(
  <SimpleForm onSubmit={submitAction}/>,
  document.querySelector('#app')
);

//https://codepen.io/mdjasper/pen/EZzgRv?editors=0011

REDUX Day 3 ======================
// (optional, not needed by React) notification state subsrciption

//riley
const state = {
  formValue: '',
  listOrder:['1845', '774a'],
  items: {
    "1845": {
      id:'1845',
      isbn:'',
      isRead: false,
      title:'',
      author:'',
      thumbnail:'',
      isDeleted:'',
    },
    '774a': {},
    '7779': {}
  }
}

//Jared
const state = {
    books: {
        objects: {
            id1: {
                title: "book title",
                author: "Author name",
                description: "Long description of book",
                isRead: true,
                thumbnail: "//path/to/image.jpg"
            },
            id2: {
                title: "book title",
                author: "Author name",
                description: "Long description of book",
                isRead: true,
                thumbnail: "//path/to/image.jpg"
            },
}
    },
    user: {
        books: [id1, id2]
    },
    suggestions: {
        visible: true,
        activeIndex: 1,
        books: [id3, id4]
    },
    welcome: {
        message: "Welcome to my website",
        visible: true
    }
}

// state actions

const state = {
  formValue: '',
  list:[],  //ordered list of items
  items: {
    key: {
      id:'1845',
      isbn:'',
      isRead: false,
      title:'',
      author:'',
      thumbnail:'',
      isDeleted:false,
    },
  }
}

const SetFormValue = string => ({
  type : "SET_FORM_VALUE",
  payload : string
});

const AddItem = string => ({
  type : "SET_ADD_ITEM",
  payload : string
});

const SetItemRead = boolean => ({
  type : "SET_ITEM_READ",
  payload : boolean
});

const DeleteItem = key => ({
  type : "DELETE_ITEM",
  payload : key
})

// state reducers, no side effects, no outside dependencies
every reducer gets every action

const reducer = (state={formValue:"unset", item:{} }, action) => {
  switch(action.type){
    case "SET_FORM_VALUE":
      return { ...state, formValue: action.data };
    case "ADD_ITEM":  {
//      state.list.push(action.data);
      return { ...state, item: {
              ...state.item,
              action.data };
    }
    default:
      return state
  }
};

doesn’t work
//Reducer
//  Accepts a prior state and an action
//  state is inialized to default values, if undefined is passed
const state = {
  formValue: '',
  list:[ ],  //ordered list of items
  item: {
   // key: {
   //    id:'',
   //    isRead:false,
   //    title:'',
   //    thumbnail:'',
   //    isDeleted:false,
   // },
  }
}

const SetFormValue = string => ({
  type : "SET_FORM_VALUE",
  payload : string
});

const SetItemRead = boolean => ({
  type : "SET_ITEM_READ",
  payload : boolean
});

const AddItem = ({id, isRead, title, thumbnail, isDeleted}) => ({
  type : "ADD_ITEM",
  payload : {id, isRead, title, thumbnail, isDeleted}
});

const DeleteItem = key => ({
  type : "DELETE_ITEM",
  payload : key
})

const reducer = (state={formValue:"unset"}, {type, payload}) => {
  switch(action.type){
    case "SET_FORM_VALUE":
      return { ...state, formValue: action.data };
    case "ADD_ITEM":  {
//      state.list.push(action.data);
      return { ...state, [payload.id]:payload};
    }
    default:
      return state
  }
};

//Action Creator
//  accepts a new number and returns an action object
const changeFormValue = data => ({type: "SET_FORM_VALUE", data });
const addItem = data => ({type: "ADD_ITEM", data });

//Getting a default state (no previous state, no action)
const State1 = reducer(undefined, {});
//Getting a new state using a prior state and an action creator
const State2 = reducer(State1, changeFormValue("joe"));
//const State3 = reducer(State2, addItem("ITEM 1"));
//const State4 = reducer(State3, addItem({id:'sally', isRead:false, title:'', thumbnail:'', isDeleted:false}));

//Log out current and prior state
console.log("-------GO ------");
console.log(State1);
console.log(State2);
console.log(State3);
console.log(State4);

----- works
const books = {
  list:[],
  welcome: true,
  recommendations: true
};
//Reducer
//  Accepts a prior state and an action
//  state is inialized to default values, if undefined is passed
const reducer = (state=books, action) => {
  switch(action.type){
    case "ADD_BOOK":
      // new state with new [] that contains old [].push(data)\
      return {...state, list:[...state.list, action.data]};
    default:
      return state
                    }
};

const book1 = {
  name: '#1 Some Book Title',
  author: 'test author',
  isbn:'123456',
  isRead: false,
  removed: false,
  image: 'http://path/to/img',
  description:'asdfg'
};
const book2 = {
  name: '#2 Some Book Title',
  author: 'test author',
  isbn:'123456',
  isRead: false,
  removed: false,
  image: 'http://path/to/img',
  description:'asdfg'
};
//Action Creator
//  accepts a new number and returns an action object
//const changeMyNumber = data => ({type: "SET_MY_NUMBER", data });
const addBook = book => ({
  type: "ADD_BOOK",
  data: book
})
//Getting a default state (no previous state, no action)
const State1 = reducer(undefined, {});
//Getting a new state using a prior state and an action creator
const State2 = reducer(State1, addBook(book1));
const State3 = reducer(State2, addBook(book2));
//Log out current and prior state
console.clear();
console.log(State1);
console.log(State2);
console.log(State3);

----- another approach with [ ] and aggregating reducers

const defaultRecommendationsState = {
    isShowing: true,
    currentIndex: 0,
    bookNameList: [
      {title: "Oh, the Places You'll Go!", isbn: "9780679805274"},
      {title: "Green Eggs and Ham", isbn: "9780001713062"},
      {title: "Horton Hears a Who!", isbn: "9780385372053"},
      {title: "If I Ran the Zoo", isbn: "9780394800813"},
      {title: "The Foot Book", isbn: "9780385373531"},
      {title: "Hop on Pop", isbn: "9780385372046"}
    ]
  };

const defaultState = {
  user: {
    bookList: []
  },
  books: {},
  recommendations: defaultRecommendationsState
};

//Reducer
//  Accepts a prior state and an action
//  state is inialized to default values, if undefined is passed
const booksReducer = (state={}, action) => {
  switch(action.type){
    case "ADD_BOOK_TO_READING_LIST":
      {
        const {payload:book} = action;
        const {id} = book;
        return {...state, [id]: book};
      }
    case "TOGGLE_BOOK_READ":
      {
        const {payload:id} = action;
        const {[id]:book} = state;
        return {...state, [id]: {...book, isRead: !book.isRead}};
      }
    default:
      return state
  }
};
const userReducer = (state={bookList: []}, action) => {
  switch(action.type) {
    case "ADD_BOOK_TO_READING_LIST":
      return {...state, bookList: [...state.bookList, action.payload.id]};
    default:
      return state
  }
}
const recommendationsReducer = (state=defaultRecommendationsState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

const rootReducer = (state={}, action) => ({
  user: userReducer(state.user, action),
  books: booksReducer(state.books, action),
  recommendations: recommendationsReducer(state.recommendations, action)
});

//Action Creator
const AddBookToList = book => ({type: 'ADD_BOOK_TO_READING_LIST',  payload: book});
const ToggleBookRead = bookId => ({type: 'TOGGLE_BOOK_READ', payload: bookId});
const RemoveBook = bookId => ({type: 'REMOVE_BOOK_FROM_LIST', payload: bookId});
const NextRecommendedBook = () => ({type: 'NEXT_RECOMMENDED_BOOK'});


//Getting a default state (no previous state, no action)
const State1 = rootReducer(undefined, {});


//Getting a new state using a prior state and an action creator
const State2 = rootReducer(State1, AddBookToList({
  id: '413',
  title: 'Cat in the Hat'
}));

const State3 = rootReducer(State2, AddBookToList({
  id: '543',
  title: 'Hop on Pop'
}));

const State4 = rootReducer(State3, ToggleBookRead('413'));


//Log out current and prior state
console.clear();
console.log(State3);
console.log(State4);
console.log(State4.books);

--------- REDUX API
subscribe triggers on state change, not actions
 //need console call
const {createStore, combineReducers}=Redux;

const profile=(state={}, {type,payload})=> {
  switch(type) {
    case "ADDED_PERSON": {
      const {id,name}=payload;
      return {id,name};
    }
    default:
      return state;
    }
}

const store=createStore(combineReducers({
  profile,
  score
}));

store.subscribe(()=> {  // each state change would trigger this
  const {profile, score} = store.getState();
  console.org ("changed");
  document.getElelmentByUD("name").innerHTML=profile.name
})
// console call

---- connect

State => Props      Actions => Dispatch (bound action creator)
Merge all above
Component   + ReduxConnect + Above

---------- uggh incomplete
const {createStore, combineReducers}=Redux;

const profile=(state={}, {type,payload})=> {
  switch(type) {
    case "ADDED_PERSON": {
      const {id,name}=payload;
      return {id,name};
    }
    default:
      return state;
    }
}

const increment = () => ({
  type:"SCORE_INC":
})

const incrementAsync = () => (dispatch) => //thunk middleware
callAPI()
  .then(score)=> dispatch(increment(score))

const store=createStore(combineReducers({
  profile,
  score
}));

store.subscribe(()=> {  // each state change would trigger this
  const {profile, score} = store.getState();
  console.org ("changed");
  document.getElelmentByUD("name").innerHTML=profile.name
})
// console call

https://readme.app.lds.org/

React starter kit
Visual studio code. Atom
Component.js (src)
--- goto the folder in terminal (my-app, my-component
Npm start

Files in the my-app
webpack.client.babal.js // shouldn’t have to modify this
src/app
client.js highest level: render. Shouldn’t have to modify
routes.js router jsx, react component
store.js  combines all reducers to rootReducer
containers/home.js   access lifecycle methods. Isomorphic-can render server (for SEO, deep link) or client side
app/views/landingview .js
package.json   command lines
npm run dev     (url 3000)
npm run create:component Greeting    // will create new component called Greeting in src
npm run components 9999
lhs of atom show components – and click on prop to exec (.add)
working in greeing.story.js AND greeting.js
greeting/style.css   display:flex;
changed button to Button since we defined that class
src/server index.js   use api:api,   get: eactHandler, use 404
server routes api.js    cors – can talk to api on diff port, router
kill server, npm run dev
http://localhost:3000/api/user
fetch call:
src/app/services/site-nav.js    fetch, change data here and it affects everything below – app wide, otherwise store

src/app/reducers     add new js file, get data from server and need to dispatch
weird data coming in, then put weirdness up. focus about structure that’s easy to store for a long time. Add extra data to payload without impacting
hook redcuer into redux: views/store.js    import and combine.
Goto 3000 url : user in state and chart

Dispatcher in insepct of browser
type: 'RECEIVE_USER', payload:{id:3, name:'sally'}

now create action creator src/app/actions
site-nav is sync.

REDUCER:ACTION pairing
Import take default and names it this

Now view to consume and container to send prop to view
View first
npm run create:view List      create List in View

take more general and become more focused on way up
npm run create:container readinglist
npm run components
readlinglist.js    ad props

npm ls create-react-app -g
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
npm install -g create-react-app

//install storybook
npm i -g @storybook/cli

cd react  //goto folder when you want your app
create-react-app joesapp  // will create this app in the current folder
cd firstapp // goto folder of the app
getstorybook   // install the storybook framework into that app
npm run storybook  // look at localhost, goto url in browser

drag firstapp folder into atom
create new folder in src components
copy paste stories/button.js into new file MyComponent

to add new stories in hierarchy goto stories\index.js and add them in with .add

// prop title, and children passed: from index.js
.add('away', () => <MyButton title="In Title">junk</MyButton>)
// to component receives that prop and child and renders
const MyButton = ({ children, title="not title" }) =>
<div>
    <h1>{title}</h1>
    <button>{children}</button>

component MyInput has a prop onSubmit

app.js  MyInput.js

material-ui.com
