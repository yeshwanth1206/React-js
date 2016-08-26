var React=require("react");
var GmailRightChild = React.createClass({
  render: function() {
     return (

       <tr>
         <td>{this.props.msgFrom}</td>
         <td>{this.props.msgSubject}</td>
         <td>{this.props.msgDate}</td>
       </tr>
       
     );
   }
 });
module.exports=GmailRightChild;
