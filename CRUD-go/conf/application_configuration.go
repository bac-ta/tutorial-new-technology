package conf

import (
	"github.com/astaxie/beego"
)

func FetchMysqlConfiguration() (string, string, string, string) {
	mysqluser := beego.AppConfig.String("mysqluser")
	mysqlpass := beego.AppConfig.String("mysqlpass")
	mysqlurls := beego.AppConfig.String("mysqlurls")
	mysqldb := beego.AppConfig.String("mysqldb")
	return mysqluser, mysqlpass, mysqlurls, mysqldb
}
func FetchJwtConfiguration() string {
	secretKey := beego.AppConfig.String("secretKey")
	return secretKey
}
