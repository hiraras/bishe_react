import React, { Component } from 'react';
import md5 from 'md5';

class Test extends Component{

    componentDidMount() {
        this.testMd5('test');
    }

    testMd5 = data => {
        const result = md5(data);
        console.log(result);
    }

    render() {
        return (
            <div>
                111
            </div>
        );
    }
}

export default Test;

