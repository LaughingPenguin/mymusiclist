<?php
class Database
{
    protected $connection = null;

    // __construct connects to the server each time DataBase is extended
    public function __construct()
    {
        $this->connection = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DB_NAME);
        if ($this->connection->connect_error) {
            die("Could not connect to database: " . $this->connection->connect_error);
        }
    }

    public function closeConnection() {
        $this->connection->close();
    }
}