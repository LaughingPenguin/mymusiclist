<?php
require_once PROJECT_ROOT_PATH . "/models/database.php";

class UserModel extends Database {
    public function createUser ($email, $password) {
        $checkUserQuery = $this->connection->prepare("SELECT id FROM users WHERE email = ?");
        $checkUserQuery->bind_param("s", $email);
        $checkUserQuery->execute();
        $checkUserQuery->store_result();
        if ($checkUserQuery->num_rows == 0) {
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            $createUserQuery = $this->connection->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
            $createUserQuery->bind_param("ss", $email, $hashedPassword);
            if ($createUserQuery->execute()) {
                return true;
            } else {
                return false;
            }
        } else {
            echo "User already exists.";
        }
        $this->closeConnection();
    }

    public function updateUser () {
    }

    public function deleteUser () {
    }

    public function getUsers () {
    }

    public function getUserById ($email) {
        $checkUserQuery = $this->connection->prepare("SELECT id FROM users where email = ?");
        $checkUserQuery->bind_param("s", $email);
        if ($checkUserQuery->execute()) {
            $result = $checkUserQuery->get_result();
            if ($result->num_rows > 0) {
                return $result->fetch_assoc();
            }
        }
    }
}
?>