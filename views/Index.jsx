const React = require('react');
const Default = require('./Default')
var moment = require('moment');

class Index extends React.Component {
    render() {
        const { recipes } = this.props;
        return (
            <Default>
          <div class="container">

            <div class="row">
            
                <h1>Index Page</h1>
                <ul>
                    {
                        recipes.map((recipe, i)=>{
                            return(
                             
    
                                
                            <div class="col-md-8">

                                <div class="card mb-4">
                                    <img class="card-img-top" src={recipe.img}  class="img-fluid"  alt="Card image cap"/>
                                    <div class="card-body">
                                        <h2 class="card-title">{recipe.name}</h2>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                                        <a href="#" class="btn btn-primary">Read More &rarr;</a>
                                    </div>
                                    <div class="card-footer text-muted">
                                        Posted on {moment(recipe.createdAt).format('MMMM Do YYYY, h:mm a')}
                                        
                                    </div>
                                    <form action={`/FBlog/${recipe._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                </div>
                               </div>
                            )
                        
                        })
                    }

                </ul>
              
            </div>
            </div>
            </Default>
        )
    }
}

module.exports = Index;