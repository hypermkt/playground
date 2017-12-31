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

use App\Task;
use Illuminate\Http\Request;

/**
 * 全タスク表示
 */
Route::get('/', function () {
    $tasks = Task::orderBy('created_at', 'asc')->get();

    return view('tasks', [
        'tasks' => $tasks
    ]);
});

/**
 * 新タスク追加
 */
Route::post('/task', function (Request $request) {
    $validator = Validator::make($request->all(), [
        'name' => 'required|max:255'
    ]);

    if ($validator->fails()) {
        return redirect('/')
            ->withInput() // 以前の入力をリダイレクト時に引き継ぐ
            ->withErrors($validator); // $validatorインスタンスのエラーデータをフラッシュデータとしてセッションに保持
    }

    // タスク作成

    $task = new Task();
    $task->name = $request->name;
    $task->save();

    return redirect('/');
});

/**
 * 既存タスクの削除
 */
Route::delete('/task/{id}', function (Request $request) {
    $task = Task::find($request->id);
    $task->delete();

    return redirect('/');
});