using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace DataBaseBlogs.Models
{
    public class DataUsers
    {
        public static void Initialize(BlogContext context)
        {
           /* if (!context.User.Any())
            {
                context.User.AddRange(
                     new User
                     {
                         Name = "Alex",
                         LastName = "Klar",
                         UserInformation = "From Kiyev",
                         BirthDay = DateTime.ParseExact("17-10-1998", "dd-MM-yyyy", CultureInfo.InvariantCulture),
                         Subscribers = 0
                     }
                );
                
                context.SaveChanges();*/
            }
        }
    }

