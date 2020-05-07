const React = require('../node_modules/react');
const Default = require('./Default')
var moment = require('../node_modules/moment/ts3.1-typings/moment');

class Index extends React.Component {
    render() {
        const { recipes } = this.props;
        return (
            <Default>
          <div class="container">

            <div class="row">
            <div class="col-md-8">
                <h1>Index Page</h1>
                <ul>
                    {
                        recipes.map((recipe, i)=>{
                            return(
                 
                                <div class="card mb-4">
                                    <img class="card-img-top" src={recipe.img}  class="img-fluid rounded"  alt="Card image cap"/>
                                    <div class="card-body">
                                        <h2 class="card-title">{recipe.name}</h2>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                                        <a href={`/FBlog/${recipe._id}`} class="btn btn-primary">Read More &rarr;</a>
                                    </div>
                                    <div class="card-footer text-muted">
                                        Posted on {moment(recipe.createdAt).format('MMMM Do YYYY, h:mm a')}
                                        
                                    </div>

                                </div>
                               
                            )
                        
                        })
                    }

                </ul>
                </div>
                <div class="col-md-4">

                
                <div class="card my-4">
                    <h5 class="card-header">Search</h5>
                    <div class="card-body">
                        <div class="input-group">
                         <input type="text" class="form-control" placeholder="Search for..."/>
                          <span class="input-group-btn">
                             <button class="btn btn-secondary" type="button">Go!</button>
                        </span>
                    </div>
                </div>
                </div>
              </div>
            </div>
            </div>
            </Default>
        )
    }
}

module.exports = Index;