package main

import (
	"./conf"
	"./controllers"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
	//Data base
	mysqluser, mysqlpass, mysqlurls, mysqldb := conf.FetchMysqlConfiguration()
	dbString := mysqluser + ":" + mysqlpass + "@" + "tcp" + "(" + mysqlurls + ":" + "3306" + ")" + "/" + mysqldb + "?charset=utf8"
	maxIdle := 10
	maxConn := 10

	orm.RegisterDriver("mysql", orm.DRMySQL)
	orm.RegisterDataBase("default", "mysql", dbString, maxIdle, maxConn)

	beego.Router("/login", &controllers.AuthenticateController{}, "post:Login")
	beego.Router("/user/create", &controllers.UserControler{}, "post:RegistUser")
	beego.Run()
}
