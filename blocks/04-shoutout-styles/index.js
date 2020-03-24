const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;

import "./style.scss";

export default registerBlockType( 'jsforwpadvblocks/shoutout-styles', {
	title: __( 'Shoutout', 'jsforwpadvblocks' ),
	description: __( 'Example shipping stles', 'jsforwpadvblocks' ),
	category: 'jsforwpadvblocks',
	icon: 'megaphone',
	keywords: [
		__( 'Call to action', 'jsforwpadvblocks' ),
	],
	attributes: {
		headline: {
			type: 'string',
		},
		text: {
			type: 'html'
		}
	},
	edit: props => {
		const {
			attributes: { headline, text },
			className,
			setAttributes
		} = props;
		return (
			<div className={className}>
				<RichText
					value={headline}
					tagName={'h2'}
					placeholder={"Headline"}
					onChange={headline => setAttributes( {headline })}
				/>
				<RichText
					value={text}
					tagName={'div'}
					placeholder={"Shoutout Text"}
					onChange={text => setAttributes( {text })}
				/>
			</div>
		)
	},
	save: props => {
		const { headline, text } = props.attributes;
		return (
			<div>
				<RichText.Content
					value={headline}
					tagName='h2'
				/>
				<RichText.Content
					value={text}
					tagName='div'
				/>
			</div>
		)
	}
} );
