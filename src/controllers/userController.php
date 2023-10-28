<?php

class UserController extends BaseController {
    public function signupAction () {
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

    /* editAction enables the user to change their password by,
     * checking for an UPDATE API request from the client server,
     * extracting the JSON file for newpassword and oldpassword,
     * verifying that the old password provided by the user is correct,
     * and updating the user's password with the new password.
     */
    public function editAction () {
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper ($requestMethod) == "UPDATE") {
            $postData = json_decode(file_get_contents("php://input"), true);
            $userModel = new UserModel();
            if ($userModel->verifyUserPassword($_SESSION["email"], $postData["oldpassword"])) {
                if ($userModel->updateUserPassword($_SESSION["email"], $postData["newpassword"])) {
                    echo "Your password has been successfully updated";
                } else {
                    echo "There's was an error. Please try again.";
                }
            } else {
                echo "The password you entered is incorrect.";
            }
        }
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
            if ($userModel->getUserById($postData["email"])) {
                if ($userModel->verifyUserPassword($postData['email'], $postData['password'])) {
                    echo 'Login successful. You will be redirected shortly';
                } else {
                    echo 'Password is incorrect. Please try again.';
                }
            } else {
                echo "User does not exist. Please sign up for an account.";
            }
        }
    }
}

?>