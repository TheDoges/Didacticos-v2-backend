<?php

namespace App\Http\Requests\Subject;

use App\Http\Requests\Interfaces\IFormRequest;
use App\Models\Subject;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use App\Utils\HTTP\HTTPMethods;

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
                $rules = Subject::STORE_RULES;
                break;
            default:
                break;
        }

        return $rules;
    }
}
