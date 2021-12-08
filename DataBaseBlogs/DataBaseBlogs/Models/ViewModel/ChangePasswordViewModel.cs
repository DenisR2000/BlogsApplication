using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DataBaseBlogs.Models.ViewModel
{
    public class ChangePasswordViewModel
    {
        public string UserName { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string CurentPassword { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string NewPassword { get; set; }
       /* [Compare("Password", ErrorMessage = "Invalid confirm password")]
        [DataType(DataType.Password)]
        public string ConfirmNewPassword { get; set; }*/
    }
}
