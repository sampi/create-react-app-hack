import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('can render into snapshots', () => {
	const tree = global.render(<App />);
	expect(tree).toMatchSnapshot();
});

it('can shallow render into snapshots', () => {
	const tree = global.shallowRender(<App />);
	expect(tree).toMatchSnapshot();
});
