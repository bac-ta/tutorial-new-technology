package controllers

import (
	"../constant"
	"../models/rest"
	"github.com/astaxie/beego"
	"net/http"
)

type ErrorController struct {
	beego.Controller
}

func (c *ErrorController) Error404() {
	c.Data["json"] = rest.APIMessage{
		StatusCode: http.StatusBadRequest,
		Message:    constant.NOT_FOUND,
	}
	c.ServeJSON()
}
func (c *ErrorController) Error401() {
	c.Data["json"] = rest.APIMessage{
		StatusCode: http.StatusUnauthorized,
		Message:    constant.PERMISSION_DENIED,
	}
	c.ServeJSON()
}
func (c *ErrorController) Error403() {
	c.Data["json"] = rest.APIMessage{
		StatusCode: http.StatusForbidden,
		Message:    constant.FORBIDEN,
	}
	c.ServeJSON()
}
