using catalogo_filmes.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace catalogo_filmes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly SignInManager<IdentityUser> signInManager;
        private readonly IConfiguration configuration;

        public UsuariosController(UserManager<IdentityUser> _userManager, SignInManager<IdentityUser> _signInManager, IConfiguration _configuration)
        {
            userManager = _userManager;
            signInManager = _signInManager;
            configuration = _configuration;
        }

        [HttpDelete]
        public async Task<IActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return Ok();
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserToken>> Register([FromBody] Usuario model)
        {
            if (ModelState.IsValid)
            {
                var user = new IdentityUser
                {
                    UserName = model.Email,
                    Email = model.Email
                };
                var result = await userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    Response.Headers.Add("Authorization", BuildToken(model).Token);
                    return Ok();
                }
            }

            return BadRequest("Não foi possível criar o usuário!");
        }


        [HttpPost("login")]
        public async Task<ActionResult<UserToken>> Login([FromBody] Usuario model)
        {
            var result = await signInManager.PasswordSignInAsync(model.Email, model.Password,
                 isPersistent: false, lockoutOnFailure: false);

            if (result.Succeeded)
            {
                Response.Headers.Add("Authorization", BuildToken(model).Token);
                return Ok();
            }
            else
            {
                return BadRequest("Não logou!");
            }
        }

        private UserToken BuildToken(Usuario model)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(configuration["JWT:Key"]);
            var expiration = DateTime.UtcNow.AddHours(10);
            var tokenDescriptor = new SecurityTokenDescriptor()
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(JwtRegisteredClaimNames.UniqueName, model.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                }),
                Expires = expiration,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return new UserToken()
            {
                Token = tokenHandler.WriteToken(token),
                Expiration = expiration
            };
        }
    }
}