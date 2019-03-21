<?php

function theme_add_admin_page() {

	// Generate New Admin Page
	add_menu_page(
		'Theme Options',                // page_title
		'Site Data',                 // menu_title
		'manage_options',               // capability
		'vw-slug',                      // menu_slug
		'theme_create_admin_page',         // function
		'dashicons-welcome-write-blog', // icon_url
		110                             // position
	);

	add_action( 'admin_init', 'theme_custom_settings' );
}

add_action( 'admin_menu', 'theme_add_admin_page' );

function theme_create_admin_page() {
	require_once( get_template_directory() . '/inc/templates/admin-site-options-page.php' );
}

function theme_custom_settings() {
	register_setting(
		'theme-settings-group', // option_group
		'phone'                 // option_name
	);

	add_settings_section(
		'theme-main-options', // id
		'Main Data',          // title
		'theme_main_options', // callback
		'vw-slug'             // page - parent_slug from admin submenu page
	);

	add_settings_field(
		'site-phone',         // id
		'Appointment Phone:', // title
		'theme_main_phone',   // callback
		'vw-slug',            // page - parent_slug from admin submenu page
		'theme-main-options'  // section
	);

}

function theme_main_options() {
	echo 'Customize your Website main Information';
}

function theme_main_phone() {
	$phone = esc_attr( get_option( 'phone' ) );
	echo '<input type="text" name="phone" value="' . $phone . '">';
}
