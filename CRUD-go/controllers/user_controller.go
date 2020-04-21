package controllers

import "../models"
import (
	"../constant"
	"../models/rest"
	"../services"
	"encoding/json"
	"github.com/astaxie/beego"
	"net/http"
)

type UserControler struct {
	beego.Controller
}

func (this *UserControler) RegistUser() {
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

func (this *UserControler) GetUsers() {

}

func (this *UserControler) GetUserById() {

}
