define([],function() {

  return [ '$scope' , 'toaster','dashboardService','$state','$window', 
  function($scope,toaster,dashboardService,$state, $window) {
    $scope.usrId    =     $window.sessionStorage.getItem("usrId");
    $scope.grpId    =     $window.sessionStorage.getItem("grpId");
    //$scope.mails =[{"id":"test1"}];

    function createTableRow() {
      var  table1Row=document.createElement("div");
      table1Row.setAttribute("class", "row tableRow");
      return table1Row;
    }

    function createTableColumn() {
      var  table1Row=document.createElement("div");
      table1Row.setAttribute("class", "col-md-2 col-sm-2 col-xs-2");
      return table1Row;
    }

    function createCheckBox(id) {
       var column =createTableColumn();
       column.setAttribute("class", "col-md-3 col-sm-2 col-xs-2");
       var checkBox=document.createElement("input");
       checkBox.setAttribute("type", "checkbox");
       column.appendChild(checkBox);
       column.setAttribute("id", id);
       return column;
    }

    function createStartFlag(id, value) {
      var column =createTableColumn();
      // 	<i class="fa fa-star" aria-hidden="true"></i>
       column.setAttribute("class", "col-md-2 col-sm-2 col-xs-2");
       var checkStar=document.createElement("i");
       checkStar.setAttribute("aria-hidden", value);
       column.appendChild(checkStar);
       column.setAttribute("id", id);
       return column;
    }


    function createSubject(id, subject, messageShort) {


    var column =createTableColumn();
    // 	<i class="fa fa-star" aria-hidden="true"></i>
    column.setAttribute("class", "col-md-10 col-sm-2 col-xs-2");
    var subjectLabel=document.createElement("label");
    var subjectBold=document.createElement("b");
    var textSujectNode = document.createTextNode(subject);

    subjectBold.appendChild(textSujectNode);
    var textMessageNode = document.createTextNode(messageShort);

    subjectLabel.setAttribute("class", "ctext");

    subjectLabel.appendChild(subjectBold);
    subjectLabel.appendChild(textMessageNode);

    column.appendChild(subjectLabel);
    return column;
    }


    function createFrom(id, from) {


      var column =createTableColumn();
      // 	<i class="fa fa-star" aria-hidden="true"></i>
      column.setAttribute("class", "col-md-2 col-sm-2 col-xs-2");
      var fromLabel=document.createElement("label");
      fromLabel.setAttribute("class", "ctext");
      var fromTextNode = document.createTextNode(from);
      fromLabel.appendChild(fromTextNode);
      column.appendChild(fromLabel);
      return column;
      }


      function createReceived(id, receivedDate) {
        var column =createTableColumn();
        column.setAttribute("class", "col-md-2 col-sm-2 col-xs-2");
        var receivedDateLabel=document.createElement("label");
        receivedDateLabel.setAttribute("class", "ctext");
        var receivedDateNode = document.createTextNode(receivedDate);
        receivedDateLabel.appendChild(receivedDateNode);
        column.appendChild(receivedDateLabel);
        return column;
      }
      

    $scope.getCardDetail=function() {
          dashboardService.mail({ 'grantType' : 'password' 
                      ,'clientId' :'CLIENTSP'
                      ,'scope' : 'GSA'
                      ,'usrId' : $scope.usrId
                      ,'grpId' : $scope.grpId
                      //,'password'    : $scope.password
                      ,'redirectURI' : 'http://localhost:5000/'}, function(resp) {
          
                        $scope.mails = resp;
                       

                      var MailId = document.getElementById("MailId");
                      $scope.mails.forEach(function(mail) {
                        var table1Row= createTableRow();
                        var table1Row1Colum1 = createTableColumn();
                        var table1Row1Colum2 = createTableColumn();
                        var  table2Row=createTableRow();
                        var  table3Row=createTableRow();

                        var checkBox=createCheckBox("id1Check");
                        var starFlag=createStartFlag("id1Star", true);
                        var from = createFrom("id1From", mail.request.from_list[0]);
                        var subject = createSubject("id1Star", mail.request.subject, mail.request.short_body);
                        var recived  = createReceived("idReceived", mail.request.dt_created);


                        table1Row1Colum2.setAttribute("class", "col-md-10 col-sm-2 col-xs-2");

                        table2Row.appendChild(starFlag);
                        table2Row.appendChild(checkBox);

                        table3Row.appendChild(from);
                        table3Row.appendChild(subject);

                        table1Row1Colum2.appendChild(table3Row);
                        table1Row1Colum1.appendChild(table2Row);

                        table1Row.appendChild(table1Row1Colum1);
                        table1Row.appendChild(table1Row1Colum2);
                        
                        MailId.appendChild(table1Row);


                      });
                     
/**   
 * <div class="row tableRow">
									<div class="clearfix visible-xs"></div>
									<div class="clearfix visible-sm"></div>
									
									<div class="col-md-2 col-sm-2 col-xs-2">
										<div  class="row tableRow">
											<div  class="col-md-3 col-sm-2 col-xs-2">
												<input type="checkbox">
											</div>
											<div  class="col-md-3 col-sm-2 col-xs-2">
												<i class="fa fa-star" aria-hidden="true"></i>
											</div>	
											<div  class="col-md-3 col-sm-2 col-xs-2">
											<i class="fa fa-exclamation" aria-hidden="true"></i>
											</div>
											
											<div  class="col-md-3 col-sm-2 col-xs-2">
												<i class="fa fa-paperclip" aria-hidden="true"></i>
											</div>
										</div>
									</div>
									<div class="col-md-2 col-sm-2 col-xs-2">
										<label class="clabel"> Duraimurugan Govindaraj </label>
									</div>
									<div class="col-md-6 col-sm-2 col-xs-2">
										
										<b> Test Mail</b> : <i> This is test</i>

									</div>
									<div class="col-md-2 col-sm-2 col-xs-2">
										2 min
									</div>
								</div>
 */


                      });
    };


    $scope.$watch('$viewContentLoaded', function(){
      //Here your view content is fully loaded !!
     // 2 alert('on viewContentLoaded watch');
      // $scope.getUserDetail();
      $scope.getCardDetail();
    });
  }];
});