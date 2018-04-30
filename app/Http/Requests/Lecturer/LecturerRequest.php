<?php

namespace App\Http\Requests\Lecturer;

use App\Http\Requests\Interfaces\IFormRequest;
use App\Models\Lecturer;
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
                $rules = Lecturer::STORE_RULES;
                break;
            default:
                break;
        }
        return $rules;
    }
}
