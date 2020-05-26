<html>
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>

<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
//this is a php comment IN tags (will not appear)
//date_default_timezone_set("Asia/Shanghai");
//echo date("l, F jS, Y h:i:s") ."<hr/>";
$year = date("Y");
$day_year = 365;
if ($year % 100 == 0){
    if ($year % 400 == 0){
        $day_year = 366;
    }
}else{
    if ($year % 4 == 0){
        $day_year = 366;
    }
}
    $remaining = $day_year - date("z");
echo "There are " . $remaining . " days left in the year";
echo "<br>"; //notice we must echo tags in php.

?>
</body>
</html>