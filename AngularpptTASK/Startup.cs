using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularpptTASK.Startup))]
namespace AngularpptTASK
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
