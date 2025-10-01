<?php
// Desactivar wpautop solo en páginas específicas
function disable_wpautop_for_pages() {
    if (is_page(array('documentacion', 'investigacion','home','proyectos','consejo_investigacion'))) {
        remove_filter('the_content', 'wpautop');
    }
}
add_action('wp', 'disable_wpautop_for_pages');
// Cargar CSS y JS del tema Astrobased
 function deactive_wp_styles() {
  wp_dequeue_style('wp-block-library'); // desactiva estilos de Gutenberg
  wp_dequeue_style('classic-theme-styles');
}
function astrobased_assets() {
    wp_enqueue_style('astrobased-style', get_stylesheet_uri());
    wp_enqueue_style('astrobased-main', get_template_directory_uri() . '/assets/css/main.css');
    wp_enqueue_script('astrobased-js', get_template_directory_uri() . '/assets/js/main.js', [], false, true);
}
add_action('wp_enqueue_scripts', 'astrobased_assets',' deactive_wp_styles');

// Registrar menús del tema Astrobased
function astrobased_menus() {
    register_nav_menus([
        'menu-principal' => __('Menú Principal', 'astrobased'),
    ]);
}
add_action('after_setup_theme', 'astrobased_menus');
function agregar_font_awesome() {
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
}
add_action('wp_enqueue_scripts', 'agregar_font_awesome');