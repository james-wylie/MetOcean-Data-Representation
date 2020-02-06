<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/get-metocean-data', 'MetOceanDataController@index');

// Route::get('/view-particular-day', 'MetOceanDataController@index');
// Route::get('/view-particular-hour', 'MetOceanDataController@show');