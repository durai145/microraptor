define([],function(){

return ['$resource',function  ($resource) {
	// body...
	return $resource('/api/pillar/user/v2/:task', null,
    {
        doLogin  : { method: 'POST', params: {"task" : "login"}} ,
        register  : { method: 'POST', params: {"task" : "register"}} 
    });
	
}
];

});