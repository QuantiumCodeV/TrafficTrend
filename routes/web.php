<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/dashboard', function () {
    return view('dashboard.index');
})->middleware(['auth', 'verified', 'can_login'])->name('dashboard');

Route::get('/offers', function () {
    return view('dashboard.offers');
})->middleware(['auth', 'verified', 'can_login']);

Route::get('/platforms', function () {
    return view('dashboard.platforms');
})->middleware(['auth', 'verified', 'can_login']);

Route::get('/conditions', function () {
    return view('conditions');
});

Route::get('/policy', function () {
    return view('policy');
});

Route::get('/about', function () {
    return view('about.index');
});


Route::get('/reviews', function () {
    return view('reviews.index');
});

Route::get('/faq', function () {
    return view('faq.index');
});


require __DIR__.'/auth.php';
