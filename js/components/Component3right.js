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

        //console.log("start of componentwill mount");

        this.allMessages();
        //console.log("end of component will mount");
      },
      componentWillReceiveProps  : function() {

        //console.log("start of componentWillReceiveProps");

        this.allMessages();
        //console.log("end of componentWillReceiveProps");
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

                //console.log(requiredData[0].fromValue);
                 that.setState({all_Msge_Data:rows});
                 //console.log("printing allmessages data's from value");
                 //console.log(allMessagesData[0].fromValue);
                 loadedData=true;
                 }.bind(that),
                 error: function(xhr, status, err) {
                 console.error(err.toString());
                 }.bind(that)
            });//end of ajax
          //console.log("end of ajax")
          //console.log("iterating the map now after returnstatement")
          return (
           that
          );

    });

  },

  render:function()
  {
  

    //console.log("inside right component render")
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
