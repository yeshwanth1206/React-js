var React = require('react');
var LabelComponent=require('./LabelComponent');
var ComposeComponent=require("./ComposeComponent");


var Component2left=React.createClass({
        

render:function(){
        var a =this.props.labelIds;
        var idName = this.props.allLabelsData.map(function(id_and_name) {

            if(id_and_name.id=="INBOX"|| id_and_name.id=="SENT"||id_and_name.id=="DRAFT"||id_and_name.id=="TRASH"||id_and_name.id=="CHAT")
            {
                
               return( <LabelComponent id={id_and_name.id} name={id_and_name.name} labelIdds={a} />);
             }
             else
             {
                 return (null);
             }
       });

        return(
            <div >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12" id="grid8">
                            <h3 className="text-center">
                                Left Panel
                                <ComposeComponent />
                            </h3>
                            <h3>
                            {idName}
                            </h3>
                            
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
});

     module.exports=Component2left

