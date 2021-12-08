using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataBaseBlogs.Models
{
    public class Subscribers
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string SubscriberToUserId { get; set; } // на кого я подписываюсь 
        public User User { get; set; }
    }
}
