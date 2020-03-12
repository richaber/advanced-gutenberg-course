const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment, cloneElement, RawHTML, renderToString } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, ToggleControl } = wp.components;
const { createHigherOrderComponent } = wp.compose;
const { isEmpty } = lodash;

import classnames from 'classnames';
import './style.scss';

function addCodeAttributes( settings, name ) {

	if ( 'core/code' !== name ) {
		return settings;
	}

	settings.supports = lodash.merge( {}, settings.supports, {
		align: [ 'full', 'wide' ]
	} );

	settings.attributes.align = {
		type: 'string',
		default: 'full'
	};

	settings.attributes.highContrast = {
		type: 'boolean',
		default: false
	};

	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'jsforwpadvgb/add-code-attributes',
	addCodeAttributes
);

function addCodeInspectorControls( BlockEdit ) {
	const withInspectorControls = createHigherOrderComponent( BlockEdit => {
		return props => {
			if ( 'core/code' !== props.name ) {
				return <BlockEdit { ...props } />
			}
			return <Fragment>
				<div
					className={ classnames( {
						"high-contrast": props.attributes.highContrast
					} ) }
				>
					<BlockEdit { ...props } />
					<InspectorControls>
						<PanelBody title={ __( 'High Contrast', 'jsforwpadvblocks' ) }>
							<ToggleControl label={ __( 'High Contrast', 'jsforwpadvblocks' ) }
								checked={ props.attributes.highContrast }
								onChange={ highContrast => props.setAttributes( { highContrast } ) }
							/>
						</PanelBody>
					</InspectorControls>
				</div>
			</Fragment>;
		}
	} );
	return withInspectorControls( BlockEdit );
}

addFilter(
	'editor.BlockEdit',
	'jsforwpadvgb/add-code-inspector-controls',
	addCodeInspectorControls
);

function modifyCodeSaveSettings( element, block, attributes ) {

	if ( 'core/code' !== block.name ) {
		return element;
	}

	const {
		highContrast
	} = attributes;

	if ( typeof highContrast !== 'undefined' ) {

		return cloneElement(
			element,
			{
				className: classnames( element.props.className, { 'high-contrast': highContrast } )
			}
		);
	}

	return element;
}

addFilter(
	'blocks.getSaveElement',
	'jsforwpadvgb/modify-code-save-settings',
	modifyCodeSaveSettings
);
