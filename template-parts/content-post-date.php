<?php
/**
 * Template part for displaying single post date.
 *
 * @package txakolina
 */

?>
    
<?php if ( 'post' === get_post_type() ) : ?>
	<div class="entry-meta">
		<?php txakolina_single_posted_on(); ?>
	</div><!-- .entry-meta -->
<?php endif; ?>
