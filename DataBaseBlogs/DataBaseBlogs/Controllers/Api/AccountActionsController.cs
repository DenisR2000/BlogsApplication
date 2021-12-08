using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataBaseBlogs.Models.ViewModel;
using Microsoft.AspNetCore.Identity;
using DataBaseBlogs.Models;

namespace DataBaseBlogs.Controllers.Api
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class AccountActionsController : Controller
    {
        private readonly BlogContext blogContext;
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        public AccountActionsController(UserManager<User> userManager, SignInManager<User> signInManager, BlogContext blogContext)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.blogContext = blogContext;
        }
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult> Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
               
                var result = await signInManager.PasswordSignInAsync(model.UserName, model.Password, model.RememberNe, false);
                if (result.Succeeded)
                {
                    return RedirectToAction("Users", "Admin");
                }
                else
                {
                }
            }
            return View(model);
        }

        [HttpGet]
        public IActionResult Registration()
        {
            return View(new RegisterViewModel());
        }


        [HttpPost]
        public async Task<ActionResult> Registration(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                User user = new User { Email = model.Email, UserName = model.UserName, PhoneNumber = model.PhoneNumber, MyInformation = "", Base64URL = "" };
                var result = await userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    await signInManager.SignInAsync(user, false);

                    return Ok();
                }
                else
                {
                    foreach(IdentityError error in result.Errors)
                    {
                        ModelState.AddModelError("", error.Description);
                    }
                }
            }
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return Ok("User log out");
        }


        [HttpGet("{userName}")]
        public async Task<ActionResult<string[]>> GetUserId(string userName)
        {
            if(userName != null)
            {
                User user = await userManager.FindByNameAsync(userName);
                if(user != null)
                {
                    string[] str = new string[] { user.Id };

                    return str;
                }
            }
            return Ok();
        }

        [HttpPost]
        public async Task<ActionResult> ChangePassword(ChangePasswordViewModel model)
        {
            User user = await userManager.FindByNameAsync(model.UserName);
            if (user != null)
            {
                IdentityResult result = await userManager.ChangePasswordAsync(user, model.CurentPassword, model.NewPassword);
                if (result.Succeeded)
                {
                    return Ok();
                }
                else
                {
                    foreach (IdentityError error in result.Errors)
                    {
                        ModelState.AddModelError("", error.Description);
                    }
                }
            }
            return View(model);
        }

        [HttpPost]
        public async Task<ActionResult> Subscribe(SubscriberViewModel model)
        {
            User userSubscriber = await userManager.FindByNameAsync(model.UserSubscriber); 
            User userOnSubscribe = await userManager.FindByNameAsync(model.OnUserName); 
            if (userSubscriber != null && userOnSubscribe != null) 
            {
                Subscribers subscribe = new Subscribers { SubscriberToUserId = userOnSubscribe.Id };
                userSubscriber.Subscribers.Add(subscribe);
                await blogContext.SaveChangesAsync();
                return Ok();
            }
            return View();
        } 
    }
}
