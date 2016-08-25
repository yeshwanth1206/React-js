 var React = require('react');
     var ReactDom= require ('react-dom');
     var GmailSentChild=require("./GmailSentChild");

     var Component4Sent=React.createClass({

    render: function() {
     that=this;
     var rows=[];
     this.props.sent_allMsge.forEach(function(msg) 
     {
        var msgReceived,msgFrom,mgsDate;

        for(var HI=0; HI <msg.payload.headers.length;HI++)
            {

                if(msg.payload.headers[HI].name=='Received')
                {
                    msgReceived=msg.payload.headers[HI].value;
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
        rows.push(   <GmailSentChild msgReceived={msgReceived}  msgFrom={msgFrom}   mgsDate={mgsDate} key= {msg.id} />);
        });

    return (
     <div id="grid4">   

    <table className="table table-inbox table-hover">
      <thead>
        <tr>
          <th>From</th>
          <th>Received</th>
          <th>Date/Time</th>
        </tr>
      </thead>
       <tbody>{rows}</tbody>
    </table>
    </div>
     
    );
 }

});
     module.exports=Component4Sent