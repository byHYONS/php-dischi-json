<?php

$data = json_decode(file_get_contents('./music-list.json'));

var_dump($data);

header('Content-Type: application/json');
json_encode($data);

