<?php

namespace App\Http\Requests\Title;

use App\Http\Requests\Interfaces\IFormRequest;
use App\Utils\HTTP\HTTPMethods;
use Illuminate\Foundation\Http\FormRequest;
use Symfony\Component\HttpFoundation\Request;

class TitleRequest extends FormRequest implements IFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Request $request)
    {
        return $this->getRulesByRequestMethods($request->method());
    }

    public function getRulesByRequestMethods($method)
    {
        $rules = [];
        switch($method) {
            case HTTPMethods::PUT:
            case HTTPMethods::DELETE:
                $rules['id'] = 'required';
                break;
            case HTTPMethods::POST:
                $rules['name'] = 'required';
                $rules['short_name'] = 'required';
                $rules['full_name'] = 'required';
                $rules['lab_permission'] = 'required';
                $rules['lec_permission'] = 'required';
                $rules['exe_permission'] = 'required';
                $rules['sem_permission'] = 'required';
                $rules['pro_permission'] = 'required';
                $rules['min_hours'] = 'required';
                $rules['max_hours'] = 'required';
                $rules['warning_percent'] = 'required';
                break;
            default:
                break;
        }
        return $rules;
    }
}
