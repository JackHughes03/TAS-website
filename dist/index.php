<?php

echo "PHP Loaded!\n";

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

require __DIR__.'/../vendor/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__.'/../');
$dotenv->load();

$servername = $_ENV['VUE_SERVER_NAME'];
$username = $_ENV['VUE_USERNAME'];
$password = $_ENV['VUE_PASSWORD'];
$database = $_ENV['VUE_DATABASE'];

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully\n";
}

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['match1Message'])) {
    handleDatabaseRequest($conn, 'match_1', $data['match1Message'], 'match1Message');
} elseif (isset($data['getmatch1value'])) {
    handleDatabaseRequest($conn, 'match_1', $data['getmatch1value'], 'getmatch1value');
} elseif (isset($data['match2Message'])) {
    handleDatabaseRequest($conn, 'match_2', $data['match2Message'], 'match2Message');
} elseif (isset($data['getmatch2value'])) {
    handleDatabaseRequest($conn, 'match_2', $data['getmatch2value'], 'getmatch2value');
} elseif (isset($data['dateMessage'])) {
    handleDatabaseRequest($conn, 'date', $data['dateMessage'], 'dateMessage');
} elseif (isset($data['getdatevalue'])) {
    handleDatabaseRequest($conn, 'date', $data['getdatevalue'], 'getdatevalue');
} elseif (isset($data['locationMessage'])) {
    handleDatabaseRequest($conn, 'location', $data['locationMessage'], 'locationMessage');
} elseif (isset($data['getlocationvalue'])) {
    handleDatabaseRequest($conn, 'location', $data['getlocationvalue'], 'getlocationvalue');
} elseif (isset($data['newsMessage'])) {
    handleDatabaseRequest($conn, 'news', $data['newsMessage'], 'newsMessage');
} elseif (isset($data['getnewsvalue'])) {
    handleDatabaseRequest($conn, 'news', $data['getnewsvalue'], 'getnewsvalue');
}


function handleDatabaseRequest($conn, $matchColumn, $message, $requestType) {
    echo "\n";
    
    if ($requestType == 'match1Message') {
        updateDatabase($conn, $matchColumn, $message);
    } elseif ($requestType == 'getmatch1value') {
        getDatabase($conn, $matchColumn);
    } elseif ($requestType == 'match2Message') {
        updateDatabase($conn, $matchColumn, $message);
    } elseif ($requestType == 'getmatch2value') {
        getDatabase($conn, $matchColumn);
    } elseif ($requestType == 'dateMessage') {
        update_date_Database($conn, $matchColumn, $message);
    } elseif ($requestType == 'getdatevalue') {
        get_date_Database($conn, $matchColumn);
    } elseif ($requestType == 'locationMessage') {
        updateDatabase($conn, $matchColumn, $message);
    } elseif ($requestType == 'getlocationvalue') {
        getDatabase($conn, $matchColumn);
    } elseif ($requestType == 'newsMessage') {
        updateNews($conn, $message);
    } elseif ($requestType == 'getnewsvalue') {
        getNews($conn);
    }
}

function getNews($conn) {
    $sql = "SELECT news FROM match_table WHERE id = 5";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "news: " . $row['news'] . "\n";
        }
    } else {
        echo "0 results\n";
    }
    $conn->close();
}

function updateNews($conn, $message) {
    // create a new record in match_table news column
    $sql = "INSERT INTO match_table (news) VALUES ('$message')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully\n";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // update the record in match_table news column
    $sql = "UPDATE match_table SET news = '$message' WHERE id = 5";
    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully\n";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

function updateDatabase($conn, $matchColumn, $message) {
    $sql = "INSERT INTO match_table ($matchColumn) VALUES ('$message')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully\n";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $sql = "UPDATE match_table SET $matchColumn = '$message' WHERE id = " . getIdFromMatchColumn($matchColumn);
    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully\n";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $sql = "SELECT $matchColumn FROM match_table WHERE id = " . getIdFromMatchColumn($matchColumn);
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "$matchColumn: " . $row[$matchColumn] . "\n";
        }
    } else {
        echo "0 results\n";
    }
    $conn->close();
}

function getDatabase($conn, $matchColumn) {
    $sql = "SELECT $matchColumn FROM match_table WHERE id = " . getIdFromMatchColumn($matchColumn);
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "$matchColumn: " . $row[$matchColumn] . "\n";
        }
    } else {
        echo "0 results\n";
    }
    $conn->close();
}

function update_date_Database($conn, $matchColumn, $message) {
    echo "\nUpdating database\n";
    $sql = "INSERT INTO match_table ($matchColumn) VALUES ('$message')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully\n";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $sql = "UPDATE match_table SET $matchColumn = '$message' WHERE id = " . getIdFromMatchColumn($matchColumn);
    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully\n";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $sql = "SELECT $matchColumn FROM match_table WHERE id = " . getIdFromMatchColumn($matchColumn);
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "$matchColumn: " . $row[$matchColumn] . "\n";
        }
    } else {
        echo "0 results\n";
    }
    $conn->close();
}

function get_date_Database($conn, $matchColumn) {
    echo "\nGetting database\n";
    $sql = "SELECT $matchColumn FROM match_table WHERE id = " . getIdFromMatchColumn($matchColumn);
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "$matchColumn: " . $row[$matchColumn] . "\n";
        }
    } else {
        echo "0 results\n";
    }
    $conn->close();
}

function getIdFromMatchColumn($matchColumn) {
    if ($matchColumn == 'match_1') {
        return 1;
    } elseif ($matchColumn == 'match_2') {
        return 2;
    } elseif ($matchColumn == 'date') {
        return 3;
    } elseif ($matchColumn == 'location') {
        return 4;
    }
    return null;
}
?>