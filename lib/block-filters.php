<?php

namespace Adv_Gutenberg_Courses\Block_Filters;

/**
 * Filters the content of a single block.
 *
 * @param string $block_content The block content about to be appended.
 * @param array  $block         The full block, including name and attributes.
 */
function block_filters( $block_content, $block ) {

	if ( 'core/quote' !== $block['blockName'] ) {
		return $block_content;
	}

	return sprintf(
		'%1$s%2$s%3$s',
		'<div class="myContainer">',
		$block_content,
		'</div>'
	);
}

// add_filter( 'render_block', __NAMESPACE__ . '\block_filters', 10, 2 );
