var course = ["", "V5<6>JN:;<=>?B=BD@EGCI", "V5<6>JO:;<=>?B=BD@EICI", "V5<6>J:;<=>BD=BD@EHCI", "V5<77JNM;<=>?A=BE@EGCI"]
// 1->經濟, 2->財管, 3->統計, 4->計量經濟
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
