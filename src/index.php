<?php /*for creating controller instances */
$uri = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$uri = explode ("/", $uri);
# redirect to user controller if uri contains user
if ( $uri[2] == 'user' ) {
    require PROJECT_ROOT_PATH .'/controllers/userController.php';
    $userController = new UserController();
    $methodName = $uri[3] .'Action';
    $userController->$methodName();
}
# redirect to review controller if uri contains review
if ( $uri[2] == 'review') {
    require PROJECT_ROOT_PATH .'controllers/reviewController.php';
    $reviewController = new ReviewController();
    $methodName = $uri[3] .'Action';
    $reviewController->$methodName();
}
?>