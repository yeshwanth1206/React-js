var React = require('react');
     var ReactDom= require ('react-dom');
     var Grandchild=require("./Grandchild");

     var Component3right=React.createClass({
        render:function(){
            return(
            <div>
            <h1 className="text-center">I AM CHILD COMPONENT-3 RIGHT</h1>
            <h3>Title:{this.props.title}</h3>
            <h3>Description:{this.props.description}</h3>

            
            <Grandchild />
            
            </div>


        );
    }
 });
     module.exports=Component3right
