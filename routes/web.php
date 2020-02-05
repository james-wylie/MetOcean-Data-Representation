<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/get-metocean-data', 'MetOceanDataController@index');
Route::get('/view-particular-day', 'MetOceanDataController@index');
Route::get('/view-particular-hour', 'MetOceanDataController@show');