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
   // change2:function(){
   //  this.setState({status:false});
   // },
   // closeModel={this.change2}



  render: function() {
     return (

 	  <tr>
         <td >{this.props.msgFrom}</td>
         <td ><a href="#myModal1" data-toggle="modal"  id="modal" onClick={this.change1}> {this.props.msgSubject}</a></td>
          {this.state.status?<ViewModel a={this.props.msgFrom} b={this.props.msgSubject} c={this.props.msgDate} d={this.props.encodedBodyToChild} />: null}
         <td >{this.props.msgDate}</td>


       </tr>
       
     );
   }
 });
module.exports=GmailRightChild;
