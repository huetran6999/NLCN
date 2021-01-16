<?php

$locale='de_DE.UTF-8';
setlocale(LC_ALL,$locale);
putenv('LC_ALL='.$locale);
putenv('LANG=en_US.UTF-8');

    header('Content-Type: text/html; charset=UTF-8');
    $input = $_POST['input'];
    $command = escapeshellcmd("python get_response.py $input ");
    $output=exec($command);
    // $output = sapi_windows_cp_conv(sapi_windows_cp_get('oem'), 65001, $output);
    // print_r(('Là sao ba'));
    // $myfile = fopen("result.txt", "r") or die("Unable to open file!");
    // echo fread($myfile,filesize("result.txt"));
    // fclose($myfile);
    // print_r(iconv('UTF-8', 'ISO-8859-1', b'l\xe1\xbb\x93n'));
    // print_r(html_entity_decode(preg_replace("/U\+([0-9A-F]{4})/", "&#x\\1;", b'pyth\xc3\xb6n!'), ENT_NOQUOTES, 'UTF-8'));
    // print_r(json_encode($output))
    $result = explode(' ',$output);
    print_r(json_encode($result));
?>

