package controllers

import (
	"../models"
)
import (
	"../constant"
	"../models/rest"
	"../services"
	"encoding/json"
	"github.com/astaxie/beego"
	"net/http"
)

type UserController struct {
	beego.Controller
}

func (this *UserController) RegistUser() {
	/*Get bearer token
	this.Ctx.Input.Header("Authorization")
	*/
	var user models.User
	json.Unmarshal(this.Ctx.Input.RequestBody, &user)
	id, err := services.RegistUser(user)
	messageObj := rest.Message{}
	if err == nil {
		this.Ctx.ResponseWriter.WriteHeader(http.StatusOK)
		messageObj.Id = id
		messageObj.Message = constant.CREATE_USER_SUCCESS
	} else {
		this.Ctx.ResponseWriter.WriteHeader(http.StatusBadRequest)
		messageObj.Message = constant.CREATE_USER_FAILURE
	}
	this.Data["json"] = &messageObj
	this.ServeJSON()
}

func (this *UserController) GetUsers() {

}

func (this *UserController) GetUserById() {

}
