const { addFilter } = wp.hooks;

import classnames from 'classnames';

addFilter(
	'blocks.getSaveContent.extraProps',
	'jsforwpadvgb/get-save-content-extra-props',
	extendWithGetSaveContentExtraProps
);

function extendWithGetSaveContentExtraProps( props ) {

	console.log( 'extendWithGetSaveContentExtraProps props', props );

	if ( 'wp-block-code' !== props.className && 'wp-block-quote' !== props.className ) {
		return props;
	}

	if ( 'wp-block-quote' === props.className && ! props.children[ 1 ] ) {
		return lodash.merge( props, {
			className: classnames( props.className, 'no-citation' )
		} );
	}

	if ( 'wp-block-code' === props.className ) {
		return lodash.merge( props, {
			style: {
				backgroundColor: 'black',
				color: 'white'
			}
		} );
	}

	return props;
}
