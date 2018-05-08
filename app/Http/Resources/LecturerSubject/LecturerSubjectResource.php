<?php

namespace App\Http\Resources\LecturerSubject;

use Illuminate\Http\Resources\Json\JsonResource;

class LecturerSubjectResource extends JsonResource
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
            'lecturer_id' => $this->lecturer_id,
            'subject_id' => $this->subject_id,
            'hours' => $this->hours
        ];
    }
}
