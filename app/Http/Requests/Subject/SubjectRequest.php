<?php

namespace App\Http\Requests\Subject;

use App\Http\Requests\Interfaces\IFormRequest;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class SubjectRequest extends FormRequest implements IFormRequest
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
            case HTTPMethods::POST:
                $rules['name'] = 'required';
                $rules['type'] = 'required';
                $rules['hours'] = 'required';
                $rules['field_id'] = 'required';
                $rules['semester_id'] = 'required';
                $rules['semester_number'] = 'required';
                break;
            default:
                break;
        }

        return $rules;
    }
}
