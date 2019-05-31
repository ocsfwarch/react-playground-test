import React from 'react';
import ReactDOM from 'react-dom';
import Renderer from 'react-test-renderer';
import Messages from './Messages';

describe("Messages Component Test Suite", () => {
    // General Smoke Test
    it('Messages renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Messages name="Messages" unread={4} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // Snapshot test with unread > 0
    it('Messages renders the UI as expected', () => {
        const tree = Renderer
        .create(<Messages name="Messages" unread={4} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Snapshot test with unread = 0
    it('Messages renders the UI as expected with zero unreads', () => {
        const tree = Renderer
        .create(<Messages name="Messages" unread={0} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
