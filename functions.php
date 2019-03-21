<?php

require get_template_directory() . '/inc/admin-functions.php';

function rest_vw_settings_data() {
	$phone = esc_attr( get_option( 'phone' ) );
	return array('appointment_phone' => $phone);
}

add_action( 'rest_api_init', function () {
	register_rest_route( 'vw/v1', '/custom-data/', array(
		'methods' => 'GET',
		'callback' => 'rest_vw_settings_data'
	) );
});