<?php
    //Класс маршрутизатора
    class Rout{
        //здесь хранятся страницы
        public $pages = array();
        //функция, которая добовляет страницы 
        //в массив по ключу url и значения path
        //$url это то, что пишется в href тега <a>
        //$path это имя файла страницы .php
        public function addRoute($url, $path){
            $this->pages[$url] = $path;
        }
        /*
            pages = [
                '/'=> index.php,
                '/about'=> 'about.php,
            ]
        */
        //функция route что бы получить путь до файла
        public function route($url){
            $path = $this->pages[$url];
            //print_r($path);
            //переменная $file которая хранит путь до файла
            $file_dir = 'page/'.$path;
            $file_dir_sys = 'system/'.$path;
            if(!file_exists($file_dir)){ 
                require $file_dir_sys;
            }else if(!file_exists($file_dir_sys)){
                require $file_dir;
            }else if($path == '' || !file_exists($file_dir)|| !file_exists($file_dir_sys)){
                require $file_dir = 'page/404.php';
            }
        }
    }

?>