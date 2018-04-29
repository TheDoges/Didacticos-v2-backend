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

Route::post('/login', 'API\PassportController@login');
Route::post('/register', 'API\PassportController@register');

// *****************************DEGREE*************************************
Route::apiResource('/degree', 'DegreeController');

// *****************************FIELD**************************************
Route::group(['prefix' => '/degree/{degree}'], function() {
    Route::apiResource('/field', 'FieldController');
    Route::post('/fields', 'FieldController@storeALl')->name('lecturer.storeALl');
    Route::delete('/fileds', 'FieldController@deleteAll')->name('lecturer.deleteAll');
});

// *****************************LECTURER***********************************
Route::apiResource('/lecturer', 'LecturerController');
Route::post('/lecturers', 'LecturerController@storeAll')->name('lecturer.storeALl');
Route::delete('/lecturers', 'LecturerController@deleteAll')->name('lecturer.deleteAll');

// *****************************SEMESTER***********************************
Route::apiResource('/semester', 'SemesterController');
Route::post('/semesters', 'SemesterController@storeAll')->name('semester.storeAll');
Route::delete('/semesters', 'SemesterController@deleteAll')->name('semester.deleteAll');

// *****************************SUBJECT************************************
Route::apiResource('/subject', 'SubjectController');
Route::post('/subjects', 'SubjectController@storeAll')->name('semester.storeAll');
Route::delete('/subjects', 'SubjectController@deleteAll')->name('semester.deleteAll');

// *****************************TITLE**************************************
Route::apiResource('/title', 'TitleController');


