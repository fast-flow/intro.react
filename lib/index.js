import "./index.css"
import Body from "body.react"
import { Component } from "react"
import util from "util.react"
import Align from 'rc-align';//ver: 2.3.3
import assign from 'object-assign';
import $ from 'jquery';
import props from "./props"
import classNames from "classnames"

class Intro extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    resizeWH = () => {
        let self = this
        // console.log('---')
        let oldWidth = $('html').width()
        let oldHeight = $(document).height()
        setTimeout(function(){
            if(oldWidth != $('html').width() || oldHeight != $(document).height()){
                // console.log('改变了 '+oldWidth+' -> '+$('html').width()+' , '+oldHeight+' -> '+$(document).height())
                self.forceUpdate()
            }
        },500)
    }
    componentWillReceiveProps(nextprops) {
        let self = this
        let resizeWH = self.resizeWH

        if(nextprops.show){
            $(window).bind('resize',resizeWH);
        }else{
            $(window).unbind('resize',resizeWH)
        }

    }
    componentDidMount() {
        let self = this
        // 高宽获取不准, 重新刷新
        self.forceUpdate()
    }
    render () {
        var self = this
        let width = 0
        let height = 0
        // 高宽props优先,没有自取目标高宽
        if(parseInt(self.props.width) >= 0){
            width = self.props.width
        }else{
            if(self.props.target()){
                width = self.props.target().clientWidth
            }
        }
        if(parseInt(self.props.height) >= 0){
            height = self.props.height
        }else{
            if(self.props.target()){
                height = self.props.target().clientHeight
            }
        }
        return (
            <Body>
                <div className={classNames({
                        'r-intro-hide': !self.props.show,
                        [`${self.props.prefixClassName}`+' '+`${self.props.className}`]:true,
                    })}
                    style={{
                        width: $('html').width(),
                        height: $(document).height(),
                    }}
                >
                    <Align
                        target={self.props.target}
                        monitorWindowResize={self.props.monitorWindowResize}
                        align={{points: ['cc', 'cc']}}
                    >
                        <div
                            className={`${self.props.prefixClassName}`+'-mark'}
                            style={{
                                width: width +'px',
                                height: height +'px',
                            }}
                        >
                        </div>
                    </Align>
                    <Align
                        target={self.props.target}
                        monitorWindowResize={true}
                        align={self.props.align}
                    >
                        {self.props.children}
                    </Align>
                </div>
            </Body>
        )
    }
}
props(Intro)
export default Intro
