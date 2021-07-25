---
title: GitLab使用手册
date: 2017-01-24 18:01:02
category: 工具
tags:
  - GitLab
---

GitLab 是一个用于仓库管理系统的开源项目，使用Git作为代码管理工具，并在此基础上搭建起来的web服务。随着Git的流行和DevOps的逐步落地，GitLab越来越成为日常工作中不可或缺的工具，本文是在实际开发过程中正确高效地使用GitLab方法的总结。

<!--more-->

## 1、GitLab设置

### 1.1 使用SSH代替账号密码进行认证

Git提供了账号密码、SSH、GPG三种方式访问代码，其中使用最多最为方便的是SSH。

#### 生成ssh key
生成ssh key需要[安装Git](http://dev.posun.co:600/root/GitLab-Manual/wikis/%E5%AE%89%E8%A3%85git)，在 Git Bash 中依次进行以下操作。

- 设置Git的全局user的name和email

```
git config --global user.name "xxx"
```
```
git config --global user.email "xxx@posun.cn"
```

- 生成ssh key

```
ssh-keygen -t rsa -C “xxx@posun.cn”
```

之后会看到提示输入保存ssh key的文件名和加密串，建议直接回车跳过。

- 查看ssh key

完成上述操作之后，可以在当前用户的 `home` 目录下的 `.ssh` 文件夹中看到生成的 key，**id_rsa** 是私钥，**id_rsa.pub** 是公钥。

#### 上传ssh key
点击GitLab导航栏的用户头像下拉选择 **设置**，在左侧菜单栏选择 **SSH密钥** 进入 SSH 密钥添加页面，使用文本编辑器打开 **id_rsa.pub** 文件并全选复制粘贴至密钥添加页面的相应位置，填写密钥标题，点击 **增加密钥** 按钮即可完成ssh key的上传。

#### 使用ssh的好处
使用ssh之后，使用git方式（不是http/https方式）pull和push代码时不用每次都填写账号密码，方便快捷，并且更加安全，但是请妥善保管ssh key，谨防泄漏。

### 1.2 设置语言偏好

在GitLab导航栏点击个人头像下拉选择 **设置**，在左侧菜单栏选择 **Profile** 进入个人配置页面，在 **主要设置** -> **Preferred language** 中选择 “简体中文”。

## 2、项目

### 2.1 如何新建一个项目

点击GitLab导航条上的 `+` 下拉选择 **新建项目** 进入项目创建页面，GitLab提供了以下三种方式创建项目。

#### 新建一个空白项目

填写项目路径、名称、描述，选择项目可见等级之后，点击 **创建项目** 按钮即可创建一个空白项目。新项目一般采用此方式进行创建。

#### 从模板创建

GitLab提供了三种项目模板：Ruby on Rails、Spring、NodeJS Express，可按需使用。

#### 从其它代码仓库导入项目

从GitHub等其它代码仓库导入项目。

### 2.2 如何管理项目成员

#### 添加/导入项目成员
进入项目页面，在左侧菜单栏选择 **设置** -> **成员**，在 **添加成员** 里依次选择 要邀请的成员（可多选）、角色权限和访问到期日期，点击 **添加到项目** 完成项目成员的添加。除了手动添加之外，还可以点击 **导入** 按钮进入导入成员页面，选择目标项目一键导入目标项目的成员。

#### 项目成员管理
项目成员页面还提供了成员管理的功能，可以修改成员的角色权限和访问到期日期，还可以踢出成员。

### 2.3 如何新建一个群组项目

#### 创建一个群组
在导航栏里点击 `+` 下拉选择 **新建群组** 进入新建群组页面，填写群组路径、群组名称、描述，上传群组图表，选择群组可见等级之后，点击 **创建群组** 按钮即可创建一个新的群组。

#### 新建群组项目
在群组主页点击 **新项目** 按钮进入新建群组项目页面，填写必要信息之后并提交即可创建一个群组项目，群组项目默认的可见等级为 **私有**，即只允许群组成员访问。

个人项目在 **设置** -> **成员** -> **与群组共享** 里可以将项目共享给指定群组的成员。

#### 子群组
在群组主页下拉选择并点击 **新子群组** 进入资群组创建页面，子群组可以对父群组的成员进一步细分，子群组成员可以访问父群组项目，非子群组的父群组成员无法访问子群组项目。

## 3、分支管理

### 3.1 分支的划分

工程的分支主要分为 **master**、**dev**、**hotfix**、**feature** 四类。

- **master**：线上代码主分支，该代码和线上代码一致
- **dev**: 开发分支，包含即将上线的新功能，由各个新功能开发分支经测试后合入，属于分支测试后的产物
- **feature**: 功能开发分支，当有新开发任务时，开发需要从dev分支拉取feature分支，开发完毕经过分支测试后，可以进行pull request请求，申请将分支合入dev分支，该分支是开发过程中最常使用的分支
- **hotfix**: bug修复分支，或紧急需求开发分支（一般不要在hotfix分支上进行新需求的开发）。该分支从master分支拉出，经开发测试完成之后，可以进行pull requets，申请将分支合入master

#### 注意事项

- feature只能从dev分支拉出，hotfix分支只能从master拉出
- 在进行pull request请求之前必须对当前的开发分支进行反合，即dev分支反合feature分支，master分支反合hotfix分支
- dev分支会在稳定之后合入master分支
- 不能将master分支与feature反合，dev分支与hotfix反合
- 开发只能将代码提交至对应的开发分支，不能直接提交到master分支或dev分支

### 3.2 分支的提交注意事项

分支提交的几点注意如下：

- 在拉取新分支之前一定要确保本地的master分支和dev分支代码是最新的（在拉分支之前进行pull操作）
- 分支的拉取和push请用git命令或16版本及以上idea完成，不要使用eclipse
- 本地代码提交时需要确保本地分支对应的远程分支代码最新，具体在进行提交操作之前请进行pull操作
- 代码提交时要进行相关注释，说明修改的代码内容；建议提高代码提交的频率，这样在出现问题时方便问题的定位与代码的回滚
- 代码提交时要在本地解决冲突，冲突解决完成，并且代码在本地可以编译通过之后才能提交代码
- 在windows下进行开发一定要注意git有关换行符的问题（crlf与lf的问题），具体请在git中设置相关的配置（git config --global core.autocrlf true ），并在开发工具中将默认的环境设置为linux，避免提交的代码出现大量的冲突。如果出现这种情况的冲突，请不要提交代码到远程仓库，本地解决之后再提交。

## 4、IntelliJ IDEA使用GitLab

### 4.1 安装Git

#### 下载Git

进入[Git下载页面](https://git-scm.com/download)，选择合适的版本下载。

#### 安装Git

Windows下双击下载好的 `Git-x.xx.x-64-bit.exe` 安装包执行安装，不建议更改 Git 默认勾选的配置。Git GUI按需使用，实际使用的频率一般比较低。

#### 配置Git

如果在安装时没有勾选 **Checkout Windows-style, commit Unix-style line endings** 项，可以在命令行中执行 `git config --global core.autocrlf true` 开启 **提交代码时自动转换换行符**。

### 4.2 安装IDEA Git插件

#### 安装插件

在IDEA中搜索 `Git Integration` 和 `.ignore` 插件并安装，安装完成之后重启IDEA。

#### 配置插件
- IDEA Git插件的配置

![IDEA-Git插件配置](/images/GitLab使用手册/IDEA-Git%E6%8F%92%E4%BB%B6%E9%85%8D%E7%BD%AE.png)

- .ignore插件

**.ignore** 插件支持Git推送代码时自动忽略自定义配置的文件或者目录，防止将一些与开发无关的项目配置文件、构建文件推送到代码库，也减少了手动推送的风险。

### 4.3 从GitLab导入项目

#### 从远程仓库clone代码到本地

在配置好了ssh之后则可进行代码的clone，用http/https的方式不在本文的考虑范围内。clone远程代码到本地请使用git bash操作，不要使用ide，尤其是不要使用eclipse（本项目约定使用命令行进行）。
![复制Git代码仓库路径](/images/GitLab使用手册/%E5%A4%8D%E5%88%B6Git%E4%BB%A3%E7%A0%81%E4%BB%93%E5%BA%93%E8%B7%AF%E5%BE%84.png)

使用复制好的链接clone代码
```
git clone git@dev.posun.co:root/GitLab-Manual.git
```
![Git-SSH-Clone代码](/images/GitLab使用手册/Git-SSH-Clone%E4%BB%A3%E7%A0%81.png)

使用IDEA打开Git项目

![IDEA打开Git项目](/images/GitLab使用手册/IDEA%E6%89%93%E5%BC%80Git%E9%A1%B9%E7%9B%AE.png)

选择项目**目录**，点击“OK”

![选择Git项目目录](/images/GitLab使用手册/%E9%80%89%E6%8B%A9Git%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95.png)

成功导入Git项目

![IDEA-Git项目](/images/GitLab使用手册/IDEA-Git%E9%A1%B9%E7%9B%AE.png)

### 4.4 本地拉取新的分支并将分支push到远程仓库

#### 分支操作菜单

IDEA中Git的操作菜单可以在以下两个地方找到。

![IDEA-Git操作菜单](/images/GitLab使用手册/IDEA-Git%E6%93%8D%E4%BD%9C%E8%8F%9C%E5%8D%95.png)

![IDEA-Git操作菜单-菜单栏](/images/GitLab使用手册/IDEA-Git%E6%93%8D%E4%BD%9C%E8%8F%9C%E5%8D%95-%E8%8F%9C%E5%8D%95%E6%A0%8F.png)

分支操作菜单在IDEA界面的右下方有一个快捷入口。

![IDEA-Git分支菜单](/images/GitLab使用手册/IDEA-Git%E5%88%86%E6%94%AF%E8%8F%9C%E5%8D%95.png)

#### 拉取分支操作流程

##### 创建本地dev分支

![IDEA-创建本地dev分支](/images/GitLab使用手册/IDEA-%E5%88%9B%E5%BB%BA%E6%9C%AC%E5%9C%B0dev%E5%88%86%E6%94%AF.png)

##### 命名本地dev分支，最好跟远程分支保持一致

![IDEA-命名本地分支](/images/GitLab使用手册/IDEA-%E5%91%BD%E5%90%8D%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF.png)

##### 从dev分支拉取feature分支

拉取分支前需要确认当前本地分支在master或者dev分支，并且分支代码是最新的（拉取feature分支则当前分支需要是dev分支，拉取hotfix分支则要在master分支）

1. 切换到dev分支

    ![IDEA-切换到dev分支](/images/GitLab使用手册/IDEA-%E5%88%87%E6%8D%A2%E5%88%B0dev%E5%88%86%E6%94%AF.png)

1. pull dev分支代码，使代码最新

    ![IDEA-pull分支代码](/images/GitLab使用手册/IDEA-pull%E5%88%86%E6%94%AF%E4%BB%A3%E7%A0%81.png)

    ![IDEA-pull代码](/images/GitLab使用手册/IDEA-pull%E4%BB%A3%E7%A0%81.png)

1. 创建新的feature分支

    ![IDEA-创建新的本地分支](/images/GitLab使用手册/IDEA-创建新的本地分支.png)

    注意feature分支的命名，**feature\_任务编号\_任务描述\_分支创建日期**。任务编号对应GitLab中项目的问题编号。

    ![IDEA-创建feature分支](/images/GitLab使用手册/IDEA-%E5%88%9B%E5%BB%BAfeature%E5%88%86%E6%94%AF.png)

#### push新的feature分支到远程仓库

![IDEA-push feature分支到远程仓库](/images/GitLab使用手册/IDEA-push%20feature%E5%88%86%E6%94%AF%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.png)

push feature分支成功

![push feature分支到远程仓库成功](/images/GitLab使用手册/push%20feature%E5%88%86%E6%94%AF%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E6%88%90%E5%8A%9F.png)

### 4.5 从开发分支上提交代码

- 如果有新创建的文件，则在commit之前要进行add

![IDEA-git add新文件](/images/GitLab使用手册/IDEA-git%20add%E6%96%B0%E6%96%87%E4%BB%B6.png)

- commit代码之前要检查代码更改的地方，不要提交一些非智力因素导致的合并错误。IDEA中有两种提交代码的方式。

![IDEA-提交代码](/images/GitLab使用手册/IDEA-%E6%8F%90%E4%BA%A4%E4%BB%A3%E7%A0%81.png)

![IDEA-提交代码-菜单栏](/images/GitLab使用手册/IDEA-%E6%8F%90%E4%BA%A4%E4%BB%A3%E7%A0%81-%E8%8F%9C%E5%8D%95%E6%A0%8F.png)

- 该面板可以查看有哪些文件进行了修改以及修改详情

![IDEA-查看代码文件变动信息](/images/GitLab使用手册/IDEA-%E6%9F%A5%E7%9C%8B%E4%BB%A3%E7%A0%81%E6%96%87%E4%BB%B6%E5%8F%98%E5%8A%A8%E4%BF%A1%E6%81%AF.png)

- 确认无误，添加注释，提交代码

commit: 提交代码
commit and push：提交代码并推送至远程仓库

**可以一次推送多次提交**，一般一个功能点的修改提交一次代码，一个开发周期（半天、一天）推送一次代码。注意提交注释的格式 `tasknum#taskdesc:commit message`。

![IDEA-填写提交说明](/images/GitLab使用手册/IDEA-%E5%A1%AB%E5%86%99%E6%8F%90%E4%BA%A4%E8%AF%B4%E6%98%8E.png)

![IDEA-提交完成推送代码](/images/GitLab使用手册/IDEA-%E6%8F%90%E4%BA%A4%E5%AE%8C%E6%88%90%E6%8E%A8%E9%80%81%E4%BB%A3%E7%A0%81.png)

### 4.6 查看代码提交历史

#### 查看指定文件的提交历史

![IDEA-查看文件的提交历史](/images/GitLab使用手册/IDEA-%E6%9F%A5%E7%9C%8B%E6%96%87%E4%BB%B6%E7%9A%84%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2.png)

#### 查看项目的提交历史

![IDEA-查看项目的提交历史](/images/GitLab使用手册/IDEA-%E6%9F%A5%E7%9C%8B%E9%A1%B9%E7%9B%AE%E7%9A%84%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2.png)

### 4.7 代码的回退

**不要回退代码，代码提交错误，请手动删除提交错误的代码，然后再次提交，不然会影响一些提交信息的记录，或其他分支的开发。**

### 4.8 分支反合及冲突的解决

虽然这部分大部分靠经验解决问题，但是仍然需要注意以下注意事项：

**分支反合**：即master分支或dev分支合并到开发分支,合并操作可以用命令行进行
```
git checkout feature_dev_local
git merge origin/dev
```

```
git checkout hotfix_fixbug_local
git merge origin/master
```

- IDEA中有比较好用的冲突解决工具，命令行执行玩合并之后，用IDEA解决冲突并提交
- 不要用IDE进行分支反合，尤其不能用Eclipse

### 4.9 提交pull request

pull request在分支测试之后提交，在git的web端可以直接操作，一般这部分由QA完成。

#### 新建合并请求

在GitLab的项目页面中选择 **合并请求** 进入pull request面板页面，点击 **新建合并请求**，选择pull request的来源分支和目标分支，点击 **比较分支后继续**。

填写标题、描述，指派审查员，可选该合并请求相关的里程碑和标记（与问题看板关联），之后点击 **提交合并请求** 即完成了合并请求的创建。勾选 **接受合并请求后删除来源分支**，合并请求完成之后会删除来源分支，一般从feature合并到dev、hotfix合并到master可以勾选，dev合并到master不勾选。

#### 合并请求的审查

审查员在代码审查通过之后可以选择合并操作完成分支代码的合并。代码审查不通过时，审查员需要填写原因或建议并关闭合并请求，此时开发人员需要根据审查员的审查结果进行修改并在修改完成之后再次pull request。

### 4.10 .gitignore文件的使用

#### .gitignore文件的编写原则

`.gitignore` 文件过滤有两种模式：开放模式和保守模式。开放模式负责设置过滤哪些文件和文件夹，保守模式负责设置哪些文件不被过滤，也就是哪些文件要被跟踪。

gitignore是从上到下逐行匹配的，因此.gitignore文件的编写原则就是：**先编写开放模式，在编写保守模式**。

#### 基本语法

- 以斜杠“/”开头表目录
- 以星号“*”通配多字符
- 以问号“?”通配单字符
- 以方括号“[]”包含单个字符的匹列表
- 以叹号“!”对匹配结果反

## 5、任务

### 5.1 任务的创建与执行

#### 任务的创建

在GitLab的项目页面中选择 **问题** -> **列表** 进入问题列表页面，点击 **新建问题** 进入任务创建页面，填写问题标题、描述，指派任务的执行人员，勾选是否保密，选择截止日期，选择里程碑和标记，之后点击 **提交问题** 即可完成任务的创建。这里的任务标记跟问题面板中的面板标题一致。

#### 任务的执行

在 **问题** -> **看板** 页面可以对问题的执行情况进行跟踪。这部分跟大部分团队协作的工具比较类似，不做过多说明。
