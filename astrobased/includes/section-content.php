<?php 
// Esto imprime el contenido de las páginas o entradas
if ( have_posts() ) : 
    while ( have_posts() ) : the_post(); 
        the_content(); 
    endwhile; 
else : 
    echo '<p>No content found</p>';
endif; 
?>
