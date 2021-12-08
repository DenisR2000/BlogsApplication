using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataBaseBlogs.Models;
using DataBaseBlogs.Models.ViewModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DataBaseBlogs.Controllers.Api
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BlogsController : Controller
    {
        private readonly BlogContext context;
        private readonly UserManager<User> userManager;
        public BlogsController(BlogContext context, UserManager<User> userManager)
        {
            this.context = context;
            this.userManager = userManager;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Blog>>> Get()
        {
            return await context.Blog.ToListAsync();
        }

        [HttpGet("{postsSkip}")]
        public ActionResult<IEnumerable<Blog>> GetRangPosts(int postsSkip)
        {
            
            return context.Blog.Skip(postsSkip).Take(3).ToList();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Blog>> GetBlog(int id)
        {
            Blog blog = await context.Blog.FirstOrDefaultAsync(x => x.BlogId == id);
            if(blog != null)
            {
                return blog;
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<ActionResult<Blog>> Post(Blog blog)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            context.Blog.Add(blog);
            await context.SaveChangesAsync();
            return Ok(await context.Blog.ToListAsync());
        }
       
        [HttpPost]
        public async Task<ActionResult<Blog>> AddNewBlog(AddNewBlogViewModel model)
        {
            if (ModelState.IsValid)
            {
                User user = await userManager.FindByNameAsync(model.UserName);
                if(user != null)
                {
                    Blog blog = new Blog { Title = model.Title, Information = model.Information, Base64URL = model.Base64URL };
                    user.Blogs.Add(blog);
                    await context.SaveChangesAsync();
                }
            }
            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult<Blog>> Put(Blog blog)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            context.Blog.Update(blog);
            await context.SaveChangesAsync();
            return Ok(await context.Blog.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Blog>> Delete(int id)
        {
            Blog blog = await context.Blog.FirstOrDefaultAsync(x => x.BlogId == id);
            context.Blog.Remove(blog);
            await context.SaveChangesAsync();
            return Ok();
        }

    }
}
