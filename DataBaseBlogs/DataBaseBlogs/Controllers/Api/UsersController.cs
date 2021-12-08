using DataBaseBlogs.Models;
using DataBaseBlogs.Models.ViewModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataBaseBlogs.Controllers.Api
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class UsersController : Controller
    {
        private readonly BlogContext context;
        private readonly UserManager<User> userManager;
        public UsersController(BlogContext context, UserManager<User> userManager)
        {
            this.context = context;
            this.userManager = userManager;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await userManager.Users.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(string id)
        {
            User user = await context.Users.FindAsync(id);
            if(user != null)
            {
                return user;
            }
            return NotFound();
        }
        
        [HttpPost]
        public async Task<ActionResult> AddBase64(Base64ViewModel model)
        {
            User user = await context.Users.FirstOrDefaultAsync(x => x.UserName == model.userName);
            if(user != null)
            {
                user.Base64URL = model.Base64URL;
                user.MyInformation = model.MyInformation;
                await context.SaveChangesAsync();
                return Ok();
            }
            return Ok();
        }
    }
}
