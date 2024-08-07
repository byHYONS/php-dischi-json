<?php

function getCover($music_list){
    return [
        "id" => $music_list['id'],
        "album" => $music_list['album'],
        "artista" => $music_list['artista'],
        "immagine" => $music_list['immagine'],
    ];
};
