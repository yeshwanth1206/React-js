var React=require("react");



var ComposeComponent=React.createClass({
    getInitialState: function()
    {
      return({to:"",subject:"",message:""})
    },
    HandleTo:function(e)
    {
      this.setState({to: e.target.value});
      console.log(to);
    },
    HandleSubject: function(e)
    {
      this.setState({subject: e.target.value});
      console.log(subject);
    },
    HandleMessage: function(e)
    {
      this.setState({message: e.target.value});
      console.log(message);
    },

    composemail: function()
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
       this.setState({to:"",subject:"",message:""});
     }.bind(this),
     async: false,
     error: function(xhr, status, err) {
       console.error("Error.."+err.toString());
     }.bind(this)
    });
    },

    render:function(){
        return(
            <div>
                <a href="#myModal" role="button" className="btn btn-danger btn-lg btn-block" data-toggle="modal">Compose mail</a>

                            <div className="modal fade" id="myModal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">

                                            <h4 className="modal-title">Compose</h4>
                                        </div>
                                        <div className="modal-body">
                                            <form className="form-horizontal">

                                                <div className="form-group">
                                                    <label className="col-lg-2 control-label" for="inputEmail" >To</label>
                                                    <div className="col-lg-10">
                                                        <input className="form-control" id="inputEmail" placeholder="EmailId" type="email" value={this.state.to} onChange={this.HandleTo}/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-lg-2 control-label" for="inputName">Subject</label>
                                                    <div className="col-lg-10">
                                                        <input className="form-control" id="inputName" placeholder="Subject" type="text" value={this.state.subject} onChange={this.HandleSubject} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-lg-2 control-label" for="inputMessage" >Message</label>
                                                    <div className="col-lg-10">
                                                        <textarea className="form-control" id="inputMessage" placeholder="Message" rows="3" value={this.state.message} onChange={this.HandleMessage}></textarea>
                                                        <br/>
                                                        <br/>
                                                        <button className="btn btn-success pull-right" type="submit" onClick={this.composemail} data-dismiss="modal">Send</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-default" data-dismiss="modal" type="button">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

            </div>
        );
    }
});

module.exports=ComposeComponent;