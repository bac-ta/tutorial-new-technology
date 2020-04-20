package services

import (
	"fmt"
	"github.com/astaxie/beego/orm"
)
import "../models"

func registUser(user models.User) {
	orm := orm.NewOrm()
	id, err := orm.Insert(&user)
	fmt.Println(id)
	if err == nil {
		fmt.Println(id)
	}
}

func getUserById(id int) {
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

func getUsers() []*models.User {
	orm := orm.NewOrm()
	var users []*models.User
	orm.QueryTable(new(models.User)).All(&users)
	return users
}
