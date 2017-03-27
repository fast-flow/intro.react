var React = require('react')
var Intro = require('intro.react').default
var App = React.createClass({
    getInitialState: function () {
        return {
            show: false,
            points_target_fisrt:'t',
            points_target_second:'l',
            points_source_fisrt:'t',
            points_source_second:'l'
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                <div    id="target"
                        style={{
                            width: 50+'px',
                            height:  50+'px',
                            background: 'yellow',
                        }}
                >target</div>
                <Intro  show={self.state.show}
                        align={{
                            points:[self.state.points_target_fisrt + self.state.points_target_second , self.state.points_source_fisrt + self.state.points_source_second ]
                        }}
                        target={function(){
                            return document.getElementById('target')
                        }}
                        children={( <div    style={{
                                                width:150+'px',
                                                height:150+'px',
                                                background:'green',
                                            }}
                                    >source</div>
                        )}
                />
                target:
                <select onChange={function(e){
                            self.setState({
                                points_target_fisrt:e.target.value
                            })
                        }}
                >
                    <option>t</option>
                    <option>c</option>
                    <option>b</option>
                </select>
                <select onChange={function(e){
                            self.setState({
                                points_target_second:e.target.value
                            })
                        }}
                >
                    <option>l</option>
                    <option>c</option>
                    <option>r</option>
                </select>
                source:
                <select onChange={function(e){
                            self.setState({
                                points_source_fisrt:e.target.value
                            })
                        }}
                >
                    <option>t</option>
                    <option>c</option>
                    <option>b</option>
                </select>
                <select onChange={function(e){
                            self.setState({
                                points_source_second:e.target.value
                            })
                        }}
                >
                    <option>l</option>
                    <option>c</option>
                    <option>r</option>
                </select>
                <button onClick={function(){
                            self.setState({
                                show:true
                            })
                        }}
                >click show</button>
            </div>
        )
    }
})
module.exports = App
