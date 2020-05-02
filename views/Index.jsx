const React = require('react');
const Default = require('./Default')
class Index extends React.Component {
    render() {
        const { fruits } = this.props;
        return (
            <Default>
            <div>
                <h1>Index Page</h1>
              
            </div>
            </Default>
        )
    }
}

module.exports = Index;