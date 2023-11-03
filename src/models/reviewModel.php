<?php
require_once PROJECT_ROOT_PATH . "/models/database.php";

class ReviewModel extends Database {
    public function createReview ($username, $song, $artist, $rating) {
        $sql = "INSERT INTO ratings (username, song, artist, rating) VALUES (?, ?, ?, ?)";
        $stmt = $this->connection->prepare($sql);
        $stmt->bind_param("sssi", $username, $song, $artist, $rating);
        if ($stmt->execute()){
            return true;
        }
        else {
            return false;
        }
    }

    public function updateReview ($id, $rating) {
        $sql = "UPDATE ratings SET rating = ? WHERE id = ?";
        $stmt = $this->connection->prepare($sql);
        $stmt->bind_param("ii", $rating, $id);
        if ($stmt->execute()){
            return true;
        }
        else {
            return false;
        }
    }

    public function deleteReview ($id) {
        $sql = "DELETE FROM ratings WHERE id = ?";
        $stmt = $this->connection->prepare($sql);
        $stmt->bind_param("i", $id);
        if ($stmt->execute()){
            return true;
        }
        else {
            return false;
        }
    }

    public function getReviews () {
        $sql = "SELECT * FROM ratings";
        $result = mysqli_query($this->connection, $sql);
        if ($result) {
            $reviews = array();
            while ($row = mysqli_fetch_assoc($result)) {
                $reviews[] = $row;
            }
            mysqli_free_result($result);
            return $reviews;
        } else {
            return false;
        }
    }

    public function getReviewById ($username, $song, $artist) {
        $sql = "SELECT id FROM ratings WHERE (username, song, artist) = (?, ?, ?)";
        $stmt = $this->connection->prepare($sql);
        $stmt->bind_param("sss", $username, $song, $artist);
        if ($stmt->execute()) {
            $result = $stmt->get_result();
            if ($result->num_rows > 0){
                return $result->fetch_object()->id;
            }
            else {
                return false;
            }
        }
    }
}

?>