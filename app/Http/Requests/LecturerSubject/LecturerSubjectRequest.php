<?php

namespace App\Http\Requests\LecturerSubject;

use Illuminate\Foundation\Http\FormRequest;
use App\Http\Requests\Interfaces\IFormRequest;
use App\Models\LecturerSubject;
use App\Utils\HTTP\HTTPMethods;
use App\Models\Lecturer;
use Symfony\Component\HttpFoundation\Request;

class LecturerSubjectRequest extends FormRequest implements IFormRequest
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
        return LecturerSubject::RULES[$request->method()];
    }

    public function getRulesByRequestMethods($method)
    {
        //
    }
}
