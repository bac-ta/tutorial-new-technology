package services

import (
	"../models"
	"../utils"
	"fmt"
	"github.com/astaxie/beego/orm"
)

func RegistUser(user models.User) (int64, error) {
	orm := orm.NewOrm()
	password := user.Password
	//Hash
	passwordHash := utils.HashPassword(password)
	user.Password = passwordHash
	id, err := orm.Insert(&user)
	return id, err
}

func GetUserById(id int) {
	o := orm.NewOrm()
	user := models.User{
		Id: id,
	}

	err := o.Read(&user)

	if err == orm.ErrNoRows {
		fmt.Println("No result found.")
	} else if err == orm.ErrMissPK {
		fmt.Println("No primary key found.")
	} else {
		fmt.Println(user.Id, user.Name)
	}
}

func GetUsers() []*models.User {
	orm := orm.NewOrm()
	var users []*models.User
	orm.QueryTable(new(models.User)).All(&users)
	return users
}
