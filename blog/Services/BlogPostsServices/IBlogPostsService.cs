using blog.Dtos.BlogPostsDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blog.Services.BlogPostsServices
{
    public interface IBlogPostsService
    {
        Task<List<GetPostDto>> GetPosts();
        Task<List<GetPostDto>> AddPost(AddPostDto newPost);
        Task<List<GetPostDto>> DeletePost(int id);
        Task<GetPostDto> UpdatePost(UpdatePostDto updatePost);
    }
}
