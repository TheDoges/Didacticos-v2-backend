<?php

namespace App\Http\Controllers\API\REST;

use App\Models\LecturerSubject;
use Illuminate\Http\Request;
use App\Http\Resources\LecturerSubject\LecturerSubjectResource;
use App\Http\Controllers\Controller;
use App\Http\Requests\LecturerSubject\LecturerSubjectRequest;
use App\Models\Lecturer;
use App\Utils\Controller\ControllerHelper;
use Symfony\Component\HttpFoundation\Response;
use App\Utils\Response\ResponseMessages;
use App\Models\Subject;
use Validator;
use App\Models\Semester;

class LecturerSubjectController extends Controller
{
    use ControllerHelper;

    public function __construct() {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $this->prepareJsonSuccessResponse(LecturerSubjectResource::collection(LecturerSubject::all()), Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LecturerSubjectRequest $lsRequest)
    {
        //
        $lecturerSubject = new LecturerSubject();
        $lecturerSubject->fill($lsRequest->all());
        $lecturerSubject->save();

        return $this->prepareJsonSuccessResponse(new LecturerSubjectResource($lecturerSubject), Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LecturerSubject  $lecturerSubject
     * @return \Illuminate\Http\Response
     */
    public function show(LecturerSubject $lecturerSubject)
    {
        //
        if($lecturerSubject != null) {
            return $this->prepareJsonSuccessResponse(new LecturerSubjectResource($lecturerSubject), Response::HTTP_OK);
        } else {
            return $this->prepareJsonErrorResponse(ResponseMessages::MODEL_NOT_FOUND, Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LecturerSubject  $lecturerSubject
     * @return \Illuminate\Http\Response
     */
    public function update(LecturerSubjectRequest $lsRequest, LecturerSubject $lecturerSubject)
    {
        if($lecturerSubject != null) {
            $lecturerSubject->fill($lsRequest->all());
            $lecturerSubject->save();
            return $this->prepareJsonSuccessResponse(new LecturerSubjectResource($lecturerSubject), Response::HTTP_OK);
        } else {
            return $this->prepareJsonErrorResponse(ResponseMessages::MODEL_NOT_FOUND, Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LecturerSubject  $lecturerSubject
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $lsRequest, LecturerSubject $lecturerSubject)
    {
        $message = ResponseMessages::MODEL_NOT_FOUND;
        if($lecturerSubject != null) {
            $lecturerSubject->delete();
            return $this->prepareJsonSuccessResponse(ResponseMessages::OPERATION_SUCCESSFUL, Response::HTTP_OK);
        } else {
            return $this->prepareJsonErrorResponse(ResponseMessages::MODEL_NOT_FOUND, Response::HTTP_BAD_REQUEST);
        }
    }

    public function getLecturerSubjectBySemester(Semester $semester) {
        if($semester != null) {
            return $this->prepareJsonSuccessResponse(LecturerSubject::getLecturerSubjectBySemesterId($semester[Semester::ID]), Response::HTTP_OK);
        } else {
            return $this->prepareJsonErrorResponse(ResponseMessages::MODEL_NOT_FOUND, Response::HTTP_BAD_REQUEST);
        }
    }
}
