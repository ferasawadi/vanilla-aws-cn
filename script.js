function sayHello() {
	alert('Hello there');
}
// const container = document.getElementsByClassName("chat-area");
//
//
// function initChat() {
// 	alert('welcome...')
// }
// 	const createWidge
// 	t = document.createElement("button");
// 	createWidget.setAttribute("class", 'chat-widget-container');
// 	createWidget.innerHTML = 'Start Chat'
//
// }

// (function () ){
// 	connect.ChatInterface.init({
// 		containerId: 'root' // This is the id of the container where you want the widget to reside
// 	});
//
// 	$('#contactDetails').submit(function (e) {
// 		e.preventDefault();
//
// 		customerName = $('#firstName').val();
// 		if (!customerName) {
// 			alert('you must enter a name & username');
// 			document.getElementById("contactDetails").reset();
// 		} else {
// 			var contactFlowId = "12345678-1234-1234-1234-123456789012"; // TODO: Fill in
// 			var instanceId = "12345678-1234-1234-1234-123456789012"; // TODO: Fill in
// 			var apiGatewayEndpoint = "https://<api-id>.execute-api.<region>.amazonaws.com/<stage>/"; // TODO: Fill in with the API Gateway endpoint created by your CloudFormation template
//
// 			console.log("this is the first name:" + customerName);
// 			document.getElementById("contactDetails").reset();
//
// 			connect.ChatInterface.initiateChat({
// 				name: customerName,
// 				region: "<region>", // TODO: fill in
// 				apiGatewayEndpoint: apiGatewayEndpoint,
// 				contactAttributes: JSON.stringify({
// 					"customerName": customerName
// 				}),
// 				contactFlowId: contactFlowId,
// 				instanceId: instanceId
// 			},successHandler, failureHandler);
//
// 		}
// 	});
// });

// function successHandler(chatSession) {
// 	console.log("success!");
// 	$('#section-chat').fadeIn(400);
//
// 	chatSession.onChatDisconnected(function(data) {
// 		$('#section-chat').hide('slide');
// 	});
// }
//
// function failureHandler(error) {
// 	console.log("There was an error: ");
// 	console.log(error);
// }
