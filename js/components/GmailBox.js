var React = require('react');

var Component1=require("./Component1");
var Component1A=require("./Component1A");
var Component2left=require("./Component2left");
var Component3right=require("./Component3right");
var Component4Sent=require("./Component4Sent");
// var LeftSideBar = require('./LeftSideBar');
var loadedData = false;
var GmailBox = React.createClass({
 getInitialState: function()
   {
     return({allLabelsData:[], allMsge:[], MsgDetail:[],inbox:[],sent_allMsge:[], sent_MsgDetail:[],sent_items:[] , labelId:''});
   },



 gmailLogin: function()
 {
   var acToken, tokenType, expiresIn;
   var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
   var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly';
   var CLIENTID    =   '1017099668494-1skrtoc5fgucil85ea5ha60hijont4a7.apps.googleusercontent.com';
   var REDIRECT    =   'http://localhost:8080';
   var TYPE        =   'token';
   var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
   var win         =   window.open(_url, "windowname1", 'width=800, height=600');

   var pollTimer   =   window.setInterval(function()
   {

       try
       {
           if (win.document.URL.indexOf(REDIRECT) != -1)
           {
               window.clearInterval(pollTimer);
               var url =   win.document.URL;
               acToken =   gup(url, 'access_token');
               tokenType = gup(url, 'token_type');
               expiresIn = gup(url, 'expires_in');
               
               localStorage.setItem('gToken',acToken);
               localStorage.setItem('gTokenType',tokenType);
               localStorage.setItem('gExprireIn',expiresIn);
               function gup(url, name) {
                   name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
                   var regexS = "[\\#&]"+name+"=([^&#]*)";
                   var regex = new RegExp( regexS );
                   var results = regex.exec( url );
                   if( results == null )
                       return "";
                   else
                       return results[1];
               }
               win.close();
           }
       }
       catch(e)
       {
         console.log(e);
       }
   }, 500);
   this.allLabels();
   this.inbox;
   this.sent_items;
 },



 allLabels: function()
 {
     var accessToken = localStorage.getItem('gToken');
   
     $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/yeshwanth1206@gmail.com/labels?key={AIzaSyDNY4Mj3askiSHVgWbHmMBCs_xpH7GLNgI}',      
      dataType: 'json',
      type: 'GET',
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
        console.log('AJAX success'+data);
        console.log(data.labels);
        this.setState({allLabelsData:data.labels});
        loadedData=true;
         console.log(data.labels);
        
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
   });
 },





 inbox: function(labelId)
 {
     var accessToken = localStorage.getItem('gToken');
   
     $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/yeshwanth1206%40gmail.com/messages?labelIds=INBOX&maxResults=10&key={AIzaSyDNY4Mj3askiSHVgWbHmMBCs_xpH7GLNgI}',      
      dataType: 'json',
      type: 'GET',
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(msg)
      {
        var dply_data = msg.messages
        for(var key in dply_data)
        {
          var id = dply_data[key].id;
          this.dply_Inbox_Msg(id);
        }
        this.setState({allMsge:this.state.MsgDetail});
        this.state.MsgDetail=[];
        console.log(id);
      }.bind(this),
        error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
   });

 },



 dply_Inbox_Msg: function(msg_id){
  var accessToken = localStorage.getItem('gToken');
  $.ajax({
   url: 'https://www.googleapis.com/gmail/v1/users/yeshwanth1206%40gmail.com/messages/'+msg_id+'?key={AIzaSyDNY4Mj3askiSHVgWbHmMBCs_xpH7GLNgI}',
   dataType: 'json',
   type: 'GET',
   beforeSend: function (request)
   {
     request.setRequestHeader("Authorization", "Bearer "+accessToken);
   },
   success: function(inbox)
   {
     this.state.MsgDetail.push(inbox);
      this.setState({inbox:inbox.messages});
   }.bind(this),
    async:false,
     error: function(xhr, status, err) {
     console.error(err.toString());
   }.bind(this)

});
},


sent_items: function()
 {
     var accessToken = localStorage.getItem('gToken');
   
     $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/yeshwanth1206%40gmail.com/messages?labelIds=SENT&maxResults=10&key={AIzaSyDNY4Mj3askiSHVgWbHmMBCs_xpH7GLNgI}',      
      dataType: 'json',
      type: 'GET',
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(msg)
      {
        var dply_data = msg.messages
        for(var key in dply_data)
        {
          var id = dply_data[key].id;
          this.dply_Inbox_Msg(id);
        }
        this.setState({sent_allMsge:this.state.sent_MsgDetail});
        this.state.sent_MsgDetail=[];
        console.log(id);
      }.bind(this),
        error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
   });

 },



 sent: function(msg_id){
  var accessToken = localStorage.getItem('gToken');
  $.ajax({
   url: 'https://www.googleapis.com/gmail/v1/users/yeshwanth1206%40gmail.com/messages/'+msg_id+'?key={AIzaSyDNY4Mj3askiSHVgWbHmMBCs_xpH7GLNgI}',
   dataType: 'json',
   type: 'GET',
   beforeSend: function (request)
   {
     request.setRequestHeader("Authorization", "Bearer "+accessToken);
   },
   success: function(sent_items)
   {
     this.state.MsgDetail.push(sent_items);
      this.setState({sent_items:sent_items.messages});
   }.bind(this),
    async:false,
     error: function(xhr, status, err) {
     console.error(err.toString());
   }.bind(this)

});
},




 render:function()
 {
   var leftPanel;
   var rightPanel;
   var rightPanel1;

   if(loadedData){
     leftPanel =  <Component2left allLabelsData={this.state.allLabelsData} submitLabel={this.displayMessageBasedOnLabel}/>
     rightPanel=  <Component3right allMsge={this.state.allMsge}/>
     rightPanel1= <Component4Sent sent_allMsge={this.state.sent_allMsge}/>
     
   }

     return(
       <div className="GmailBox">
           <div className="container-fluid">
             <div className="row">
                 <div className="col-lg-1">
                  <button id="authorize-button" onClick={this.gmailLogin} className="btn btn-primary pull-left">LogIn1234</button>
                  </div>
                  <div className="col-lg-8 pull-right">
                    <h2>ReactMails</h2>
                    <button id="authorize-button" onClick={this.inbox} className="btn btn-primary pull-left">Inbox1236</button>
                    <button id="authorize-button" onClick={this.sent_items} className="btn btn-primary pull-left">Sent12345</button>
                  </div>
              </div>
               <div className="row">
                 <div className="col-lg-4">
                    {leftPanel}
                  </div>
                 <div className="col-lg-8">
                 {rightPanel}
                 {rightPanel1}
                 </div>
               </div>
         </div>
     </div>
     );
 }
 });

module.exports = GmailBox;