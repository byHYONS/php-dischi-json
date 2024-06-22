<?php

//? importo funzione getCover:
require_once 'functions.php';

//? lettura file json:
$data = file_get_contents('music-list.json');
$music_list = json_decode($data, true);
$result = $music_list;

// var_dump($music_list);

$result = array_map('getCover', $result);

//? faccio chiamata cover:
if(isset($_GET['action']) && $_GET['action'] === 'info') {
    if(isset($_GET['id'])) {
        $index = $_GET['id'];
        $position = array_search($_GET['id'], array_column($music_list, 'id'));
        if($position !== false) {
            $result = $music_list[$position];
        }
    }
};



//? condivisione server:
header('Content-Type: application/json');
echo json_encode($result);
