<?php
/**
 * Created by PhpStorm.
 * User: MrBlue2583
 * Date: 29.04.2018
 * Time: 22:08
 */

namespace App\Utils\Controller;


trait ControllerHelper
{
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
}