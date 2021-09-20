<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */



Route::get('posts', 'PostController@all');
Route::get('posts/last', 'PostController@last');
Route::get('posts/{id}', 'PostController@show');
Route::post('posts/create', 'PostController@create');
Route::delete('posts/delete/{id}', 'PostController@delete');
Route::patch('posts/update/{id}', 'PostController@update');



Route::get('icons', 'IconController@all');
Route::get('icons/{id}', 'IconController@show');

