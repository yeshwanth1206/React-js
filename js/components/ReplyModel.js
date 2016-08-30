
var React=require('react');

var ReplyModel=React.createClass({
  getInitialState:function()
  {
    return({to:this.props.msgFrom,subject:this.props.msgSubject,message:""});
  },

  handlechange:function(event)
  {
    this.setState({message:event.target.value});
  },
  textstore:function()
  {
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
          data: JSON.stringify({'raw': encodedMessage}),
          beforeSend: function (request)
          {
            request.setRequestHeader("Authorization", "Bearer "+accessToken);
          },
          success: function(data)
          {
            console.log("Success");
          }.bind(this),
          async: false,
          error: function(xhr, status, err) {
            console.error("Error.."+err.toString());
          }.bind(this)
        });
  },
  render: function()
  {
    return(
      <div className="container">
        <div className="modal fade" id="myModalreply" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">close</button>
                <h4 className="modal-title">Modal Header</h4>
              </div>

              <div className="modal-body">

                <form  className="form-horizontal">

                  <div className="form-group">
                    <div className="col-lg-12">
                      To:{this.props.msgFrom}
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-lg-12">
                      Subject:{this.props.msgSubject}
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-lg-12">
                      Message:  <textarea className="form-control" id="Message"  onChange={this.handlechange}  row="20"></textarea>
                    </div>
                  </div>

                  <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.textstore}>Send</button>
                </form>

              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports=ReplyModel;