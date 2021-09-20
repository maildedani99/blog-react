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

    public function create(Request $request)
    {
        $post = Post::create([
            'title' => $request->title,
            'description' => $request->description,
            'icon_id' => $request->icon_id,
            'content' => $request->content,
        ]);
        $lastPost = Post::all()->last();
        return response()->json($lastPost);
    }

    public function last()
    {
        Log::info('Retrieving last post');
        //dd($lastPost);
        return response()->json($lastPost);
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
        
            $post = Post::find($id);

            $post->title = $request->input('title');
            $post->icon_id = $request->input('icon_id');
            $post->description = $request->input('description');
            $post->content = $request->input('content');
            $post->save();
    
            return response()->json($post);
           
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
