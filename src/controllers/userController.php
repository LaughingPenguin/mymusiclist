<?php

class UserController extends BaseController {
    public function createAction () {
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper ($requestMethod) == "POST") {
            $postData = json_decode(file_get_contents("php://input"), true);
            $userModel = new UserModel();
            if ($userModel->getUserById($postData["email"])) {
                echo "User already exists. Please log in.";
            } else {
                $userModel->createUser($postData["username"], $postData["email"], $postData["password"]);
                echo "Account has been successfully created.";
            }
        }
    }
}

?>