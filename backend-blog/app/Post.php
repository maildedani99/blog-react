<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $guarded = [
        'id',
    ];

   
    public function icon()
    {
        return $this->hasOne('App\Icon', 'icon_id');
    }
}
