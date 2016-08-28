var React=require("react");
var GmailRightChild = React.createClass({
  render: function() {
     return (

 	  <tr>
         <td className="view-message">{this.props.msgFrom}</td>
         <td className="view-message">{this.props.msgSubject}</td>
         <td className="view-message">{this.props.msgDate}</td>
       </tr>
       
     );
   }
 });
module.exports=GmailRightChild;
