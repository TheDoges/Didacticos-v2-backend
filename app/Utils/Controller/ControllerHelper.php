<?php
/**
 * Created by PhpStorm.
 * User: MrBlue2583
 * Date: 29.04.2018
 * Time: 22:08
 */

namespace App\Utils\Controller;


use App\Http\Resources\Field\FieldResource;
use App\Utils\Response\ResponseHelper;
use App\Utils\Response\ResponseMessages;
use Validator;

trait ControllerHelper
{
    use ResponseHelper;

    public function updateDataInModel($fields, $model) {
        $isUpdated = false;
        foreach ($fields as $key => $field) {
            if(isset($model[$key]) && $model[$key] != $field) {
                $isUpdated = true;
                $model[$key] = $field;
            }
        }
        if($isUpdated) {
            $model->save();
        }
        return $isUpdated;
    }

    public function storeSelectedModels($requestData, $modelClass) {
        $response = [];
        foreach($requestData as $key => $rModel) {
            $data = null;
            $message = null;
            if(isset($rModel['id'])) {
                $model = $modelClass::find($rModel['id']);
                if($model != null) {
                    $message = null;
                    if($this->updateDataInModel($rModel, $model)) {
                        $message = ResponseMessages::OPERATION_SUCCESSFUL;
                    } else {
                        $message = ResponseMessages::NOTHING_TO_UPDATE;
                    }
                    $data = new FieldResource($model);
                } else {
                    $data = null;
                    $message = ResponseMessages::MODEL_NOT_FOUND;
                }
            } else {
                $v = Validator::make($rModel, $modelClass::STORE_RULES);
                if($v->fails()) {
                    $data = $v->errors();
                    $message = ResponseMessages::OPERATION_FAILED;
                } else {
                    $field = new $modelClass();
                    $field->fill($rModel);
                    $field->save();
                    $data = new FieldResource($field);
                    $message = ResponseMessages::OPERATION_SUCCESSFUL;
                }
            }
            $response[$rModel['temp_id']] = $this->prepareJsonMessage($message, $data);
        }
        return $response;
    }

    public function deleteSelectedModels($requestData, $modelClass) {
        $response = [];
        $message = null;
        $data = null;
        foreach ($requestData as $key => $rModel) {
            $v = Validator::make($rModel, $modelClass::DELETE_RULES);
            if($v->fails()) {
                $data = $v->errors();
                $message = ResponseMessages::OPERATION_FAILED;
            } else {
                $model = $modelClass::find($rModel['id']);
                if($model != null) {
                    $model->delete();
                    $message = ResponseMessages::OPERATION_SUCCESSFUL;
                    $data = null;
                } else {
                    $message = ResponseMessages::MODEL_NOT_FOUND;
                    $data = null;
                }
            }
            $response[$rModel['temp_id']] = $this->prepareJsonMessage($message, $data);
        }

        return $response;
    }
}