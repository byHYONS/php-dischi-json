<?php

//? importo funzione getCover:
require_once 'functions.php';

//? lettura file json:
$data = file_get_contents('music-list.json');
$music_list = json_decode($data, true);
$database = __DIR__ . '/music-list.json';
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

//? genera numeri random:
function numRandom($min, $max){
    $new_id = rand($min, $max);
    return $new_id;
};

//? faccio chiamata in post per aggiungere album:
if(isset($_POST['action']) && $_POST['action'] === 'create') {
    
    foreach($music_list as $key => $music) {
        if($music['id'] !== numRandom(1, 1000)) {
            $id_album = numRandom(1, 1000);
            continue;
        }
    };

    // $id_album = numRandom(30, 1000);

    $new_album = [
        'id' => $id_album,
        'album' => $_POST['album'],
        'artista' => $_POST['artista'],
        'uscita' => $_POST['uscita'],
        'valutazione' => $_POST['valutazione'],
        'copie_vendute' => numRandom(1000, 999000),
        'immagine' => "cover" . numRandom(1,20) . ".jpg",
    ];

    $result = [...$music_list, $new_album];
    file_put_contents($database, json_encode($result));
    $result = array_map('getCover', $result);

};



//? condivisione server:
header('Content-Type: application/json');
echo json_encode($result);
