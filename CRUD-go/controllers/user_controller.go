package controllers

import "../models"
import (
	"encoding/json"
	"github.com/astaxie/beego"
)

type UserControler struct {
	beego.Controller
}

func (this *UserControler) RegistUser() {
	var ob models.User
	json.Unmarshal(this.Ctx.Input.RequestBody, &ob)
	println(ob)

}

func(this*UserControler) GetUsers(){

}

func(this*UserControler) GetUserById(){

}

