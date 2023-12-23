<?php
    session_start();
    require 'PHP/Rout.php';

    $rout = new Rout();
    $rout->addRoute('/', 'homepage.php');
    $rout->addRoute('/ten', 'ten.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/connect/connect.css">
    <title>WeatherApp</title>
</head>
<body>
    <div class="wrapper">
        <header>
            <div class="">
                <section class="header__section">
                    <ul class="header__nav">
                        <li><a href="/">На день</a></li>
                        <li><a href="/ten">На 10 дней</a></li>
                        <li><a href="#">На 30 дней</a></li>
                        <!--<li><a href="#"></a></li>-->
                    </ul>
                    <ul class="header__nav">
                        <li><a href="#">Вход</a></li>
                    </ul>
                </section>
            </div>
        </header>
        <main>
            <section class="query">
                <div class="container">
                    <section class="query__section">
                        <div class="query__head">
                            <h2 class="query__name">
                                моя погода
                            </h2>
                        </div>
                        <div class="query__row">
                            <h3 class="query__city">Введите город</h3>
                            <form action="" class="getWeather" id="getWeather">
                                <input type="text" class="getWeather__city" id="getWeather__city" placeholder="Город">
                                <input type="submit" class="getWeather__submit" id="getWeather__submit" name="send">
                            </form>
                        </div>
                    </section>
                </div>
            </section>
            <section class="">
                <div class="container">
                    <section class="main_showWeather">
                        <?php
                            $rout->route($_SERVER['REQUEST_URI']);
                        ?>
                    </section>
                </div>
            </section>
        </main>
        <footer>
            <div class="container">
                <section class="foote__section">
                    <form action="" class="getWeather">
                        <input type="text" class="getWeather__city" placeholder="Электронная почта">
                        <input type="submit" class="getWeather__submit" name="send" value="Подписаться">
                    </form>
                    <span><?php echo date('Y');?></span>
                </section>
            </div>
        </footer>
    </div>
    

    <script src="JS/getWeather.js"></script>
    
</body>
</html>