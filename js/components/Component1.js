var React = require('react');
     var ReactDom= require ('react-dom');
     
     var Component1=React.createClass({
        render:function(){
        return(
        <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12" >
                            <nav className="navbar navbar-default" role="navigation" id="navbar_row">
                                <div className="navbar-header">
                                     
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                         <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
                                    </button> <a className="navbar-brand" href="#">Gmail</a>
                                </div>
                                
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    
                                    
                                    <ul className="nav navbar-nav navbar-right">
                                        <li>
                                            <a href="#">About Us</a>
                                        </li>
                                        <li className="dropdown">
                                             <a href="#" className="dropdown-toggle" data-toggle="dropdown">Account<strong className="caret"></strong></a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a href="#">Profile</a>
                                                </li>
                                                <li>
                                                    <a href="#">Setting</a>
                                                </li>
                                                <li>
                                                    <a href="#">Themes Change</a>
                                                </li>
                                                <li className="divider">
                                                </li>
                                                <li>
                                                    <a href="#">Log out</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <form className="navbar-form navbar-left pull-right" role="search">
                                        <div className="form-group">
                                            <input type="text" className="form-control" />
                                        </div> 
                                        <button type="submit" className="btn btn-default">
                                            Search
                                        </button>
                                    </form>
                                </div>



                                
                            </nav>
                        </div>
                    </div>
                </div>
                <h3>I AM CHILD COMPONENT</h3>
                <h1>{this.props.bm}</h1>
            </div>
                         
                                    
            
                                
                        
         
        

        );
    }
 });
     module.exports=Component1

