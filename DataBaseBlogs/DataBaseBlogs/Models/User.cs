using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DataBaseBlogs.Models
{
    public class User : IdentityUser
    {
        public User()
        {
            Blogs = new HashSet<Blog>();
            Subscribers = new List<Subscribers>();
        }

        public int Year { get; set; }
        public string MyInformation { get; set; }
        public string Base64URL { get; set; }
        public int Rate { get; set; } = 1;
        public ICollection<Blog> Blogs { get; set; }
        public ICollection<Subscribers> Subscribers { get; set; }  
    }
}
