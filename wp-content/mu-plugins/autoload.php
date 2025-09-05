<?php
/**
 * Plugin Name: Composer Autoloader
 *
 * @package project-name
 */

// require autoloader.php
if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once __DIR__ . '/vendor/autoload.php';
}
