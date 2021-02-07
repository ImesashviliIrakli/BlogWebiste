using blog.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blog.Dtos.BlogPostsDtos
{
    public class UpdatePostDto
    {
        public int Id { get; set; }
        public string Topic { get; set; }
        public string Text { get; set; }
        public string Comment { get; set; }
        public Users User { get; set; }
        public int UserId { get; set; }
    }
}
