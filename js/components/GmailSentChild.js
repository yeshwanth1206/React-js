var React=require("react");
var GmailSentChild = React.createClass({
  render: function() {
     return (

       <tr>
         <td>{this.props.msgFrom}</td>
         <td>{this.props.msgReceived}</td>
         <td>{this.props.mgsDate}</td>
       </tr>
       
     );
   }
 });
module.exports=GmailSentChild;
