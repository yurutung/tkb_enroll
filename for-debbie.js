document.getElementById("class_selector").value = "V5<6>JN:;<=>?B=BD@EGCI";
getBranch();
// 記得換日期
document.getElementById("date_selector").value = "2023-07-13";
getSessionAndTime();
document.getElementById("branch_selector").value = "WF";
getSessionAndTime();
document.getElementsByName("session_time")[0].checked = true;
document.getElementsByName("session_time")[1].checked = true;
document.getElementsByName("session_time")[2].checked = true;
toSend();
