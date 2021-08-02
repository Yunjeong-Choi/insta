import React from 'react'

class Test extends React.Component {
    // react
    state = {
        list: []
    }

    list = [];

    getList() {
        // getList: function () { ... }
        // React
        return this.state.list
    }
    setList(list) {
        // React
        this.setState(state => state.list = list);
    }

    // ES6 문법
    get list() {
        return this.list;
    }

    set list(list) {
        this.list = list;
    }
}

const test = new Test();

console.log(test.list);
test.list = [1, 2, 3];