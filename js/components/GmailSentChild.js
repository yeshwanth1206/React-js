var React=require("react");
var GmailSentChild = React.createClass({
  render: function() {
     return (

       <tr>
         <td>{this.props.msgFrom}</td>
          <td>{this.props.msgDate}</td>
       </tr>
       
     );
   }
 });
module.exports=GmailSentChild;
