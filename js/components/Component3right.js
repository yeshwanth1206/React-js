    var React = require('react');
     var ReactDom= require ('react-dom');
     var GmailRightChild=require("./GmailRightChild");

     var Component3right=React.createClass({

    render: function() {
     that=this;
     var rows=[];
     this.props.allMsge.forEach(function(msg) 
     {
        var msgSubject,msgFrom,mgsDate;

        for(var HI=0; HI <msg.payload.headers.length;HI++)
            {

                if(msg.payload.headers[HI].name=='Subject')
                {
                    msgSubject=msg.payload.headers[HI].value;
                }
                if(msg.payload.headers[HI].name=='From')
                {
                     msgFrom=msg.payload.headers[HI].value;
                     var fields= msgFrom.split(/</);
                     msgFrom=fields[0];
                }
                if(msg.payload.headers[HI].name=='Date')
                {
                    mgsDate =msg.payload.headers[HI].value;
                }

            }
        rows.push(   <GmailRightChild msgSubject={msgSubject}  msgFrom={msgFrom}   mgsDate={mgsDate} key= {msg.id} />);
        });

    return (
     <div id="grid4">   

    <table className="table table-inbox table-hover">
      <thead>
        <tr>
          <th>From</th>
          <th>Subject</th>
          <th>Date/Time</th>
        </tr>
      </thead>
       <tbody>{rows}</tbody>
    </table>
    </div>
     
    );
 }

});
     module.exports=Component3right
