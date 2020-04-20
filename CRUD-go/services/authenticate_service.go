package services

import (
	"github.com/astaxie/beego/orm"
)

import "../models"

func login(email string, password string) orm.QuerySeter {
	orm := orm.NewOrm()
	user := new(models.User)

	query := orm.QueryTable(user).Filter("email", email).Filter("password", password)
	return query
}
