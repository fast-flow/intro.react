import { PropTypes } from "react"
import extend from "extend"
var example = function () {return arguments;}

export default function (component) {
    extend(true, component, {
        defaultProps: {
            show:false,
            target() {
                return window;
            },
            className:'',
            prefixClassName:'r-intro',
        },
        propTypes: {
            prefixClassName:PropTypes.string,
            className:PropTypes.string,
            width:PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]),
            height:PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]),
            target:PropTypes.func.isRequired,
            // children:PropTypes.oneOfType([
            //     PropTypes.node,
            //     PropTypes.element,
            // ]).isRequired,
            show:PropTypes.bool,
        },
        propExample: {
            show: example(
                true,
                false
            ),
            align: example(
                {points:['tr','bl']},{points:['tr','bc']},{points:['tr','br']},
                {points:['tc','bl']},{points:['tc','bc']},{points:['tc','br']},
                {points:['tl','bl']},{points:['tl','bc']},{points:['tl','br']},

                {points:['cr','bl']},{points:['cr','bc']},{points:['cr','br']},
                {points:['cc','bl']},{points:['cc','bc']},{points:['cc','br']},
                {points:['cl','bl']},{points:['cl','bc']},{points:['cl','br']},

                {points:['br','bl']},{points:['br','bc']},{points:['br','br']},
                {points:['bc','bl']},{points:['bc','bc']},{points:['bc','br']},
                {points:['bl','bl']},{points:['bl','bc']},{points:['bl','br']}
            )
        }
    })
}
