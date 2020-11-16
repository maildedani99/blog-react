<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Icon extends Model
{
    protected $guarded = [
        'id',
    ];


    public function posts()
    {
        return $this->belongsToMany('App\Post', 'icon_id');
    }
}
