using Employee.Model;
using Employee.Shared.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Infrastructure.Persistence.Configurations;

public class ProductConfiguration :IEntityTypeConfiguration<Product>
{
    public void Configure(EntityTypeBuilder<Product> builder)
    {
        //this is to replace dbo to Emp
        //builder.ToTable("State", schema: "Emp");
        builder.HasKey(x => x.Id);
        builder.HasOne(x => x.Country).WithMany(x => x.Products).HasForeignKey(x => x.CountryId).IsRequired(true);
        builder.HasData(new
        {
            Id = 1,
            ProductName = "Mobile",
            Description = "Description",
            Price =1000,
            SellPrice = 1200,
            Rating = 4.5,
            BarCode = "xyz",
            CountryId = 1,
            Created = DateTimeOffset.Now,
            CreatedBy = "1",
            LastModified = DateTimeOffset.Now,
            Status = EntityStatus.Created
        });
    }
}
