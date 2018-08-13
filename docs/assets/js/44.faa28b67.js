(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{166:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),a("p",[s._v("引用自："),a("a",{attrs:{href:"https://about.gitlab.com/installation/#centos-7",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitLab官方安装教程"),a("OutboundLink")],1),s._v("，"),a("a",{attrs:{href:"http://www.jianshu.com/p/7a0d6917e009",target:"_blank",rel:"noopener noreferrer"}},[s._v("快速安装 GitLab 并汉化"),a("OutboundLink")],1)]),s._v(" "),s._m(1),s._v(" "),a("ol",[s._m(2),s._v(" "),a("li",[a("p",[s._v("添加 GitLab 包服务器并安装")]),s._v(" "),s._m(3),a("p",[s._v("如果您不想使用管道脚本安装存储库，则可以查看"),a("a",{attrs:{href:"https://packages.gitlab.com/gitlab/gitlab-ce/install",target:"_blank",rel:"noopener noreferrer"}},[s._v("所有脚本"),a("OutboundLink")],1),s._v("，并"),a("a",{attrs:{href:"https://packages.gitlab.com/gitlab/gitlab-ce",target:"_blank",rel:"noopener noreferrer"}},[s._v("手动选择并下载软件包"),a("OutboundLink")],1),s._v("，并使用以下命令进行安装。")]),s._v(" "),s._m(4)]),s._v(" "),s._m(5),s._v(" "),s._m(6)]),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),a("blockquote",[a("p",[s._v("汉化教程参考"),a("a",{attrs:{href:"https://gitlab.com/xhang/gitlab",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://gitlab.com/xhang/gitlab"),a("OutboundLink")],1)])]),s._v(" "),s._m(10),s._v(" "),s._m(11),s._v(" "),s._m(12),s._v(" "),a("p",[s._v("生产环境下，备份是必需的。需要备份的文件有：配置文件和数据文件。")]),s._v(" "),s._m(13),s._v(" "),s._m(14),s._v(" "),a("p",[s._v("恢复之前，确保备份文件所安装 GitLab 和当前要恢复的 GitLab 版本一致。")]),s._v(" "),s._m(15),s._v(" "),s._m(16),s._v(" "),s._m(17)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"搭建-gitlab-私有代码托管"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建-gitlab-私有代码托管","aria-hidden":"true"}},[this._v("#")]),this._v(" 搭建 GitLab 私有代码托管")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"centos-7安装-gitlab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos-7安装-gitlab","aria-hidden":"true"}},[this._v("#")]),this._v(" CentOS 7安装 GitLab")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("li",[a("p",[s._v("安装并配置必要的依赖关系")]),s._v(" "),a("p",[s._v("如果您安装了"),a("strong",[s._v("Postfix")]),s._v("用于发送电子邮件，请在安装过程中选择“Internet站点”。你也可以使用"),a("strong",[s._v("SendMail")]),s._v("或配置自定义 SMTP 服务器，并将其设置为 SMTP 服务器。")]),s._v(" "),a("p",[s._v("在 CentOS 上，下述命令将在系统防火墙中打开 HTTP 和 SSH 访问。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("curl")]),s._v(" policycoreutils openssh-server openssh-clients -y\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),a("span",{attrs:{class:"token function"}},[s._v("enable")]),s._v(" sshd\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start sshd\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" postfix\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),a("span",{attrs:{class:"token function"}},[s._v("enable")]),s._v(" postfix\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start postfix\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --permanent --add-service"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("http\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl reload firewalld\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" gitlab-ce -y\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("curl")]),this._v(" -LJO https://packages.gitlab.com/gitlab/gitlab-ce/packages/el/7/gitlab-ce-XXX.rpm/download\nrpm -i gitlab-ce-XXX.rpm\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("p",[this._v("配置并启动 GitLab")]),this._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" gitlab-ctl reconfigure\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("p",[this._v("浏览到主机名并登录")]),this._v(" "),t("p",[this._v("在您第一次访问时，您将被重定向到密码重置屏幕，以提供初始管理员帐户的密码。设置完密码之后您将被重定向回登录屏幕。")]),this._v(" "),t("p",[this._v("默认帐户的用户名是"),t("strong",[this._v("root")]),this._v("。提供您之前创建的密码并登录。登录后，您可以更改用户名。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"修改-host"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改-host","aria-hidden":"true"}},[this._v("#")]),this._v(" 修改 host")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ol",[a("li",[a("p",[s._v("在 GitLab 中添加访问的 host，修改 "),a("code",[s._v("/etc/gitlab/gitlab.rb")]),s._v(" 的 "),a("code",[s._v("external_url")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("external_url "),a("span",{attrs:{class:"token string"}},[s._v("'http://git.[hostname].com[:port]'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可以设置端口，默认为80端口。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("vim /etc/hosts")]),s._v("，在 CentOS 中添加host映射")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("127.0.0.1 git."),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hostname"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(".com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("每次修改 "),a("code",[s._v("/etc/gitlab/gitlab.rb")]),s._v(" 之后，都要运行以下命令，让配置生效")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gitlab-ctl reconfigure\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("配置访问机器的 host，如 "),a("code",[s._v("192.168.1.100 git.[hostname].com")]),s._v("。最后，在浏览器中打开网址 "),a("code",[s._v("http://git.[hostname].com")]),s._v(" 进行登录访问。")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"汉化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#汉化","aria-hidden":"true"}},[this._v("#")]),this._v(" 汉化")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ol",[a("li",[a("p",[s._v("确认当前安装版本")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("cat")]),s._v(" /opt/gitlab/embedded/service/gitlab-rails/VERSION\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果当前安装的版本是 "),a("code",[s._v("8.5.7")]),s._v("，中文补丁需要打 "),a("code",[s._v("8.5版本")]),s._v("，以此类推。")])]),s._v(" "),a("li",[a("p",[s._v("克隆 GitLab 源码仓库")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 克隆 GitLab.com 仓库")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://gitlab.com/larryli/gitlab.git\n＃或 Gitcafe.com 镜像，速度更快\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://gitcafe.com/larryli/gitlab.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("运行汉化补丁")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 8.5 版本的汉化补丁（8-5-stable是英文稳定版，8-5-zh是中文版，两个 diff 结果便是汉化补丁）")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("diff")]),s._v(" origin/8-5-stable"),a("span",{attrs:{class:"token punctuation"}},[s._v("..")]),s._v("8-5-zh "),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" /tmp/8.5.diff\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 停止 gitlab")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gitlab-ctl stop\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 应用汉化补丁")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("cd")]),s._v(" /opt/gitlab/embedded/service/gitlab-rails\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" apply /tmp/8.5.diff  \n"),a("span",{attrs:{class:"token comment"}},[s._v("# 启动gitlab")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gitlab-ctl start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("完成汉化之后可以看到中文版的 GitLab。\n"),t("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/25574-8538f4f188691bed.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"中文版GitLab"}})])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备份","aria-hidden":"true"}},[this._v("#")]),this._v(" 备份")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[a("p",[s._v("备份配置文件\n配置文件包含密码等敏感信息，不要和数据文件放在一起。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("sh -c "),a("span",{attrs:{class:"token string"}},[s._v("'umask 0077; tar -cf "),a("span",{attrs:{class:"token variable"}},[a("span",{attrs:{class:"token variable"}},[s._v("$(")]),s._v("data "),a("span",{attrs:{class:"token string"}},[s._v('"+etc-gitlab-%s.tar"')]),a("span",{attrs:{class:"token variable"}},[s._v(")")])]),s._v(" -C /etc/gitlab'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("备份数据文件\n默认数据备份目录是 "),a("code",[s._v("/var/opt/gitlab/backups")]),s._v("，手动创建备份文件：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# Omnibus 方式安装使用以下命令备份")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gitlab-rake gitlab:backup:create\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("日常备份，添加 "),a("strong",[s._v("crontab")]),s._v("，运行 "),a("code",[s._v("crontab -e")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 每天2点执行备份")]),s._v("\n0 2 * * * /opt/gitlab/bin/gitlab-rake gitlab:backup:create CRON"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如要修改备份周期和目录，在/etc/gitlab/gitlab.rb中修改以下两个选项")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 设置备份周期为7天 - 604800秒")]),s._v("\ngitlab_rails"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token string"}},[s._v("'backup_keep_time'")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" 604800\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 备份目录")]),s._v("\ngitlab_rails"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token string"}},[s._v("'backup_path'")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'/mnt/backups'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#恢复","aria-hidden":"true"}},[this._v("#")]),this._v(" 恢复")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[s._v("恢复配置文件"),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("mv")]),s._v(" /etc/gitlab /etc/gitlab."),a("span",{attrs:{class:"token variable"}},[a("span",{attrs:{class:"token variable"}},[s._v("$(")]),a("span",{attrs:{class:"token function"}},[s._v("date")]),s._v(" +%s"),a("span",{attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 将下面配置备份文件的时间戳改为你所备份的文件的时间戳")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xf etc-gitlab-1399948539.tar -C /\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[s._v("恢复数据文件"),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 将数据备份文件拷贝至备份目录")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("cp")]),s._v(" 1393513186_gitlab_backup.tar /var/opt/gitlab/backups/\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 停止连接数据库的进程")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gitlab-ctl stop unicorn\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gitlab-ctl stop sidekiq\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 恢复1393513186这个备份文件，将覆盖GitLab数据库！")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gitlab-rake gitlab:backup:restore BACKUP"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("1393513186\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 启动 GitLab")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gitlab-ctl start\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 检查 GitLab")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gitlab-rake gitlab:check SANITIZE"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"持续集成（gitlab-ci）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持续集成（gitlab-ci）","aria-hidden":"true"}},[this._v("#")]),this._v(" 持续集成（GitLab-CI）")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ol",[a("li",[a("p",[s._v("添加"),a("strong",[s._v("Runner")]),s._v("安装源")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# For Debian/Ubuntu")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L https://packages.gitlab.com/install/repositories/runner/gitlab-ci-multi-runner/script.deb.sh "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# For CentOS")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L https://packages.gitlab.com/install/repositories/runner/gitlab-ci-multi-runner/script.rpm.sh "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("安装"),a("strong",[s._v("gitlab-ci-multi-runner")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# For Debian/Ubuntu")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" gitlab-ci-multi-runner\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# For CentOS")]),s._v("\nyum "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" gitlab-ci-multi-runner\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("注册"),a("strong",[s._v("Runner")]),s._v("\n获取Token：以管理员身份登录GitLab，进入管理区域，点击侧边栏的Runner，如下图，“注册授权码”后的字符串便是Token。\n"),a("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/25574-0ffcfa9cd7975be2.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"GitLab Runner Token"}})]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gitlab-ci-multi-runner register\n\nRunning "),a("span",{attrs:{class:"token keyword"}},[s._v("in")]),s._v(" system-mode.\n\nPlease enter the gitlab-ci coordinator URL "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e.g. https://gitlab.com/ci"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\nhttp://git.home.com/ci\nPlease enter the gitlab-ci token "),a("span",{attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this runner:\nxxxx             "),a("span",{attrs:{class:"token comment"}},[s._v("# 输入Token")]),s._v("\nPlease enter the gitlab-ci description "),a("span",{attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this runner:\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("xxy-web-test-02"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": test-runner  "),a("span",{attrs:{class:"token comment"}},[s._v("# 输入runner的名称")]),s._v("\nPlease enter the gitlab-ci tags "),a("span",{attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this runner "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("comma separated"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\ntest,php         "),a("span",{attrs:{class:"token comment"}},[s._v("# 输入runner的标签，以区分不同的runner，标签间逗号分隔")]),s._v("\nRegistering runner"),a("span",{attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". succeeded                     runner"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("YDPz2or3\nPlease enter the executor: ssh, shell, parallels, docker, docker-ssh, virtualbox:\nshell\nRunner registered successfully. Feel "),a("span",{attrs:{class:"token function"}},[s._v("free")]),s._v(" to start it, but "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" it's running already the config should be automatically reloaded"),a("span",{attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])])])}],!1,null,null,null);e.options.__file="1.md";t.default=e.exports}}]);