package config

import (
	"log"

	"github.com/spf13/viper"
)

type Env struct {
	Port  string `mapstructure:"PORT"`
	DBUrl string `mapstructure:"DB_URL"`
}

func SetEnv() (env Env, err error) {
	viper.AddConfigPath("./pkg/config")
	viper.SetConfigName("local")
	viper.SetConfigType("env")

	viper.ReadInConfig()

	if err := viper.ReadInConfig(); err != nil {
		log.Fatal("Error reading env file", err)
	}

	// Viper unmarshals the loaded env varialbes into the struct
	if err := viper.Unmarshal(&env); err != nil {
		log.Fatal(err)
	}

	return env, nil
}
