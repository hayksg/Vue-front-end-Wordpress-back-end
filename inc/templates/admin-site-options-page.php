<h1>Website Options</h1>

<?php settings_errors(); ?>  <!-- will print all messages (success and error) -->

<form action="options.php" method="post">
	<?php settings_fields( 'theme-settings-group' ); ?>
	<?php do_settings_sections( 'vw-slug' ); ?>
	<?php submit_button(); ?>
</form>