using blog.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blog.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        } 
        public DbSet<BlogPosts> BlogPosts { get; set; }
        public DbSet<Users> Users { get; set; }
    }
}
