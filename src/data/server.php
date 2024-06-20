<?php

//? lettura file json:
$data = file_get_contents('music-list.json');
$music_list = json_decode($data, true);

// var_dump($music_list);



//? condivisione server:
header('Content-Type: application/json');
echo json_encode($music_list);
