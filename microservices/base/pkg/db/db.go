package db

import (
	"log"

	"github.com/HondaAo/bff/microservices/base/pkg/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Handler struct {
	DB *gorm.DB
}

func Init(url string) Handler {
	db, err := gorm.Open(mysql.Open(url), &gorm.Config{})

	if err != nil {
		log.Fatalln(err)
	}

	db.AutoMigrate(models.Client{})

	return Handler{db}
}
