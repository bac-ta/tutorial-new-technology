package main

import (
	"./conf"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
)

func main() {
	//Data base
	mysqluser, mysqlpass, mysqlurls, mysqldb := conf.FetchMysqlConfiguration()
	dbString := "mysql://" + mysqluser + ":" + mysqlpass + "@" + "tcp" + "(" + mysqlurls + ":" + "3306" + ")" + "/" + mysqldb + "?charset=utf8"
	maxIdle := 30
	maxConn := 30

	orm.RegisterDriver("mysql", orm.DRMySQL)
	orm.RegisterDataBase("default", "mysql", dbString, maxIdle, maxConn)



	//beego.Router("/", &controllers.MainController{})
	//beego.Router("/v1/shorten", &controllers.ShortController{})
	//beego.Router("/v1/expand", &controllers.ExpandController{})
	beego.Run()
}
