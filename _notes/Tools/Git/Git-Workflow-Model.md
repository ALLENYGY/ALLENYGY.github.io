---
Title: "[[Git-Workflow-Model]]"
status: DONE
tags:
  - Docker
  - NOTE
Author:
  - AllenYGY
created: 2024-01-22T22:21
updated: 2024-03-21T22:58
---

# [[Git-Workflow-Model]] 

## GitFlow

- **Branch**
    - **main**  主线/基线分支 **主要分支**
        - 只接受来自hotfix和release的合并请求
        - 不允许直接push修改
    - **hotfix** 线上版本bug热修复分支 **辅助分支**
        - 用于解决线上问题
        - 修复完成后合并回main分支
        - 一般合并后删除
        - 命名：hotfix-#issueid-desc
    - **release** 预发布分支 **辅助分支**
        -  预发布分支从开发分支分离
        - 在语法不分支解决问题并合并回开发分支
        - 当预发布分支稳定后，合并回主分支和开发分支 
    - **develop** 开发分支 **主要分支**
        - 从主分支分离 
    - **feature** 功能分支 **辅助分支**
        - 从开发分支分离
        - 合并回开发分支
> 主要分支:长期存在
> 辅助分支:完成对应功能后删除
- **Version Rule** 版本号规则
    - **Major Version**(主版本)：主要的功能变化或重大更新
    - **Minor Version**(次版本)：一些新的功能、改进和更新，通常不会影响现有功能
    - **Patch Version**(修订版本)：一些小的bug修复，安全漏洞补丁等，通常不会更改现有的功能和接口
## GitHub Flow

![GitHubFlow](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Git/GitHubFlow.png)