var React = require('react')
var Intro = require('intro.react').default
var Lead = require('./lead')
var App = React.createClass({
    getInitialState: function () {
        return {
            lists:[
                {
                    id:"js-m-lead-demo-1",
                    title:'第一步',
                    cnt:'1.xxxxxxx',
                    points:['tl','br'],
                },
                {
                    id:"js-m-lead-demo-2",
                    title:'第二步',
                    cnt:'2.xxxxxxxxx',
                    points:['tl','br'],
                }
            ]
        }
    },
	// 如果数据变动 建议在dom渲染前完成
	componentWillMount(){
		let  self = this
		setTimeout(function(){
			self.setState({
				lists :  self.state.lists.concat([
					{
	                    id:"js-m-lead-demo-3",
	                    title:'第三步',
	                    cnt:'4.xxxxxxxx',
	                    points:['tl','br'],
	                }
				])
			})
		},5000)
	},
    render: function () {
        var self = this
        return (
        	<div>
	        	<Lead 
		        	lists={self.state.lists}
	        	/>
	        	<div className="demo" id="js-m-lead-demo-1">1111</div>
	        	<div className="demo" id="js-m-lead-demo-2">2222</div>
	        	<div className="demo" id="js-m-lead-demo-3">3333</div>
        	</div>
        )
    }
})
module.exports = App
