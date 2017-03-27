var ReactDOM = require('react-dom')
var render = ReactDOM.render

// basic
;(function (node) {
    if (!node) {return}
    require(['./basic.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__basic_node'))

// lead-guide
;(function (node) {
    if (!node) {return}
    require(['./lead-guide.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__lead-guide_node'))
