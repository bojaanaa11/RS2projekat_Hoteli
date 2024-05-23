﻿using IdentityServer.DTOs;
using IdentityServer.Entities;

namespace IdentityServer.Services
{
    public interface IAuthenticationService
    {
        Task<User> ValidateUser(UserCredentialsDto userCredentials);

        Task<AuthenticationModel> CreateAuthenticationModel(User user);
    }
}
