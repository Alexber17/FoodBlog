const React = require('react');
const Default = require('./Default')
var moment = require('moment');

class Show extends React.Component {
    render() {
        // const name = this.props.fruit.name;
        // const color = this.props.fruit.color;
        // const readyToEat = this.props.fruit.readyToEat;
        // destructuring
        const { recipe } = this.props;
        let spl=recipe.ingredients.split(',')
        
        return (
            <Default>
          
            <div class="container">

                <div class="row">

                    
                    <div class="col-lg-8">

                            
                            <h1 class="mt-4">{recipe.name}</h1>

                            
                            <p class="lead">
                            by
                            <a href="#"> Alexander Bermudez</a>
                            </p>

                            <hr/>

                        
                            <p>Posted on {moment(recipe.createdAt).format('MMMM Do YYYY, h:mm a')}</p>

                            <hr/>

                            
                            <img class="img-fluid rounded" src={recipe.img} alt=""/>

                            <hr/>

                            <h4>Ingredients</h4>
                            <ul class="list-group list-group-flush">

                            {spl.map((ingredients, i)=>{
                                    return  (
                                        
                                        <li class="list-group-item">{ingredients}</li>
                                    )
                                })
                            }
                            </ul>
                            
                            <h4>How to Make It</h4>
                            <p class="lead text-justify">{recipe.directions}</p>

                            <hr/>

                            
                                <div class="card my-4">
                                    <h5 class="card-header">Leave a Comment:</h5>
                                        <div class="card-body">
                                            <form>
                                            <div class="form-group">
                                                <textarea class="form-control" rows="3"></textarea>
                                            </div>
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                            </form>
                                        </div>
                                </div>
                         </div>

                         <div class="col-md-4">
                        
                            <div class="card my-4">
                            <h5 class="card-header">Modify menu</h5>
                            <div class="card-body">

                            <div class="col-lg-6">
                                <ul class="list-unstyled mb-0">
                                <li>
                                    <a class="btn btn-link" href={`/FBlog/${recipe._id}/edit`}>Edit</a>
                                </li>
                                <li>
                                <a class="btn btn-link" href='' data-toggle="modal" data-target="#myModal">Delete</a>
                                <div class="modal" id="myModal">
                                    <div class="modal-dialog">
                                        <div class="modal-content">

                                        <div class="modal-header">
                                            <h4 class="modal-title">Modal Heading</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>

                                        <div class="modal-body">
                                        Are you sure to delete?
                                        </div>

                                        <div class="modal-footer">
                                        <form action={`/FBlog/${recipe._id}?_method=DELETE`} method="POST">
                                            <input  type="submit" value="Yes" class="btn btn-link" ></input  >
                                         </form>
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">No</button>
                                        </div>

                                        </div>
                                    </div>
                                    </div>

                                    
                                {/*  */}
                                </li>
            
                                </ul>
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

module.exports = Show;