const React = require('react');
const Default = require('./Default')
class New extends React.Component {
    render() {
      return (
        <Default>
          <div>
              <h1>New Recipe</h1>
              <form action="/FBlog" method="POST">
                  Name: <input type="text" name="name" /><br/>
                  Ingredients: <input type="text" name="ingredients" /><br/>
                  Directions: <input type="text" name="directions" /><br/>
                  Video: <input type="text" name="video" /><br/>
                  
                  <input type="submit" name="" value="Add Recipes"/>
               </form>
          </div>
          </Default>
          );
          
    }
  }
  
  module.exports = New;