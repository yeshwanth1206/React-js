var React=require('react');

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
   email += "\r\n" + this.state.message;
   console.log("constructed email: " +email);
   var encodedMessage =  window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_');
   $.ajax({
    url: 'https://www.googleapis.com/gmail/v1/users/me/messages/send?key={AIzaSyDNY4Mj3askiSHVgWbHmMBCs_xpH7GLNgI}',
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
  render:function(){
  return(
    <div>
    <div className="modal fade" id="myModal1">
    <div className="modal-dialog">
    <div className="modal-content">
    <div className="modal-header">
      <input className="form-control" id="subject" type="text" value={this.props.b} onChange={this.handleToChange}></input>
      <button className="close" data-dismiss="modal">X</button>
    </div>
      <div className="modal-body">
        <form  className="form-horizontal">
          <div className="form-group">
            <div className="col-lg-12">
              <input className="form-control" id="from" type="email" value={this.props.a} onChange={this.handleToChange}></input>
              <button className="btn btn-link pull-right" onClick={this.modalIsOpen}>Reply</button>
             
            </div>
          </div>
          <iframe id="iframe-message" ref="myIframe" width="700px" height="400px">
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