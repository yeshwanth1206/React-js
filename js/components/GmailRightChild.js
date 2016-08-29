var React=require("react");
var ViewModel=require("./ViewModel")
var GmailRightChild = React.createClass({

getInitialState: function()
   {
     return({status:false});
   },
   change1:function(){
   this.setState({status:true});
   console.log("inside function"+ this.state.status);
   },


  render: function() {
     return (

 	  <tr>
         <td >{this.props.msgFrom}</td>
         <td ><a href="#myModal1" data-toggle="modal"  id="modal" onClick={this.change1}>{this.props.msgSubject}</a></td>
         <td >{this.props.msgDate}</td>
       </tr>
       
     );
   }
 });
module.exports=GmailRightChild;
