package main

import (
	"log"
	"net"

	"github.com/HondaAo/bff/microservices/base/pkg/config"
	"github.com/HondaAo/bff/microservices/base/pkg/db"
	pb "github.com/HondaAo/bff/microservices/base/pkg/grpc/proto"
	"github.com/HondaAo/bff/microservices/base/pkg/services"
	"google.golang.org/grpc"
)

func main() {
	c, err := config.SetEnv()

	if err != nil {
		log.Fatalln("Failed at config", err)
	}

	h := db.Init(c.DBUrl)

	lis, err := net.Listen("tcp", c.Port)

	if err != nil {
		log.Fatalln("Failed to listing:", err)
	}

	grpcServer := grpc.NewServer()

	clientServer := services.ClientServer{
		H: h,
	}
	pb.RegisterClientsServiceServer(grpcServer, &clientServer)

	// employeeServer := services.EmployeeServer{
	// 	H: h,
	// }
	// pb.RegisterEmployeesServiceServer(grpcServer, &employeeServer)

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalln("Failed to serve:", err)
	}
}
