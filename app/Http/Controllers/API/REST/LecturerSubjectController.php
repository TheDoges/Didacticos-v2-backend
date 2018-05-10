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

    public function getLecturerSubjectBySemester(Request $request) {
        $v = Validator::make($request->all(), LecturerSubject::GET_ALL_BY_SEMESTER_RULES);
        if($v->fails()) {
            return $this->prepareJsonErrorResponse($v->errors(), Response::HTTP_BAD_REQUEST);
        }
        $associativeArrayOfSubjectsById = $this->getAssociativeArrayOfModelById(Subject::class);
        $allLecturerSubject = LecturerSubject::all();
        $associativeArrayOfLecturerSubjectBySemesterId = $this->getAssociativeArrayOfLecturerSubjectBySemesterId($allLecturerSubject, $associativeArrayOfSubjectsById);
        if(!isset($associativeArrayOfLecturerSubjectBySemesterId[$request[SUBJECT::SEMESTER_ID]])) {
            return $this->prepareJsonErrorResponse(ResponseMessages::OPERATION_FAILED, Response::HTTP_BAD_REQUEST);
        }
        return $this->prepareJsonSuccessResponse($associativeArrayOfLecturerSubjectBySemesterId[$request[SUBJECT::SEMESTER_ID]], Response::HTTP_OK);

    }

    private function getAssociativeArrayOfModelById($modelClass) {
        $array = [];
        $allModels = $modelClass::all();
        foreach($allModels as $model) {
            $array[$model[$modelClass::ID]] = $model;
        }
        return $array; 
    }

    private function getAssociativeArrayOfLecturerSubjectBySemesterId($lecturerSubject, $subjectsArray) {
        $array = [];
        foreach($lecturerSubject as $ls) {
            $semesterId = $subjectsArray[$ls[LecturerSubject::SUBJECT_ID]][Subject::SEMESTER_ID];
            $array[$semesterId] = isset($array[$semesterId]) ? $array[$semesterId] : [];
            array_push($array[$semesterId], $ls);
        }
        return $array;
    }
}
