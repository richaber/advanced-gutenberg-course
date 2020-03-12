const { addFilter } = wp.hooks;

import classnames from 'classnames';

addFilter(
	'blocks.getBlockDefaultClassName',
	'jsforwpadvgb/custom-cover-block-class-name',
	customCoverClassName
);

function customCoverClassName( className, name ) {

	if ( 'core/cover' !== name ) {
		return className;
	}

	return classnames( className, 'my-block-cover' );
}
