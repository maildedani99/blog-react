<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Post;
use App\Icon;
class PostController extends Controller
{


    public function all()
    {
        Log::info('Retrieving all POSTS');
        return response()->json(Post::all());
    }
    /**
     * Display a listing of the resource.
     *
     * 
     */
    public function index()
    {
        Log::info('Retrieving all posts');
        $data = Post::with('icon')->get();
        dd($data);

    }
   
    /**
     * Store a newly created resource in storage.
     *
     * 
     */
    public function create(Request $request)
    {
        

        $room = Post::create([
            'title' => $request->title,
            'description' => $request->description,
            'icon_id' => $request->icon_id,
            'content' => $request->content,
        ]);
        return response()->json($room);
    }

    /**
     * Display the specified resource.
     *
     * 
     */
    public function show($id)
    {
        Log::info('Retrieving post by Id');
        $post = Post::findOrFail($id);
        return response()->json($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * 
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $post = Post::find($id);
        $post->delete();
      return response()->json([
        'message' => 'Data deleted successfully!'
      ]);
    }
}
