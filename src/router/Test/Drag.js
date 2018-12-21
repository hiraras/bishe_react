import React, { Component } from 'react';
import Draggable from 'react-draggable';

class Drag extends Component{

    componentDidMount() {
    }


    render() {
        const bounds = {
            left: 0,
            top: 0,
            right: window.innerWidth - 375,
            bottom: window.innerHeight - 150,
        }
        return (
            <div>
                <Draggable
                    axis="both" // both, x, y, none
                    allowAnyClick={true}
                    handle=".handle"
                    defaultPosition={{x: 0, y: 0}}
                    position={null}
                    grid={[1, 1]}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}
                    bounds={bounds}
                >
                    <div style={{ backgroundColor: 'blue', display: 'inline-block', padding: 50 }}>
                        <div className="handle">Drag from here</div>
                        <div>This readme is really dragging on...</div>
                    </div>
                </Draggable>
                <input />
            </div>
        );
    }
}

export default Drag;
