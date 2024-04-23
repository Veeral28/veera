<?php
// Connect to your database and fetch cases
// Replace this with your actual database connection and query
$cases = array(
    array('id' => 1, 'title' => 'Case 1'),
    array('id' => 2, 'title' => 'Case 2'),
    array('id' => 3, 'title' => 'Case 3')
);

// Return cases as JSON
header('Content-Type: application/json');
echo json_encode($cases);
?>
