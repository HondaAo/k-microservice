package services

import (
	"context"
	"net/http"

	"github.com/HondaAo/bff/microservices/base/pkg/db"
	"github.com/HondaAo/bff/microservices/base/pkg/models"

	pb "github.com/HondaAo/bff/microservices/base/pkg/grpc/proto"
)

type ClientServer struct {
	H db.Handler
	pb.UnimplementedClientsServiceServer
}

func (s ClientServer) Create(ctx context.Context, req *pb.CreateClientInput) (*pb.CreateClientResponse, error) {
	client := &models.Client{
		ClientName: req.ClientName,
		Email:      req.Email,
		Password:   req.Password,
		IsUsed:     true,
	}

	if result := s.H.DB.Create(client); result.Error != nil {
		return &pb.CreateClientResponse{
			Status: http.StatusBadRequest,
			Error:  result.Error.Error(),
		}, nil
	}

	return &pb.CreateClientResponse{
		Status:   http.StatusCreated,
		ClientId: client.ClientID,
	}, nil
}

func (s ClientServer) FindOne(ctx context.Context, req *pb.FindClientRequest) (*pb.FindClientResponse, error) {
	var client models.Client

	if result := s.H.DB.First(&client, req.ClientId); result.Error != nil {
		return &pb.FindClientResponse{
			Error: result.Error.Error(),
		}, nil
	}

	return &pb.FindClientResponse{
		Data: &pb.Client{
			ClientId:   client.ClientID,
			ClientName: client.ClientName,
			Email:      client.Email,
			IsUsed:     client.IsUsed,
			CreatedAt:  client.CreatedAt.String(),
			UpdatedAt:  client.UpdatedAt.String(),
		},
	}, nil
}

func (s ClientServer) FindByEmail(ctx context.Context, req *pb.FindByEmailRequest) (*pb.FindClientResponse, error) {
	var client models.Client

	if result := s.H.DB.First(&client, "email = ?", req.Email); result.Error != nil {
		return &pb.FindClientResponse{
			Error: result.Error.Error(),
		}, nil
	}

	return &pb.FindClientResponse{
		Data: &pb.Client{
			ClientId:   client.ClientID,
			ClientName: client.ClientName,
			Email:      client.Email,
			IsUsed:     client.IsUsed,
			CreatedAt:  client.CreatedAt.String(),
			UpdatedAt:  client.UpdatedAt.String(),
		},
	}, nil
}

func (s ClientServer) Update(ctx context.Context, req *pb.UpdateClientInput) (*pb.CreateClientResponse, error) {
	return nil, nil
}
