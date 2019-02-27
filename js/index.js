$(document).ready(main);

function indexOfMax(arr) {
	"use strict";
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

function main() {
	"use strict";
	$(".answer-card").click(function () {
		if($(this).hasClass("bg-selected")) {
			$(this).removeClass("bg-selected").addClass("bg-light");
		}
		else {
			$(this).parent().parent().parent().find(".answer-card").removeClass("bg-selected").addClass("bg-light");
			$(this).addClass("bg-selected").removeClass("bg-light");
		}
	});
	$("#submit").click(function () {
		var ans = $(".bg-selected > .card-body").map(function() {return this.id;});
		
		if (ans.length < 10) {
			$(".bg-not-done").removeClass("bg-not-done").addClass("bg-secondary");
			$(".bg-secondary:not(:has(.bg-selected))").removeClass("bg-secondary").addClass("bg-not-done");
			$("#submit").text("Answer 'em all first");
			return;
		}
		
		var aiyana = 0;
		var adam = 0;
		var owen = 0;
		var dan = 0;
		var jillian = 0;
		var jason = 0;
		var andrew = 0;
		var georgia = 0;
		var sam = 0;
		
		for (var i = 0; i < 10; i++) {
			switch (ans[i]) {
				case "q1-a1":
					dan += 2;
					owen += 1;
					sam += 1;
					aiyana -= 1;
					adam -= 1;
					break;
				case "q1-a2":
					aiyana += 1;
					adam += 1;
					georgia += 1;
					jillian -= 1;
					andrew -= 1;
					break;
				case "q1-a3":
					jillian += 1;
					andrew += 1;
					jason -= 1;
					georgia -= 1;
					break;
				case "q1-a4":
					jason += 1;
					dan -= 1;
					owen -= 1;
					break;
					
				case "q2-a1":
					adam += 1;
					georgia += 1;
					dan -= 1;
					sam -= 1;
					break;
				case "q2-a2":
					jason += 1;
					andrew += 1;
					aiyana -= 1;
					owen -= 1;
					georgia -= 1;
					break;
				case "q2-a3":
					aiyana += 2;
					dan += 1;
					jason -= 1;
					adam -= 1;
					break;
				case "q2-a4":
					jillian += 1;
					owen += 1;
					andrew -= 1;
					break;
					
				case "q3-a1":
					owen += 2;
					adam += 1;
					jillian -= 1;
					jason -= 1;
					sam += 1;
					break;
				case "q3-a2":
					owen -= 1;
					dan -= 1;
					jillian += 1;
					georgia -= 1;
					sam -= 1;
					break;
				case "q3-a3":
					aiyana += 1;
					dan += 1;
					andrew -= 1;
					georgia += 1;
					break;
				case "q3-a4":
					aiyana -= 1;
					adam -= 1;
					jason += 1;
					andrew += 1;
					break;
					
				case "q4-a1":
					dan -= 1;
					break;
				case "q4-a2":
					dan -= 1;
					break;
				case "q4-a3":
					break;
				case "q4-a4":
					dan += 2;
					break;
					
				case "q5-a1":
					aiyana -= 1;
					owen -= 1;
					dan -= 1;
					jillian += 1;
					jason -= 1;
					break;
				case "q5-a2":
					adam -= 1;
					owen += 1;
					dan += 1;
					jason += 1;
					break;
				case "q5-a3":
					aiyana += 1;
					jillian -= 1;
					georgia -= 1;
					andrew += 1;
					sam -= 1;
					break;
				case "q5-a4":
					adam += 1;
					georgia += 2;
					andrew -= 1;
					sam += 1;
					break;
					
				case "q6-a1":
					jason += 2;
					adam += 1;
					andrew += 1;
					georgia += 1;
					sam -= 1;
					break;
				case "q6-a2":
					jason -= 1;
					jillian -= 1;
					georgia -= 1;
					sam += 1;
					break;
				case "q6-a3":
					aiyana -= 1;
					adam -= 1;
					dan += 1;
					owen -= 1;
					jillian += 1;
					break;
				case "q6-a4":
					aiyana += 1;
					owen += 1;
					dan -= 1;
					andrew -= 1;
					break;
					
				case "q7-a1":
					adam += 1;
					owen += 1;
					jillian += 1;
					jason += 1;
					georgia += 1;
					sam += 1;
					break;
				case "q7-a2":
					andrew += 2;
					break;
				case "q7-a3":
					dan += 1;
					break;
				case "q7-a4":
					aiyana += 1;
					break;
					
				case "q8-a1":
					adam += 1;
					owen += 1;
					dan += 1;
					jillian += 1;
					jason += 1;
					andrew += 1;
					sam += 1;
					break;
				case "q8-a2":
					aiyana += 1;
					break;
				case "q8-a3":
					aiyana -= 1;
					break;
				case "q8-a4":
					georgia += 2;
					adam -= 1;
					owen -= 1;
					dan -= 1;
					jillian -= 1;
					jason -= 1;
					andrew -= 1;
					sam -= 1;
					break;
					
				case "q9-a1":
					aiyana += 1;
					jillian += 1;
					jason += 1;
					andrew += 1;
					break;
				case "q9-a2":
					owen += 1;
					break;
				case "q9-a3":
					dan += 1;
					aiyana -= 1;
					jillian -= 1;
					jason -= 1;
					andrew -= 1;
					break;
				case "q9-a4":
					sam += 2;
					adam += 1;
					aiyana += 1;
					break;
					
				case "q10-a1":
					adam -= 2;
					break;
				case "q10-a2":
					adam -= 2;
					break;
				case "q10-a3":
					aiyana += 1;
					break;
				case "q10-a4":
					adam += 2;
					break;
			}
		}
		var sln = [aiyana, adam, owen, dan, jillian, jason, andrew, georgia, sam];
		switch (indexOfMax(sln)) {
			case 0:
				window.location.href = "./aiyana.html";
				break;
			case 1:
				window.location.href = "./adam.html";
				break;
			case 2:
				window.location.href = "./owen.html";
				break;
			case 3:
				window.location.href = "./dan.html";
				break;
			case 4:
				window.location.href = "./jillian.html";
				break;
			case 5:
				window.location.href = "./jason.html";
				break;
			case 6:
				window.location.href = "./andrew.html";
				break;
			case 7:
				window.location.href = "./georgia.html";
				break;
			case 8:
				window.location.href = "./sam.html";
				break;
		}
	});
}