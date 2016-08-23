var React = require('react');
var LabelComponent=require('./LabelComponent');


var Component2left=React.createClass({
        

render:function(){
        var idName = this.props.allLabelsData.map(function(id_and_name) {
           return (
                  <LabelComponent id={id_and_name.id} name={id_and_name.name} />
             );
       });

        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="text-center">
                                Left Panel
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

