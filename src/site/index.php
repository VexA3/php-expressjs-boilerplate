
<?php

// If the keycloak key is missing. Show the login page.
if(empty($_COOKIE['kc_key'])) {
    // Everything sits in the login page.
    include("/var/www/html/Views/login.php");
} else {
    include("/var/www/html/Views/header.php");

    include("/var/www/html/Views/footer.php");
} 
?>
</html>