---
<%*
let title = tp.file.title;
if (title.startsWith("Untitled")) {
 title = await tp.system.prompt("Enter the title of the Contest");
 if(!title) return;
}
if (title == "") {
title = "Untitled";
} else {
await tp.file.rename(title);
}
await tp.file.move("Contest/Leetcode/" + title)
tp.user.title=title;
-%>
Title: "[[<% title %>]]"
Contest: leetcode
tags: Contest
Rank: 
Total: 
Credits: 
T1: <% tp.system.suggester(["AC", "WA", "TLE","UC","NC"], ["Accepted", "Wrong Answer", "Time Limit Exceeded","Uncommitted","New Complement"], true, 'T1 status')%>
T2: <% tp.system.suggester(["AC", "WA", "TLE","UC","NC"], ["Accepted", "Wrong Answer", "Time Limit Exceeded","Uncommitted","New Complement"], true, 'T2 status')%>
T3: <% tp.system.suggester(["AC", "WA", "TLE","UC","NC"], ["Accepted", "Wrong Answer", "Time Limit Exceeded","Uncommitted","New Complement"], true, 'T3 status')%>
T4:<% tp.system.suggester(["AC", "WA", "TLE","UC","NC"], ["Accepted", "Wrong Answer", "Time Limit Exceeded","Uncommitted","New Complement"], true, 'T4 status')%>
Create Time: <% tp.file.creation_date("YYYY-MM-DD") %>
Author: 
- AllenYGY
---

# [[<%tp.user.title%>]](<% tp.file.cursor() %>)

## #T1

#灵神题解[T1]()

## #T2

#灵神题解[T2]()

## #T3

#灵神题解[T3]()

## #T4

#灵神题解[T4]()



