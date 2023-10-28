<?php
require_once PROJECT_ROOT_PATH . "/models/database.php";

class UserModel extends Database {
    public function createUser ($username, $email, $password) {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        $createUserQuery = $this->connection->prepare($sql);
        $createUserQuery->bind_param("sss", $username, $email, $hashedPassword);
        if ($createUserQuery->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function updateUserPassword ($email, $newpassword) {
        $newHashedPassword = password_hash($newpassword, PASSWORD_DEFAULT);
        $sql = "UPDATE users SET password = ? WHERE username = ?";
        $updateUserQuery = $this->connection->prepare($sql);
        $updateUserQuery->bind_param("ss", $newHashedPassword, $email);
        if ($updateUserQuery->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function verifyUserPassword ($email, $password) {
        $sql = "SELECT * FROM users WHERE username = ?";
        $verifyUserQuery = $this->connection->prepare($sql);
        $verifyUserQuery->bind_param("s", $email);
        $verifyUserQuery->execute();
        $result = $verifyUserQuery->get_result();
        $user = $result->fetch_assoc();
        if (password_verify($password, $user["password"])) {
            return true;
        } else {
            return false;
        }
    }

    public function deleteUser () {
    }

    public function getUsers () {
    }

    public function getUserById ($email) {
        $sql = "SELECT id FROM users WHERE email = ?";
        $checkUserQuery = $this->connection->prepare($sql);
        $checkUserQuery->bind_param("s", $email);
        if ($checkUserQuery->execute()) {
            $result = $checkUserQuery->get_result();
            if ($result->num_rows > 0) {
                return $result->fetch_assoc();
            }
        } else {
            return false;
        }
    }
}
?>