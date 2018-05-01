<?php

namespace App\Http\Resources\Subject;

use App\Http\Resources\Degree\DegreeResource;
use App\Http\Resources\Field\FieldResource;
use App\Http\Resources\Semester\SemesterResource;
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
        return [
            'id' => $this->id,
            'name' => $this->name,
            'type' => $this->type,
            'hours' => $this->hours,
            'field' => new FieldResource($this->field),
            'semester' => new SemesterResource($this->semester),
            'degree' => new DegreeResource($this->degree),
            'semesterNumber' => $this->semester_number
        ];
    }
}
