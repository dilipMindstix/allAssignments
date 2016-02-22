app.controller('angularServicesController',function($scope,$http)
{
	$scope.setStyle=function(clicked)
	{
		if(clicked==true)
			return "list-group-item active";
		else
			return "list-group-item";
	}
});
