package controllers

import (
	"../constant"
	"../models"
	"../models/rest"
	"../services"
	"../utils"
	"encoding/json"
	"github.com/astaxie/beego"
	"net/http"
)

type AuthenticateController struct {
	beego.Controller
}

func (this *AuthenticateController) Login() {
	var user models.User
	json.Unmarshal(this.Ctx.Input.RequestBody, &user)
	email := user.Email
	password := user.Password
	response := services.Login(email, password)
	messageObj := rest.LoginMessage{}
	if response.Id == 0 {
		this.Ctx.ResponseWriter.WriteHeader(http.StatusBadRequest)
		messageObj.Message = constant.LOGIN_FAILURE
	} else {
		passwordHashStore := response.Password
		if utils.ComparePassword(passwordHashStore, password) != nil {
			messageObj.Message = constant.LOGIN_FAILURE
		} else {
			messageObj.Message = constant.LOGIN_SUCCESS
			accessToken := services.MakeJwt(user.Id, user.Name, user.Role)
			messageObj.AccessToken = accessToken
		}
	}
	this.Data["json"] = messageObj
	this.ServeJSON()

}
