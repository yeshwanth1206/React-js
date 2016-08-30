var React=require("react");
var ViewModel=require("./ViewModel")
var GmailRightChild = React.createClass({
<<<<<<< HEAD
  getInitialState: function()
=======

getInitialState: function()
>>>>>>> 4dd0e4bf86a1abe9574dc5ceca87a471b1534fb4
   {
     return({status:false});
   },
   change1:function(){
   this.setState({status:true});
   console.log("inside function"+ this.state.status);
   },
<<<<<<< HEAD
   // change2:function(){
   //  this.setState({status:false});
   // },
   // closeModel={this.change2}

=======
>>>>>>> 4dd0e4bf86a1abe9574dc5ceca87a471b1534fb4


  render: function() {
     return (

 	  <tr>
         <td >{this.props.msgFrom}</td>
<<<<<<< HEAD
         <td ><a href="#myModal1" data-toggle="modal"  id="modal" onClick={this.change1}> {this.props.msgSubject}</a></td>
          {this.state.status?<ViewModel a={this.props.msgFrom} b={this.props.msgSubject} c={this.props.msgDate} d={this.props.encodedBodyToChild} />: null}
         <td >{this.props.msgDate}</td>


=======
         <td ><a href="#myModal1" data-toggle="modal"  id="modal" onClick={this.change1}>{this.props.msgSubject}</a></td>
         <td >{this.props.msgDate}</td>
>>>>>>> 4dd0e4bf86a1abe9574dc5ceca87a471b1534fb4
       </tr>
       
     );
   }
 });
module.exports=GmailRightChild;
