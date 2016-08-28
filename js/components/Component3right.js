    var React = require('react');
     var ReactDom= require ('react-dom');
     var GmailRightChild=require("./GmailRightChild");
     var loadedData=false;

     var Component3right=React.createClass({

      getInitialState: function()
      {
        return({ all_Msge_Data:[] });
      },

      componentWillMount: function() { 
        this.allMessages();
        },
      componentWillReceiveProps  : function() {
        this.allMessages();
        },
      allMessages:function(){
     var that=this;
     var rows=[];
     that.props.allMsge.map(function(msg) 
     {
        var id=msg.id;
        var accessToken = localStorage.getItem('gToken');
            $.ajax({
                url: 'https://www.googleapis.com/gmail/v1/users/yeshwanth1206%40gmail.com/messages/'+id+'?key={AIzaSyDNY4Mj3askiSHVgWbHmMBCs_xpH7GLNgI}',
                dataType: 'json',
                type: 'GET',
                async:'false',
                beforeSend: function (request)
                {
                  console.log("inside before send");
                  request.setRequestHeader("Authorization", "Bearer "+accessToken);
                },

                success: function(msg)
                {
                var msgSubject,msgFrom,msgDate;

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
                            msgDate =msg.payload.headers[HI].value;
                        }

                    }
                rows.push( {"msgSubject":msgSubject,"msgFrom":msgFrom,"msgDate":msgDate});
                 that.setState({all_Msge_Data:rows});
                 loadedData=true;
                 }.bind(that),
                 error: function(xhr, status, err) {
                 console.error(err.toString());
                 }.bind(that)
            });
          return (
           that
          );

    });

  },

  render:function()
  {
  
       var  items = this.state.all_Msge_Data.map(function(i) {
      return (
         <GmailRightChild msgSubject={i.msgSubject} msgFrom={i.msgFrom} msgDate={i.msgDate} />
            );
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
               <tbody>{items}</tbody>
            </table>
            </div>
             
            );
         }

        });
             module.exports=Component3right
