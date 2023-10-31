<?php 

class ReviewController extends BaseController {
    /* createAction allows the user to create a new review by,
    * checking if the request method is a post request from the client,
    * extracting the json file for username, song, artist, and rating,
    * checking if the combination of username, song, and artist already exists,
    * and adding the new review to the review model.
    */ 
    public function createAction () {
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper ($requestMethod) == "POST") {
            $postData = json_decode(file_get_contents("php://input"), true);
            $reviewModel = new ReviewModel();
            if ($reviewModel->getReviewById($postData["username"], $postData["song"], $postData["artist"])){
                echo "You have already reviewed this song.";
            } else {
                $reviewModel->createReview($postData["username"], $postData["song"], $postData["artist"], $postData["rating"]);
                echo "New review successfully created!";
            }
        }
    }

    public function readAction () {
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper ($requestMethod) == "GET") {
            $postData = json_decode(file_get_contents("php://input"), true);
            $reviewModel = new ReviewModel();
            $reviewModel->getReviews();
        }
    }

    public function updateAction () {
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper ($requestMethod) == "PUT") {
            $postData = json_decode(file_get_contents("php://input"), true);
            $reviewModel = new ReviewModel();
                if ($reviewModel->updateReview($postData["id"], $postData["song"], $postData["artist"], $postData["rating"])){
                    echo "Review successfully updated.";
                }
                else {
                    echo "failed to update review.";
                }
            }
        }

    public function deleteAction () {
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper ($requestMethod) == "DELETE") {
            $postData = json_decode(file_get_contents("php://input"), true);
            $reviewModel = new ReviewModel();
            if ($reviewModel->getReviewById($postData["username"], $postData["song"], $postData["artist"])){
                if ($reviewModel->deleteReview($postData["id"])){
                    echo "Review successfully deleted.";
                }
                else {
                    echo "failed to delete review.";
                }
            }
            else{
            echo "could not find review.";
            }
        }
    }
}

?>