﻿using DataBaseBlogs.Models;
using DataBaseBlogs.Models.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace DataBaseBlogs.Controllers
{
  
    
    public class HomeController : Controller
    {
        
        private readonly ILogger<HomeController> _logger;
        private readonly BlogContext context;
        public HomeController(ILogger<HomeController> logger, BlogContext context)
        {
            _logger = logger;
            this.context = context;
        }

        public IActionResult Index()
        {
            return View(context.Blog.ToList());
        }

        public IActionResult Privacy()
        { 
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
