const React = require('react');

class Default extends React.Component{
    render(){
        return(
                <html>
                    <head>
                    <link rel="stylesheet" href="/normalize.css"/>   
                    <link rel="stylesheet" href="/skeleton.css"/>
                    <link rel="stylesheet" href="/app.css"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"/>
                     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"/>
                    
                     
                        
                        <title>Store</title>
                    </head>

                    <body>
                    <nav class="navbar navbar-default">
                        <div class="container-fluid">
                            <div class="navbar-header">
                            <a class="navbar-brand" href="/store/">GA Store</a>
                            </div>
                            <ul class="nav navbar-nav">
                            <li class="active"><a href="/store/">Home</a></li>
                            <li><a href="/store/new">Add product</a></li>
             
                            </ul>
                        </div>
                    </nav>
                        
                       
                    </body>
                </html>
        )
    }
}

module.exports = Default;
