using AutoMapper;
using Employee.Repository.Interface;
using Employee.Service.Model;
using Employee.Shared.Models;
using FluentValidation;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Core.CQRS.Employee.Command.Products;


public record DeleteProductCommand(int id) : IRequest<CommandResult<VMProduct>>;

public class DeleteProductCommandHandler : IRequestHandler<DeleteProductCommand, CommandResult<VMProduct>>
{

    private readonly IProductRepository _productRepository;

    private readonly IMapper _mapper;

    public DeleteProductCommandHandler(IProductRepository productRepository, IMapper mapper)
    {
        _productRepository = productRepository;
        _mapper = mapper;
    }

    public async Task<CommandResult<VMProduct>> Handle(DeleteProductCommand request, CancellationToken cancellationToken)
    {

        var result = await _productRepository.DeleteAsync(request.id);
        return result switch
        {
            null => new CommandResult<VMProduct>(null, CommandResultTypeEnum.NotFound),
            _ => new CommandResult<VMProduct>(result, CommandResultTypeEnum.Success)
        };
    }

}

