<?php

function getCover($music_list){
    return [
        "name" => $music_list['album'],
        "artista" => $music_list['artista'],
        "immagine" => $music_list['immagine'],
    ];
};