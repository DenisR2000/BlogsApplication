using DataBaseBlogs.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataBaseBlogs.Controllers
{
    
   
    public class AdminController : Controller
    {
        private readonly UserManager<User> userManager;
        public AdminController(UserManager<User> userManager)
        {
            this.userManager = userManager;

        }
        public IActionResult Users() 
        {
            if (User.Identity.Name != null)
            {
                return View(userManager.Users);
            }
            else
            {
                return RedirectToAction("Login", "Account");
            }
            
        }
    }
}
