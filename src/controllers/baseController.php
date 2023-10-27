<?php
class BaseController {
    //throw 404 error when calling a method that does not exist
    public function __call($method, $args) {
        $this->sendOutput("", array('HTTP/1.1 404 Not Found'));
    }

    // return array of uri segments
    protected function getUriSegments() {
        $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $uri = explode('/', $uri);
        return $uri;
    }

    // returns array of query string variables passed along with the api request
    protected function getQueryStringParams() {
        return parse_str($_SERVER['QUERY_STRING'], $query);
    }

    // to send api response to user
    protected function sendOutput($data, $httpHeaders = array()) {
        header_remove('Set-Cookie');
        if (is_array($httpHeaders) && count($httpHeaders)) {
            foreach ($httpHeaders as $httpHeader) {
                header($httpHeader);
            }
        }
        echo $data;
        exit;
    }
}

?>