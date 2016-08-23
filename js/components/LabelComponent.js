var React=require("react");

var LabelComponent=React.createClass({
    render:function(){
        return(
            <div>
                <a href="#" id={this.props.id}>{this.props.name}</a>
            </div>
        );
    }
});

module.exports=LabelComponent;