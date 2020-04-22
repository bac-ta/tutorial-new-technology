package routers

import (
	"../controllers"
	"../services"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/api/login", &controllers.AuthenticateController{}, "post:Login")
	beego.Router("/api/user", &controllers.UserController{}, "post:RegistUser")

	nameSpace := beego.NewNamespace("/api",
		beego.NSNamespace("/login",
			beego.NSInclude(
				&controllers.AuthenticateController{},
			),
		),
		beego.NSBefore(services.JwtAuth),

		beego.NSNamespace("/user",
			beego.NSInclude(
				&controllers.UserController{},
			),
		),
	)
	beego.AddNamespace(nameSpace)
}
