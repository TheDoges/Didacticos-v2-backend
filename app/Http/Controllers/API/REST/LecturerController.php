<?php

namespace App\Http\Controllers\API\REST;

use App\Http\Controllers\Controller;
use App\Http\Resources\Lecturer\LecturerResource;
use App\Models\Lecturer;
use App\Utils\Controller\ControllerHelper;
use App\Utils\Response\ResponseMessages;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\Lecturer\LecturerRequest;
use App\Http\Resources\Subject\SubjectResource;
use App\Http\Requests\Subject\SubjectRequest;
use App\Models\Subject;
use Validator;
use Symfony\Component\HttpFoundation\Request;

class LecturerController extends Controller
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
        return LecturerResource::collection(Lecturer::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LecturerRequest $request)
    {
        //
        $lecturer = new Lecturer();
        $lecturer->fill($request->validated());
        $lecturer->save();
        return $this->prepareJsonSuccessResponse(new LecturerResource($lecturer), Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Lecturer  $lecturer
     * @return \Illuminate\Http\Response
     */
    public function show(Lecturer $lecturer)
    {
        //
        return new LecturerResource($lecturer);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Lecturer  $lecturer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Lecturer $lecturer)
    {
        //
        unset($request['id']);
        $isUpdated = $this->updateDataInModel($request->all(), $lecturer);
        $message = $isUpdated ? new LecturerResource($lecturer) : ResponseMessages::NOTHING_TO_UPDATE;
        return $this->prepareJsonSuccessResponse($message, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Lecturer  $lecturer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Lecturer $lecturer)
    {
        //
        $lecturer->delete();
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
        $response = $this->storeSelectedModels($request->all(), Lecturer::class);
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
        $response = $this->deleteSelectedModels($request->all(), Lecturer::class);
        return $this->prepareLoginSuccessResponse($response, ResponseMessages::OPERATION_SUCCESSFUL);
    }

    /* RELATIONS WITH SUBJECT */
    //-------------------------
    public function getSubjects(Lecturer $lecturer) {
        return SubjectResource::collection($lecturer->subjects);
    }

    public function storeSubject(Lecturer $lecturer, Request $request) {
        $message = null;
        $data = null;
        $v = Validator::make($request->all(), Subject::UPDATE_RULES);
        if($v->fails()) {
            $data = $v->errors();
            $message = ResponseMessages::OPERATION_FAILED;
        } else {
            $lecturer->subjects()->attach($request['id']);
            $data = Subject::find($request['id']);
            $message = ResponseMessages::OPERATION_SUCCESSFUL;
        }

        return $this->prepareJsonMessage($message, $data);
    }

    

    public function updateSubject(Lecturer $lecturer, SubjectRequest $sRequest) {
        // $subject = $lecturer->
        // unset($sRequest['id']);
        // $isUpdated = $this->updateDataInModel($sRequest->all(), $subject);
        // $message = $isUpdated ? new SubjectResource($subject) : ResponseMessages::NOTHING_TO_UPDATE;
        // return $this->prepareJsonSuccessResponse($message, Response::HTTP_OK);
    }
}
