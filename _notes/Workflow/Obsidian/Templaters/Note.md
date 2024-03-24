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
tp.user.title=title;
-%>
Create Time: <% tp.date.now("Do MMMM YYYY") %>
Title: "[[<% title %>]]"
status: UNFINISHED 
Author:
  - AllenYGY
tags:
  - NOTE
---

# [[<%tp.user.title%>]]
