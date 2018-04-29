<?php

namespace App\Http\Resources\Subject;

use Illuminate\Http\Resources\Json\JsonResource;

class SubjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $field = $this->field();
        $semester = $this->semester();
        $degree = $field->degree();
        return [
            'id' => $this->id,
            'name' => $this->name,
            'type' => $this->type,
            'hours' => $this->hours,
            'field' => $field->name . '/' . $field->type,
            'semester' => $semester->type . '/' . $semester->year,
            'degree' => $degree->name . '/' . $degree->alias,
            'semesterNumber' => $this->semester_number
        ];
    }
}
