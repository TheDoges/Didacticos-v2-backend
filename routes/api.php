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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', 'API\Auth\PassportController@login')->name('passport.login');
Route::post('/register', 'API\Auth\PassportController@register')->name('passport.register');

// *****************************DEGREE*************************************
Route::apiResource('/degree', 'API\REST\DegreeController');
Route::post('/degrees', 'API\REST\DegreeController@storeAll')->name('degree.storeALl');
Route::delete('/degrees', 'API\REST\DegreeController@deleteAll')->name('degree.deleteAll');

// *****************************FIELD**************************************
Route::group(['prefix' => '/degree/{degree}'], function() {
    Route::apiResource('/field', 'API\REST\FieldController');
    Route::post('/fields', 'API\REST\FieldController@storeALl')->name('lecturer.storeALl');
    Route::delete('/fields', 'API\REST\FieldController@deleteAll')->name('lecturer.deleteAll');
});

// *****************************LECTURER***********************************
Route::apiResource('/lecturer', 'API\REST\LecturerController');
Route::post('/lecturers', 'API\REST\LecturerController@storeAll')->name('lecturer.storeALl');
Route::delete('/lecturers', 'API\REST\LecturerController@deleteAll')->name('lecturer.deleteAll');

// *****************************SEMESTER***********************************
Route::apiResource('/semester', 'API\REST\SemesterController');
Route::post('/semesters', 'API\REST\SemesterController@storeAll')->name('semester.storeAll');
Route::delete('/semesters', 'API\REST\SemesterController@deleteAll')->name('semester.deleteAll');

// *****************************SUBJECT************************************
Route::apiResource('/subject', 'API\REST\SubjectController');
Route::post('/subjects', 'API\REST\SubjectController@storeAll')->name('semester.storeAll');
Route::delete('/subjects', 'API\REST\SubjectController@deleteAll')->name('semester.deleteAll');

// *****************************TITLE**************************************
Route::apiResource('/title', 'API\REST\TitleController');
Route::post('/titles', 'API\REST\TitleController@storeAll')->name('title.storeAll');
Route::delete('/titles', 'API\REST\TitleController@deleteAll')->name('title.deleteAll');


