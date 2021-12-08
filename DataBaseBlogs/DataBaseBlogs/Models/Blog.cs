using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataBaseBlogs.Models
{
    public class Blog
    {
        public int BlogId { get; set; }
        public string Title { get; set; }
        public string Information { get; set; }
        public string Base64URL { get; set; }
        public string? UserId { get; set; }
        public User User { get; set; }
    }
}
