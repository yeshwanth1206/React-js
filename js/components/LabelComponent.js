var React=require("react");

var LabelComponent=React.createClass({ 
handleClick:function(id){
        var idd=id;

        console.log("inside left label component")
        console.log("printing id");
        console.log(idd);
        console.log("calling left component now and then gmailbox")
        this.props.labelIdds(idd);

    }, 

    render:function(){
        return(
            <div >
                <button  className="btn btn-primary btn-lg btn-block" id={this.props.id}  onClick={() => this.handleClick(this.props.id)}>{this.props.name}</button><br />
                
            </div>
        );
    }
});

module.exports=LabelComponent;