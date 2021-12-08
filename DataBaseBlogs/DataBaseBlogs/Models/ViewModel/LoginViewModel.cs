﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DataBaseBlogs.Models.ViewModel
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "UserName is required")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "Pussword is required")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        public bool RememberNe { get; set; }
    }
}
