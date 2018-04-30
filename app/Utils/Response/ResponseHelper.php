<?php
/**
 * Created by PhpStorm.
 * User: MrBlue2583
 * Date: 29.04.2018
 * Time: 12:33
 */

namespace App\Utils\Response;

trait ResponseHelper
{

    public function prepareJsonErrorResponse($message, $httpStatusCode) {
        return response()->json([
            'responseType' => 'error',
            'data' => $message
        ], $httpStatusCode);
    }

    public function prepareJsonSuccessResponse($message, $httpStatusCode) {
        return response()->json([
            'responseType' => 'success',
            'data' => $message

        ], $httpStatusCode);
    }

    public function prepareLoginSuccessResponse($messages, $headers) {
        return response($messages)->withHeaders($headers);
    }

    public function prepareJsonMessage($message, $data) {
        return [
            'message' => $message,
            'data' => $data
        ];
    }
}