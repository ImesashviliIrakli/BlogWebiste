using AutoMapper;
using blog.Dtos.BlogPostsDtos;
using blog.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blog
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            //posts
            CreateMap<BlogPosts, GetPostDto>();
            CreateMap<AddPostDto, BlogPosts>();
            //end of posts
        }
    }
}
