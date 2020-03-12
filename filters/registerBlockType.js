const { __ } = wp.i18n;
const { addFilter } = wp.hooks;

addFilter(
	'blocks.registerBlockType',
	'jsforwp-advgb/extending-register-block-type',
	extendWithRegisterBlockType
)

function extendWithRegisterBlockType( settings, name ) {

	if ( name !== 'core/code' ) {
		return settings;
	}

	console.log( 'settings', settings );
	console.log( 'name', name );

	settings.title = __( 'Code Snippet', 'jsforwpadvblocks' );
	settings.description = __( 'Use for maximum codiness 😀', 'jsforwpadvblocks' );
	settings.category = 'recommended';

	if ( settings.keywords ) {
		settings.keywords.push( __( 'mmmkkkkaaaayyy', 'jsforwpadvblocks' ) )
	} else {
		settings.keywords = [ __( 'mmmkkkkaaaayyy', 'jsforwpadvblocks' ) ];
	}

	settings.supports = Object.assign(
		{},
		settings.supports,
		{
			html: true,
			anchor: true
		}
	);

	settings.attributes.new = {
		type: 'string',
		default: "Default Text"
	};

	// settings.edit = props => <p>OVERRIDE</p>;

	return settings;
}
