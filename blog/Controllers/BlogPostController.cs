using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using blog.Dtos.BlogPostsDtos;
using blog.Services.BlogPostsServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace blog.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostController : ControllerBase
    {

        //injection
        private readonly IBlogPostsService _service;

        public BlogPostController(IBlogPostsService service)
        {
            _service = service;
        }
        //end of injection

        //get
        [HttpGet]
        public async Task<IActionResult> GetPosts()
        {
            return Ok(await _service.GetPosts());
        }
        //end of get

        //add
        [HttpPost]
        public async Task<IActionResult> AddPosts(AddPostDto newPost)
        {
            return Ok(await _service.AddPost(newPost));
        }
        //end of add

        //update
        [HttpPut]
        public async Task<IActionResult> UpdatePosts(UpdatePostDto updatePost)
        {
            return Ok(await _service.UpdatePost(updatePost));
        }
        //end of update

        //delete
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePosts(int id)
        {
            return Ok(await _service.DeletePost(id));
        }
        //end of delete
    }
}
