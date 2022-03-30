<?php
    if ($_SERVER ["REQUEST_METHOD"] == "POST") {
        if (empty ($_POST ["userInput"])) {
            echo "User input is required.";
        } else {
            if (checkForUrls ($_POST ["userInput"])) {
                die ("URL detected. JavaScript filter apparently insufficient.");   
            } 
            $userInput = test_input ($_POST ["userInput"]);
            echo "No URLs were detected by the backend check.";
        }
    }

    function checkForUrls ($inputString) {
        $checkFor = array ("www.", "https://", "http://", ".com", ".net");
        for ($i = 0; $i < count ($checkFor); $i++) {
            if (str_contains ($inputString, $checkFor [$i])) {
                return true;    
            }
        }
        return false;
    }

    function test_input ($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>
