using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Employee.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class ProductAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Product",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Price = table.Column<int>(type: "int", nullable: false),
                    SellPrice = table.Column<int>(type: "int", nullable: false),
                    Rating = table.Column<double>(type: "float", nullable: false),
                    Barcode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CountryId = table.Column<int>(type: "int", nullable: false),
                    Created = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastModified = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    LastModifiedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Product_Country_CountryId",
                        column: x => x.CountryId,
                        principalTable: "Country",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.UpdateData(
                table: "Country",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Created", "LastModified" },
                values: new object[] { new DateTimeOffset(new DateTime(2023, 10, 18, 12, 8, 35, 17, DateTimeKind.Unspecified).AddTicks(5776), new TimeSpan(0, 6, 0, 0, 0)), new DateTimeOffset(new DateTime(2023, 10, 18, 12, 8, 35, 17, DateTimeKind.Unspecified).AddTicks(5814), new TimeSpan(0, 6, 0, 0, 0)) });

            migrationBuilder.InsertData(
                table: "Product",
                columns: new[] { "Id", "Barcode", "CountryId", "Created", "CreatedBy", "Description", "LastModified", "LastModifiedBy", "Price", "ProductName", "Rating", "SellPrice", "Status" },
                values: new object[] { 1, null, 1, new DateTimeOffset(new DateTime(2023, 10, 18, 12, 8, 35, 18, DateTimeKind.Unspecified).AddTicks(1034), new TimeSpan(0, 6, 0, 0, 0)), "1", "Description", new DateTimeOffset(new DateTime(2023, 10, 18, 12, 8, 35, 18, DateTimeKind.Unspecified).AddTicks(1045), new TimeSpan(0, 6, 0, 0, 0)), null, 1000, "Mobile", 4.5, 1200, 1 });

            migrationBuilder.UpdateData(
                table: "State",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Created", "LastModified" },
                values: new object[] { new DateTimeOffset(new DateTime(2023, 10, 18, 12, 8, 35, 18, DateTimeKind.Unspecified).AddTicks(4771), new TimeSpan(0, 6, 0, 0, 0)), new DateTimeOffset(new DateTime(2023, 10, 18, 12, 8, 35, 18, DateTimeKind.Unspecified).AddTicks(4781), new TimeSpan(0, 6, 0, 0, 0)) });

            migrationBuilder.CreateIndex(
                name: "IX_Product_CountryId",
                table: "Product",
                column: "CountryId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Product");

            migrationBuilder.UpdateData(
                table: "Country",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Created", "LastModified" },
                values: new object[] { new DateTimeOffset(new DateTime(2023, 9, 27, 10, 15, 53, 560, DateTimeKind.Unspecified).AddTicks(7608), new TimeSpan(0, 6, 0, 0, 0)), new DateTimeOffset(new DateTime(2023, 9, 27, 10, 15, 53, 560, DateTimeKind.Unspecified).AddTicks(7645), new TimeSpan(0, 6, 0, 0, 0)) });

            migrationBuilder.UpdateData(
                table: "State",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Created", "LastModified" },
                values: new object[] { new DateTimeOffset(new DateTime(2023, 9, 27, 10, 15, 53, 561, DateTimeKind.Unspecified).AddTicks(3645), new TimeSpan(0, 6, 0, 0, 0)), new DateTimeOffset(new DateTime(2023, 9, 27, 10, 15, 53, 561, DateTimeKind.Unspecified).AddTicks(3657), new TimeSpan(0, 6, 0, 0, 0)) });
        }
    }
}
