<?php
    function message($text){
        $array = array($text);
        echo json_encode($array, JSON_UNESCAPED_UNICODE);
    }
    message('Ответ с сервера');

?>