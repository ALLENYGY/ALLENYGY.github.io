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
await tp.file.move("Contest/Lanqiao/" + title)
tp.user.title=title;
-%>
Title: "[[<% title %>]]"
Contest: lanqiao
tags: Contest
theme: 
Create Time: <% tp.file.creation_date("YYYY-MM-DD") %>
Author: 
- AllenYGY
---

# [[<%tp.user.title%>]](<%tp.file.cursor() %>)


