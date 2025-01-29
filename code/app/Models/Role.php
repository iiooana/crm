<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Models\User;

class Role extends Model
{
    public function users(): BelongsToMany{
        //-withTimestamps()
        return $this->belongsToMany(User::class);
    }
}
