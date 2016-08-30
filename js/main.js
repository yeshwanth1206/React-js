var React = require('react');
var ReactDom=require('react-dom');
var {browserHistory, Route, Router, IndexRoute}=require('react-router');
var ReactDom= require ('react-dom');
var Home=require("./components/Home");
var Navbar=require("./components/NavBar");
var About=require("./components/About");
// var GmailBox=require("./components/GmailBox");
var Component2left=require("./components/Component2left");
var Component3right=require("./components/Component3right");

var GmailBox=require("./components/GmailBox");
var MainComponent=React.createClass({
 render:function(){

        return(
                    <div>
                    <Navbar />
                    <br/><br/><br/><br/>
                  HELLOOOOOOOOOOOO
                  {this.props.children}
                    </div>

            //         <div>
            //             <div className="container">
            //                 <div className="row" >
            //                     <div className="col-md-12">
            //                       <GmailBox />
            //                     </div>
            //                 </div>
            //             </div>

            //             <div className="container">
            //                 <div className="row" >
            //                     <div className="col-md-12">
            //                         <div className="row" >
            //                             <div className="col-md-4" >

            //                             </div>

            //                             <div className="col-md-8" >

            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            // </div>

					);
    }
 });

ReactDom.render(<Router history={browserHistory}>
                    <Route path="/" component={MainComponent}>
                        <Route path="/home" component={Home}/>
                        <Route path="/about/:aboutName" component={About}/>
                        <Route path="/gmailbox" component={GmailBox}/>
                     </Route>   
                </Router>,document.getElementById('app'));
                // ReactDom.render(<MainComponent  />,document.getElementById('app'));
