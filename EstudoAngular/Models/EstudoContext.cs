using Microsoft.EntityFrameworkCore;

namespace EstudoAngular.Models
{
    public class EstudoContext : DbContext
    {
        public virtual DbSet<Cliente> Clientes { get; set; }

        public EstudoContext(DbContextOptions<EstudoContext> options)
            : base(options)
        { }
    }
}
