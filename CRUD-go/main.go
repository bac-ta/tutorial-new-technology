package main

import (
	"github.com/astaxie/beego"
	"./controllers"
)

func main() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/v1/shorten", &controllers.ShortController{})
	beego.Router("/v1/expand", &controllers.ExpandController{})
	beego.Run()
}
