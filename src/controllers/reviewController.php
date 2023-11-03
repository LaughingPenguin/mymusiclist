<?php
class ReviewController extends BaseController {
    /* createAction allows the user to create a new review by,
    * checking if the request method is a POST request from the client,
    * extracting the JSON file for username, song, artist, and rating,
    * checking if the combination of username, song, and artist already exists,
    * and adding the new review to the review model.
    */
    public function createAction () {
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper ($requestMethod) == "POST") {
            $postData = json_decode(file_get_contents("php://input"), true);
            $reviewModel = new ReviewModel();
            if ($reviewModel->getReviewById($postData["username"], $postData["song"], $postData["artist"])){
                http_response_code(409);
            } else {
                if ($reviewModel->createReview($postData["username"], $postData["song"], $postData["artist"], $postData["rating"])) {
                    http_response_code(200);
                } else {
                    http_response_code(500);
                }
            }
        }
        exit;
    }
    /* readAction allows the user to get all song ratings by,
    * checking if the request method is a GET request,
    * and echoing the requested data.
    */
    public function readAction () {
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper ($requestMethod) == "GET") {
            $reviewModel = new ReviewModel();
            $data = $reviewModel->getReviews();
            echo json_encode($data);
        }
        exit;
    }
    /* updateAction allows the user to modify an existing song rating by,
    * checking if the request method is a PUT request,
    * extracting the JSON payload for id and rating,
    * and updating the review; users are not allowed to update entries that they
    * did not create.
    */
    public function updateAction () {
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper ($requestMethod) == "PUT") {
            $postData = json_decode(file_get_contents("php://input"), true);
            $reviewModel = new ReviewModel();
            if ($reviewModel->updateReview($postData["id"], $postData["rating"])){
                http_response_code(200);
            } else {
                http_response_code(500);
            }
        }
        exit;
    }
    /* deleteAction allows the user to delete an existing song rating by,
    * checking if the request method is a DELETE request,
    * extracting the JSON data payload for username, song, and artist,
    * and deleting the review; users are not allowed to delete entries that
    * they did not create.
    */
    public function deleteAction () {
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper ($requestMethod) == "DELETE") {
            $postData = json_decode(file_get_contents("php://input"), true);
            $reviewModel = new ReviewModel();
            if ($reviewModel->getReviewById($postData["username"], $postData["song"], $postData["artist"]) == $postData["id"]){
                if ($reviewModel->deleteReview($postData["id"])){
                    http_response_code(200);
                }
                else {
                    http_response_code(500);
                }
            }
            else{
                http_response_code(404);
            }
        }
        exit;
    }
}
?>