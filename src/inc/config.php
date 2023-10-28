<?php /* connection between webpage and database */
$env = parse_ini_file('../../.env');
define('DB_HOST', $env['SERVER_NAME']);
define('DB_DB_NAME', $env['DATABASE_NAME']);
define('DB_USERNAME', $env['USERNAME']);
define('DB_PASSWORD', $env['PASSWORD']);
?>