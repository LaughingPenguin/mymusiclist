<?php 

class ReviewController extends BaseController {
    public function createAction () {
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper ($requestMethod) == "POST") {
            $postData = json_decode(file_get_contents("php://input"), true);
            $reviewModel = new ReviewModel();
        }
    }

    public function readAction () {
        
    }

    public function updateAction () {
        
    }

    public function deleteAction () {
        
    }
}

?>