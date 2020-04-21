package models

import (
	"github.com/astaxie/beego/orm"
)

type User struct {
	Id       int
	Name     string
	Address  string
	Email    string `orm:"unique"`
	Password string
	Role     string
}

func init() {
	orm.RegisterModel(new(User))
}
