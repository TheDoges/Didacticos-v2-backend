<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Requests\Auth\API\Passport\LoginRequest;
use App\Http\Requests\Auth\API\Passport\RegisterRequest;
use App\Utils\Response\ResponseMessages;
use App\Utils\Response\ResponseHelper;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;
use Symfony\Component\HttpFoundation\Response;

class PassportController extends Controller
{
    use ResponseHelper;

    /**
     * login user via api
     *
     * @return \Illuminate\Http\Response
     */

    public function login(LoginRequest $request){
        if(Auth::attempt(['email' => $request['email'], 'password' => $request['password']])){
            $user = Auth::user();
            $success['token'] =  'Bearer ' .$user->createToken('Didacticos_v2')->accessToken;
            return $this->prepareJsonSuccessResponse($success, Response::HTTP_OK);
        } else{
            return $this->prepareJsonErrorResponse(ResponseMessages::UNAUTHORISED, Response::HTTP_UNAUTHORIZED);
        }

    }

    public function logout()
    {
        if (Auth::guard('api')->check()) {
            Auth::guard('api')->user()->oAuthAcessTokens()->delete();
            return $this->prepareJsonSuccessResponse(ResponseMessages::OPERATION_SUCCESSFUL, Response::HTTP_OK);
        } else {
            return $this->prepareJsonErrorResponse(ResponseMessages::UNAUTHORISED, Response::HTTP_OK);
        }
    }

    /**
     * Register user via api
     *
     * @return \Illuminate\Http\Response
     */

    public function register(RegisterRequest $request) {

        $input = $request->validated();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  'Bearer ' .$user->createToken('Didacticos_v2')->accessToken;
        $success['name'] =  $user->name;

        return $this->prepareJsonSuccessResponse($success, Response::HTTP_OK);
    }

    /**
     * get user details via api
     *
     * @return \Illuminate\Http\Response
     */

    public function getDetails() {
        $user = Auth::user();
        return $this->prepareJsonSuccessResponse($user, Response::HTTP_OK);
    }
}
