using AutoMapper;
using blog.Data;
using blog.Dtos.BlogPostsDtos;
using blog.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blog.Services.BlogPostsServices
{
    public class BlogPostsService : IBlogPostsService
    {
        //injection
        private readonly IMapper _mapper;
        private readonly DataContext _context;
        public BlogPostsService(IMapper mapper, DataContext context)
        {
            _context = context;
            _mapper = mapper;
        }
        //end of injection

        //add
        public async Task<List<GetPostDto>> AddPost(AddPostDto newPost)
        {
            BlogPosts blogPosts = _mapper.Map<BlogPosts>(newPost);
            await _context.BlogPosts.AddAsync(blogPosts);
            await _context.SaveChangesAsync();
            var dbBlogPosts = _context.BlogPosts.Select(c => _mapper.Map<GetPostDto>(c)).ToList();
            return dbBlogPosts;
        }
        //end of add

        //delete
        public async Task<List<GetPostDto>> DeletePost(int id)
        {
            BlogPosts blogPosts = await _context.BlogPosts.FirstAsync(c => c.Id == id);
            _context.BlogPosts.Remove(blogPosts);
            await _context.SaveChangesAsync();
            var dbBlogPosts = _context.BlogPosts.Select(c => _mapper.Map<GetPostDto>(c)).ToList();
            return dbBlogPosts;
        }
        //end of delete

        //get
        public async Task<List<GetPostDto>> GetPosts()
        {
            List<BlogPosts> blogPosts = await _context.BlogPosts.Include(c => c.User).ToListAsync();
            var dbBlogPosts = blogPosts.Select(c => _mapper.Map<GetPostDto>(c)).ToList();
            return dbBlogPosts;
        }
        //end of get

        //udpate
        public async Task<GetPostDto> UpdatePost(UpdatePostDto updatePost)
        {
            BlogPosts blogPosts = await _context.BlogPosts.FirstOrDefaultAsync(c => c.Id ==  updatePost.Id);
            blogPosts.Topic = updatePost.Topic;
            blogPosts.Text = updatePost.Text;
            blogPosts.Comment = updatePost.Comment;
            blogPosts.UserId = updatePost.UserId;

            _context.BlogPosts.Update(blogPosts);
            await _context.SaveChangesAsync();
            var dbBlogPosts = _mapper.Map<GetPostDto>(blogPosts);
            return dbBlogPosts;    
        }
        //end of update


    }
}
