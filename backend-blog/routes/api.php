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
Route::get('posts/index', 'PostController@index');

//Route::get('posts/search/{params}', 'PostController@search');
Route::get('posts/recommended', 'PostController@allRecommended');

Route::get('posts/{id}', 'PostController@show');
Route::get('posts/user/{userId}', 'PostController@getByUser');
Route::post('posts/create', 'PostController@create');
Route::delete('posts/delete/{id}', 'PostController@delete');
//Route::update('posts/update/{id}', 'PostController@update');




Route::get('icons', 'IconController@all');
Route::get('icons/{id}', 'IconController@show');

