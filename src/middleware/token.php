<?php
require __DIR__ . "../../vendor/autoload.php";
use Firebase\JWT\JWT;
function generateJwtToken($id) {
    // in real production, safely store this information
    $key = 'example-key';
    $issuedAt = time();
    $expirationTime = $issuedAt + 86400;
    // create payload containing user-specific data
    $payload = [
        "user_id" => $id, // user's id
        "iat" => $issuedAt, // issued at (timestamp)
        "exp" => $expirationTime // expiration time (timestamp)
    ];

    // encoding
    $token = JWT::encode($payload, $key, 'HS256');
    return $token;
}
?>