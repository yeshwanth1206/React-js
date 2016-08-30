var React=require('react');
<<<<<<< HEAD
var ReplyModel=require("./ReplyModel")
=======
>>>>>>> 4dd0e4bf86a1abe9574dc5ceca87a471b1534fb4

var ViewModel=React.createClass({
  appendToIframe: function(message)
  {
   var iFrameNode = this.refs.myIframe,
   frameDoc = iFrameNode.contentWindow.document;
   frameDoc.write(message);
  },
 getInitialState: function() {
   return { modalIsOpen: false,to: '', subject: '',messagebody: '' };
 },
 openModal: function() {
   this.setState({modalIsOpen: true});
 },
 closeModal: function() {
   this.setState({modalIsOpen: false});
 },
 handleModalCloseRequest: function() {
   // opportunity to validate something and keep the modal open even if it
   // requested to be closed
   this.setState({modalIsOpen: false});
 },
 handleSaveClicked: function() {
   var accessToken = localStorage.getItem('gToken');
   console.log("Access token: "+accessToken);
   var email = '';
   var Headers = {'To': this.state.to,'Subject': this.state.subject};
   for(var header in Headers)
   {
     email += header += ": "+Headers[header]+"\r\n";
     console.log("email---"+email);
     console.log("header---"+header);
     console.log("Headers[header]---"+Headers[header]);
 }
<<<<<<< HEAD
   email += "\r\n" + this.state.messagebody;
   console.log("constructed email: " +email);
   var encodedMessage =  window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_');
   $.ajax({
    url: 'https://www.googleapis.com/gmail/v1/users/yeshwanth1206%40gmail.com/messages/send?key={AIzaSyDNY4Mj3askiSHVgWbHmMBCs_xpH7GLNgI}',
=======
   email += "\r\n" + this.state.message;
   console.log("constructed email: " +email);
   var encodedMessage =  window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_');
   $.ajax({
    url: 'https://www.googleapis.com/gmail/v1/users/me/messages/send?key={AIzaSyDNY4Mj3askiSHVgWbHmMBCs_xpH7GLNgI}',
>>>>>>> 4dd0e4bf86a1abe9574dc5ceca87a471b1534fb4
    dataType: 'json',
    contentType: "application/json",
    type: 'POST',
    data: JSON.stringify({'raw' : encodedMessage}),
    beforeSend: function (request)
    {
      request.setRequestHeader("Authorization", "Bearer "+accessToken);
    },
    success: function(data)
    {
      console.log("success enters");
      alert("Mail Sent");
      this.setState({modalIsOpen: false,to: '', subject: '',messagebody: ''});
    }.bind(this),
    async: false,
    error: function(xhr, status, err) {
      console.error(err.toString());
    }.bind(this)
 });
 },
 handleToChange: function(e) {
     this.setState({to: e.target.value});
   },
   handleSubjectChange: function(e) {
     this.setState({subject: e.target.value});
   },
   handleMessagebodyChange: function(e) {
     this.setState({messagebody: e.target.value});
   },
<<<<<<< HEAD
   change:function()
  {
    console.log("onclick of reply");
    this.setState({status:true});
    console.log(this.state.status);
  },



  render:function(){
  return(
    <div>
    
=======
  render:function(){
  return(
    <div>
>>>>>>> 4dd0e4bf86a1abe9574dc5ceca87a471b1534fb4
    <div className="modal fade" id="myModal1">
    <div className="modal-dialog">
    <div className="modal-content">
    <div className="modal-header">
      <input className="form-control" id="subject" type="text" value={this.props.b} onChange={this.handleToChange}></input>
<<<<<<< HEAD
      <button className="close"  data-dismiss="modal">X</button>
      
=======
      <button className="close" data-dismiss="modal">X</button>
>>>>>>> 4dd0e4bf86a1abe9574dc5ceca87a471b1534fb4
    </div>
      <div className="modal-body">
        <form  className="form-horizontal">
          <div className="form-group">
            <div className="col-lg-12">
              <input className="form-control" id="from" type="email" value={this.props.a} onChange={this.handleToChange}></input>
<<<<<<< HEAD
              <button className="btn btn-warning" type="button" data-target="#myModalreply" data-toggle="modal"  onClick={this.change}>Reply</button>
              {this.state.status?<ReplyModel msgFrom={this.props.msgFrom} msgSubject={this.props.msgSubject} />:null}
             
            </div>
          </div>
          <iframe id="iframe-message" ref="myIframe" width="100%" height="100%">
=======
              <button className="btn btn-link pull-right" onClick={this.modalIsOpen}>Reply</button>
             
            </div>
          </div>
          <iframe id="iframe-message" ref="myIframe" width="700px" height="400px">
>>>>>>> 4dd0e4bf86a1abe9574dc5ceca87a471b1534fb4
              </iframe>
        </form>
      </div>
      </div>
    </div>
    </div>
  </div>
  );
},
componentDidMount: function(){
var encodedBody = this.props.d;
encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
encodedBody = decodeURIComponent(escape(window.atob(encodedBody)));
console.log(encodedBody);
this.appendToIframe(encodedBody);
},
});
module.exports=ViewModel