import render, { shallowRender } from 'preact-render-to-json';

/**
 * Remove __self and __source from the list of attributes/properties.
 * babel-preset-react adds these for use with the React DevTools
 */
function removeDevAttributes(vnode) {
	if (vnode) {
		if (vnode.children) {
			vnode.children.forEach(n => removeDevAttributes(n));
		}
		if (vnode.props) {
			if (vnode.props.__source) {
				delete vnode.props.__source;
			}
			if (vnode.props.__self) {
				delete vnode.props.__self;
			}
		}
	}
	return vnode;
}

/**
 * Render Preact JSX + Components to an HTML string.
 *
 * @param {VNode} vnode	JSX VNode to render.
 * @param {Object} [context={}]	Optionally pass an initial context object through the render path.
 * @param {Object} [options={}]	Rendering options
 */
global.render = (vnode, context) => removeDevAttributes(render(vnode, context));

global.shallowRender = (vnode, context) => removeDevAttributes(shallowRender(vnode, context));
