package config

import "github.com/spf13/viper"

type Env struct {
	Port  string `mapstructure:"PORT"`
	DBUrl string `mapstructure:"DB_URL"`
}

func SetEnv() (Env, error) {
	viper.AddConfigPath("./config")
	viper.SetConfigFile(".env")

	viper.ReadInConfig()

	env := Env{
		Port:  viper.GetString("PORT"),
		DBUrl: viper.GetString("DB_URL"),
	}

	return env, nil
}
