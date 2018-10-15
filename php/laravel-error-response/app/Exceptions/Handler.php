<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        $statusCode = null;
        $jsonResponse = [
            'type' => '',
            'title' => '',
            'code' => '',
        ];
        // 404 Not Found
        if ($exception instanceof NotFoundHttpException) {
            $jsonResponse['code'] = 'not_found';
            $statusCode = $exception->getStatusCode();
        }

        return response()
            ->json($jsonResponse, $statusCode);
        /**
        return parent::render($request, $exception);
        {
            "type": "https://example.net/validation-error",
            "title": "送られたパラメータが正しくありません。",
            "code": "validation_error",
            "invalid-params": {
                "name": "body",
                "reason": "本文を入力して下さい"
            }
        }
        return response()->json([
            'type' => '',
            'title' => '',
            'code' => '',
            'invalid-params' => [
            ],
        ]);
         */
    }
}
