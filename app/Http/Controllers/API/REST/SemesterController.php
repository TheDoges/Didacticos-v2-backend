<?php

namespace App\Http\Controllers\API\REST;

use App\Http\Controllers\Controller;
use App\Http\Requests\Semester\SemesterRequest;
use App\Http\Resources\Semester\SemesterResource;
use App\Models\Semester;
use App\Utils\Controller\ControllerHelper;
use App\Utils\Response\ResponseMessages;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Validator;
use App\Models\LecturerSubject;
use App\Models\Subject;

class SemesterController extends Controller
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
        return SemesterResource::collection(Semester::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SemesterRequest $request)
    {
        //
        $semester = new Semester();
        $semester->fill($request->validated());
        $semester->save();
        return $this->prepareJsonSuccessResponse(new SemesterResource($semester), Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Semester  $semester
     * @return \Illuminate\Http\Response
     */
    public function show(Semester $semester)
    {
        //
        return new SemesterResource($semester);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Semester  $semester
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Semester $semester)
    {
        //
        unset($request['id']);
        $isUpdated = $this->updateDataInModel($request->all(), $semester);
        $message = $isUpdated ? new SemesterResource($semester) : ResponseMessages::NOTHING_TO_UPDATE;
        return $this->prepareJsonSuccessResponse($message, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Semester  $semester
     * @return \Illuminate\Http\Response
     */
    public function destroy(Semester $semester)
    {
        //
        $semester->delete();
        return $this->prepareJsonSuccessResponse(ResponseMessages::OPERATION_SUCCESSFUL, Response::HTTP_OK);
    }

    /**
     * Store all a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeAll(Request $request)
    {
        //
        $response = $this->storeSelectedModels($request->all(), Semester::class);
        return $this->prepareLoginSuccessResponse($response, ResponseMessages::OPERATION_SUCCESSFUL);
    }

    /**
     * Destroy all a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function deleteAll(Request $request)
    {
        //
        $response = $this->deleteSelectedModels($request->all(), Semester::class);
        return $this->prepareLoginSuccessResponse($response, ResponseMessages::OPERATION_SUCCESSFUL);
    }

    public function copySemesterById(Request $request) {
        $v = Validator::make($request->all(), Semester::COPY_SEMESTER_RULES);
        if($v->fails()) {
            return $this->prepareJsonErrorResponse($v->errors(), Response::HTTP_BAD_REQUEST);
        }
        $semester = Semester::find($request[Semester::ID]);
        if($semester != null) {
            $subjects = $semester->subjects;
            $newSemester = $semester->replicate();
            $newSemester[Semester::NAME] = $request[Semester::NAME];
            $newSemester[Semester::YEAR] = $request[Semester::YEAR];
            $newSemester->save();
            $subjectsIdRelations = [];
            foreach($subjects as $key => $subject) {
                $newSubject = $subject->replicateToSemester($newSemester[Semester::ID]);
                $subjectsIdRelations[$subject[Subject::ID]] = $newSubject[Subject::ID];
            }
            $lecturerSubjects = LecturerSubject::getLecturerSubjectBySemesterId($semester[Semester::ID]);
            $newls = [];
            foreach($lecturerSubjects as $key => $lecturerSubject) {
                if(isset($subjectsIdRelations[$lecturerSubject[LecturerSubject::SUBJECT_ID]])){
                    $newls[$key] = $lecturerSubject->replicateLecturerSubjectWithNewSubjectId($subjectsIdRelations[$lecturerSubject[LecturerSubject::SUBJECT_ID]]);
                }
            }

            return $this->prepareJsonSuccessResponse($newSemester[Semester::ID], Response::HTTP_OK);
        }
        return $this->prepareJsonErrorResponse(ResponseMessages::MODEL_NOT_FOUND, Response::HTTP_BAD_REQUEST);
    }
}
