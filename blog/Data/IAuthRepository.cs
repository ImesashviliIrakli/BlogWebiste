using blog.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blog.Data
{
    public interface IAuthRepository
    {
        Task<ServiceResponse<int>> Register(Users user, string password);
        Task<ServiceResponse<String>> Login(string username, string password);
        Task<bool> UserExists(string username);
    }
}
