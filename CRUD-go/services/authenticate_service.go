package services

import (
	"../models"
	"github.com/astaxie/beego/orm"
)

func Login(email string) models.User {
	o := orm.NewOrm()
	var user models.User

	o.QueryTable(user).Filter("email", email).One(&user)
	return user
}
