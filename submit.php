<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Define the target directory where the file will be uploaded
    $targetDir = "uploads/";

    // Get the file name
    $fileName = basename($_FILES["file"]["name"]);

    // Define the target file path
    $targetFilePath = $targetDir . $fileName;

    // Check if the file already exists
    if (file_exists($targetFilePath)) {
        echo "Sorry, the file already exists.";
    } else {
        // Try to upload the file
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)) {
            // File uploaded successfully
            echo "The file " . htmlspecialchars($fileName) . " has been uploaded successfully.";

            // Display other form data
            echo "<br>Title: " . htmlspecialchars($_POST["title"]);
            echo "<br>Description: " . htmlspecialchars($_POST["description"]);
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }
}
?>

