<?php

namespace App\Http\Requests\Lecturer;

use App\Http\Requests\Interfaces\IFormRequest;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class LecturerRequest extends FormRequest implements IFormRequest
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
                $rules['surname'] = 'required';
                $rules['title_id'] = 'required';
                break;
            default:
                break;
        }
        return $rules;
    }
}
