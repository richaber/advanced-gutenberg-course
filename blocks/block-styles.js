const { __ } = wp.i18n;
const { registerBlockStyle } = wp.blocks;

import "./style.scss";

registerBlockStyle( 'core/quote', {
	name: "colorful-quote",
	label: __( "Colorful Quote", "jsforwpadvblocks" )
} );

registerBlockStyle("jsforwpadvblocks/shoutout-styles", {
	name: "default",
	label: "Default"
});

registerBlockStyle("jsforwpadvblocks/shoutout-styles", {
	name: "serious",
	label: "Serious"
});

registerBlockStyle("jsforwpadvblocks/shoutout-styles", {
	name: "colorful",
	label: "Colorful"
});
