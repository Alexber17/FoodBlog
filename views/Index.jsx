const React = require('react');
const Default = require('./Default')

class Index extends React.Component {
    render() {
        const { recipes } = this.props;
        return (
            <Default>
            <div>
                <h1>Index Page</h1>
                <ul>
                    {
                        recipes.map((recipe, i)=>{
                            return(
                                <h3>{recipe.name}</h3>
                            )
                        
                        })
                    }

                </ul>
              
            </div>
            </Default>
        )
    }
}

module.exports = Index;