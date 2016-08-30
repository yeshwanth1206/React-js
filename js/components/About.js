var React=require('react');
var About=React.createClass({
  render:function(){
    return(
  <div className="container-fluid">
  <div className="row">
  <div className="col-md-12">
  <h2>About Us</h2>
  {this.props.params.aboutName}
  <p>
  <a className="btn btn-primary btn-large"> About</a>
  </p>
  </div>
  </div>
  </div>
);
}
})
module.exports=About;
