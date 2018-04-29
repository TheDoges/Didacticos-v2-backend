<?php

namespace App\Http\Requests\Semester;

use App\Http\Requests\Interfaces\sIFormRequest;
use App\Utils\HTTP\HTTPMethods;
use Illuminate\Foundation\Http\FormRequest;
use Symfony\Component\HttpFoundation\Request;

class SemesterRequest extends FormRequest implements IFormRequest
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
                $rules['year'] = 'required';
                break;
            default:
                break;
        }
        return $rules;
    }
}
