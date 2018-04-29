<?php
/**
 * Created by PhpStorm.
 * User: MrBlue2583
 * Date: 29.04.2018
 * Time: 12:33
 */

namespace App\Utils\Response;

class ResponseMessages
{
    const UNAUTHORISED = [
        'message' => 'Unauthorised.',
        'code' => 0
    ];
    const MODEL_NOT_FOUND = [
        'message' => 'Model not found.',
        'code' => 1
    ];
    const OPERATION_SUCCESSFUL = [
        'message' => 'Operation successful.',
        'code' => 2
    ];
    const OPERATION_FAILED = [
        'message' => 'Operation failed.',
        'code' => 3
    ];
    const NOTHING_TO_UPDATE = [
        'message' => 'Nothing to update.',
        'code' => 4
    ];
}
