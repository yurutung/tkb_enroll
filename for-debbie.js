var course = ["", "V5<6>JO:;<=>?B=BD@EICI", "V5<6>J:;<=>BD=BD@EHCI", "V5<77JN:;<=>?C=BD@EGCI", "V5<77JNM;<=>?A=BE@EGCI"]
// 1->財管(張翔)-->3594/分鐘   有效日期:2023-12-31 
// 2->統計學(張翔)-->7908/分鐘   有效日期:2023-12-31
// 3->經濟學(牧翰)-->11362/分鐘   有效日期:2023-12-31
// 4->計量經濟學(張翔)-->3438/分鐘   有效日期:2023-12-31
// 改course後面的數字
document.getElementById("class_selector").value = course[1];
getBranch();
// 記得換日期
document.getElementById("date_selector").value = "2023-07-13";
document.getElementById("branch_selector").value = "WF";
getSessionAndTime();
document.getElementsByName("session_time")[0].checked = true;
document.getElementsByName("session_time")[1].checked = true;
document.getElementsByName("session_time")[2].checked = true;
toSend();
