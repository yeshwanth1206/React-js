var React = require('react');
     var ReactDom= require ('react-dom');
     
     var Grandchild=React.createClass({
        render:function(){
	        return(
		        <div>
		        <h1 className="text-center">I AM  GRAND CHILD COMPONENT LEFT</h1>
		        </div>
        
        );
    }
 });
     module.exports=Grandchild