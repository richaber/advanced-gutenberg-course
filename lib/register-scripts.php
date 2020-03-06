<?php

namespace Adv_Gutenberg_Courses\Example_Blocks;

class RegisterScripts {

	static $js_dependencies = [
		'wp-plugins',
		'wp-element',
		'wp-edit-post',
		'wp-i18n',
		'wp-api-request',
		'wp-data',
		'wp-components',
		'wp-blocks',
		'wp-editor',
		'wp-compose',
	];

	/**
	 * Enqueue block editor only JavaScript and CSS.
	 */
	public static function register_block_assets() {

		// Make paths variables so we don't write em twice ;)
		$editor_js_path = '/assets/js/blocks.editor.js';
		$editor_style_path = '/assets/css/blocks.editor.css';
		$style_path = '/assets/css/blocks.style.css';
		/**
		 * Enqueue block frontend JS & CSS
		 */
		function frontend_assets() {

			$frontend_js_path = "/assets/js/blocks.frontend.js";

			wp_enqueue_script(
				"jsforwp-adv-gb-frontend-js",
				_get_plugin_url() . $frontend_js_path,
				[ 'wp-element' ],
				filemtime( _get_plugin_directory() . $frontend_js_path ),
				true
			);
		}

		// Register the bundled block JS file
		wp_register_script(
			'jsforwp-adv-gb-editor-js',
			_get_plugin_url() . $editor_js_path,
			self::$js_dependencies,
			filemtime( _get_plugin_directory() . $editor_js_path ),
			true
		);

		// Register editor only styles
		wp_register_style(
			'jsforwp-adv-gb-editor-css',
			_get_plugin_url() . $editor_style_path,
			[],
			filemtime( _get_plugin_directory() . $editor_style_path )
		);

		// Register shared editor and frontend styles
		wp_register_style(
			'jsforwp-adv-gb-css',
			_get_plugin_url() . $style_path,
			[],
			filemtime( _get_plugin_directory() . $style_path )
		);

	}

	/**
	 * Enqueue block frontend JS & CSS
	 */
	public static function frontend_assets() {

		$frontend_js_path = "/assets/js/blocks.frontend.js";

		wp_enqueue_script(
			"jsforwp-adv-gb-frontend-js",
			_get_plugin_url() . $frontend_js_path,
			[ 'wp-element' ],
			filemtime( _get_plugin_directory() . $frontend_js_path ),
			true
		);
	}

	/**
	 * Enqueue block frontend JS & CSS
	 */
	public static function plugin_assets() {

		$plugin_js_path = "/assets/js/plugins.editor.js";

		wp_enqueue_script(
			"jsforwp-adv-gb-plugin-js",
			_get_plugin_url() . $plugin_js_path,
			self::$js_dependencies,
			filemtime( _get_plugin_directory() . $plugin_js_path ),
			true
		);
	}
}

add_action( 'init', __NAMESPACE__ . '\RegisterScripts::register_block_assets' );

add_action( "wp_enqueue_scripts", __NAMESPACE__ . '\RegisterScripts::frontend_assets' );

add_action( "enqueue_block_editor_assets", __NAMESPACE__ . '\RegisterScripts::plugin_assets' );
