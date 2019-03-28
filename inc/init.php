<?php

function vue_wordpress_init() {
	add_theme_support( 'post-thumbnails' );
	add_post_type_support( 'page', 'excerpt' );
}

add_action( 'init', 'vue_wordpress_init' );