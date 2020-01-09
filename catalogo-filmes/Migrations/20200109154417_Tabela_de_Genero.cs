using Microsoft.EntityFrameworkCore.Migrations;

namespace catalogo_filmes.Migrations
{
    public partial class Tabela_de_Genero : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Genero",
                table: "Filmes");

            migrationBuilder.AddColumn<int>(
                name: "GeneroId",
                table: "Filmes",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Generos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Generos", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Filmes_GeneroId",
                table: "Filmes",
                column: "GeneroId");

            migrationBuilder.AddForeignKey(
                name: "FK_Filmes_Generos_GeneroId",
                table: "Filmes",
                column: "GeneroId",
                principalTable: "Generos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Filmes_Generos_GeneroId",
                table: "Filmes");

            migrationBuilder.DropTable(
                name: "Generos");

            migrationBuilder.DropIndex(
                name: "IX_Filmes_GeneroId",
                table: "Filmes");

            migrationBuilder.DropColumn(
                name: "GeneroId",
                table: "Filmes");

            migrationBuilder.AddColumn<string>(
                name: "Genero",
                table: "Filmes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
