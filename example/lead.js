var React = require('react')
var Intro = require('intro.react').default

// 初始判断显示第几个,遍历全部是否显示 全部显示false
// 初始所有introId队列需要保存

var Lead = React.createClass({
	 getInitialState: function () {
        return {
            list:this.props.lists,
        	step:0 ,
            neverShow:false,
        }
	},
	getDefaultProps: function () {
	    return {
			lists:[],
			show:true,
	    };
	},
	propTypes: {
		show:React.PropTypes.bool,
		lists:React.PropTypes.array,
		width:React.PropTypes.string,
		height:React.PropTypes.string,
	},
    ms(action) {
        let state = this.state
        switch(action.type) {
            case 'CHANGE_LEAD':
                for(let key in action.data){
                    state[key] = action.data[key]
                }
            break
            default:
                throw new Error('Not match: ' + action.type)
        }
        this.setState(state)
    },
    render() {
    	let  self = this
        return (
        	<Intro 
                show={self.state.step === false || self.props.show === false ? false : true}
                target={function(){
                    let ele = self.state.step === false ? self.props.lists[0].id : self.props.lists[self.state.step].id 
                    return document.getElementById(ele)
                }}
                width={self.props.width ? self.props.width : ''}
                height={self.props.height ? self.props.height : ''}
                align={
                    self.state.step === false
                    ? {points:['cc','cc']}
                    : {
                        points:self.props.lists[self.state.step].points
                    }
                } 
                children={(
                    <div className="lead-dialog">
                        <div className="lead-dialog-box">
                            <div className="lead-dialog-box-title">
	                            {self.state.step === false ? self.props.lists[0].title : self.props.lists[self.state.step].title }
                            </div>
                            <div className="lead-dialog-box-cnt">
	                            {self.state.step === false ? self.props.lists[0].cnt : self.props.lists[self.state.step].cnt }
                            </div>
                            <div className="lead-dialog-box-tool">
                                <div>
                                    {
                                        self.state.step < self.props.lists.length - 1
                                        ? (
                                            <button		onClick={function(){
		                                                    self.ms({
		                                                        type:'CHANGE_LEAD',
		                                                        data:{
		                                                            step: self.state.step + 1 == self.props.lists.length ? false : self.state.step + 1 ,
		                                                        }
		                                                    })
		                                                }}
                                            >下一步</button>
                                        ) : null
                                    }
                                    <button		onClick={function(){
		                                            self.ms({
		                                                type:'CHANGE_LEAD',
		                                                data:{
		                                                    step:false ,
		                                                }
		                                            })
		                                        }}
                                    >关闭</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            />
        )
    }
})

module.exports = Lead