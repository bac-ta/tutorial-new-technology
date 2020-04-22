package main

import (
	"./conf"
	"./controllers"
	_ "./routers"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context"
	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
	"time"
)

func init() {
	//Data base
	mysqluser, mysqlpass, mysqlurls, mysqldb := conf.FetchMysqlConfiguration()
	dbString := mysqluser + ":" + mysqlpass + "@" + "tcp" + "(" + mysqlurls + ":" + "3306" + ")" + "/" + mysqldb + "?charset=utf8"
	maxIdle := 10
	maxConn := 10

	errRegistDriver := orm.RegisterDriver("mysql", orm.DRMySQL)
	if errRegistDriver != nil {
		panic(errRegistDriver)
	}
	errRegistDB := orm.RegisterDataBase("default", "mysql", dbString, maxIdle, maxConn)
	if errRegistDB != nil {
		panic(errRegistDB)
	}

	//Cross domain
	corsHandler := func(ctx *context.Context) {
		ctx.Output.Header("Access-Control-Allow-Origin", ctx.Input.Domain())
		ctx.Output.Header("Access-Control-Allow-Methods", "*")
	}
	beego.InsertFilter("*", beego.BeforeRouter, corsHandler)
}

func main() {

	if beego.BConfig.RunMode == "dev" {
		beego.BConfig.WebConfig.DirectoryIndex = true
		beego.BConfig.WebConfig.StaticDir["/swagger"] = "swagger"
		orm.Debug = true
	}
	orm.DefaultTimeLoc = time.UTC
	beego.ErrorController(&controllers.ErrorController{})
	beego.BConfig.ServerName = "CRUD beego server"
	beego.Run()
}
