using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DataBaseBlogs.Models.ViewModel
{
    public class AddNewBlogViewModel
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Information { get; set; }
        [Required]
        public string Base64URL { get; set; }
        [Required]
        public string UserName { get; set; }
    }
}
