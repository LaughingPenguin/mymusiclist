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

    public function updateUser () {
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