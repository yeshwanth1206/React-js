var React = require('react');
var ReactDom= require ('react-dom');

var Component2left=require("./components/Component2left");
var Component3right=require("./components/Component3right");

var GmailBox=require("./components/GmailBox");







var MainComponent=React.createClass({
     	
       render:function(){           
            
        return(
            <div>
                        <div className="container">
                            <div className="row" >
                                <div className="col-md-12">
                                  <GmailBox />  
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row" >
                                <div className="col-md-12">
                                    <div className="row" >
                                        <div className="col-md-4" id="grid8">
                                            
                                        </div>

                                        <div className="col-md-8" id="grid4">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>


            );
    }
 });

ReactDom.render(<MainComponent  />,document.getElementById('app'));