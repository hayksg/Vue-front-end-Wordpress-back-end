<?php

function vw_rest_settings_data() {
	$phone = esc_attr( get_option( 'phone' ) );

	return array(
		'appointment_phone' => $phone,
	);
}

function vw_register_rest_route() {
	register_rest_route( 'vw/v1', '/custom-data/', array(
		'methods' => 'GET',
		'callback' => 'vw_rest_settings_data'
	) );
}

add_action( 'rest_api_init', 'vw_register_rest_route' );