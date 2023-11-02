<?php
require __DIR__ . "../../vendor/autoload.php";
use Firebase\JWT\JWT;
function generateJwtToken($id) {
    $key = 'example-key';
    $issuedAt = time();
    $expirationTime = $issuedAt + 86400;
    $payload = [
        "user_id" => $id,
        "iat" => $issuedAt,
        "exp" => $expirationTime
    ];

    $token = JWT::encode($payload, $key, 'HS256');
    return $token;
}
?>