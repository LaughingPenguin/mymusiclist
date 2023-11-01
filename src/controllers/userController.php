<?php

class UserController extends BaseController {
    /* signupAction allows the user to create an account by,
    * checking if the request method is a POST request from the client,
    * extracting the JSON file for username, email, and password,
    * checking if the combination of username and email already exists,
    * and creating the user account.
    */
    public function signupAction () {
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper ($requestMethod) == "POST") {
            $postData = json_decode(file_get_contents("php://input"), true);
            $userModel = new UserModel();
            if ($userModel->getUserByEmailUsername($postData["email"], $postData["username"])) {
                header("Location: http://localhost:3000/login", true, 409);
            } else {
                $userModel->createUser($postData["username"], $postData["email"], $postData["password"]);
                header("Location: http://localhost:3000/reviews", true, 201);
            }
        }
        exit;
    }

    /* editAction enables the user to change their password by,
     * checking for an UPDATE API request from the client server,
     * extracting the JSON file for newpassword and oldpassword,
     * verifying that the old password provided by the user is correct,
     * and updating the user's password with the new password.
     */
    public function editAction () {
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper ($requestMethod) == "PATCH") {
            $postData = json_decode(file_get_contents("php://input"), true);
            $userModel = new UserModel();
            if ($userModel->verifyUserPassword($_SESSION["email"], $postData["oldpassword"])) {
                if ($userModel->updateUserPassword($_SESSION["email"], $postData["newpassword"])) {
                    header("Location: http://localhost:3000/login", true, 200);
                } else {
                    http_response_code(500);
                }
            } else {
                http_response_code(401);
            }
        }
        exit;
    }

    /* loginAction enables the user to log into their account by,
     * checking that the provided email exists,
     * and verifying that the provided password matches the stored password.
     */
    public function loginAction () {
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper ($requestMethod) == "POST") {
            $postData = json_decode(file_get_contents("php://input"), true);
            $userModel = new UserModel();
            if ($userModel->getUserByEmail($postData["email"])) {
                if ($userModel->verifyUserPassword($postData['email'], $postData['password'])) {
                    header("Location: http://localhost:3000/review", true, 200);
                } else {
                    http_response_code(401);
                }
            } else {
                header("Location: http://localhost:3000/login", true, 404);
            }
        }
        exit;
    }

    /* deleteAction enables the user to delete their account by,
     * checking that the username and email combination exists,
     * and verifying that the provided password matches the stored password.
     */
    public function deleteAction () {
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper ($requestMethod) == "DELETE") {
            $postData = json_decode(file_get_contents("php://input"), true);
            $userModel = new UserModel();
            if ($userModel->getUserByEmailUsername($postData["email"], $postData["username"])) {
                if ($userModel->verifyUserPassword($postData["email"], $postData["password"])) {
                    if ($userModel->deleteUser($postData["email"])) {
                        header("Location: http://localhost:3000/home", true, 204);
                    } else {
                        http_response_code(500);
                    }
                } else {
                    http_response_code(401);
                }
            } else {
                http_response_code(404);
            }
        }
        exit;
    }
}

?>