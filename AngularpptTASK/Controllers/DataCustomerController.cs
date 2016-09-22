using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularpptTASK.Controllers
{
    public class DataCustomerController : ApiController
    {
        LocalProjectEntities db = new LocalProjectEntities();

        public void PostCustomer(tblAngularCustomer customer)
        {
            db.tblAngularCustomers.Add(customer);
            db.SaveChanges();
        }

        public List<tblAngularCustomer> GetDisplayData()
        {
            var data = db.tblAngularCustomers.ToList();

            return data;
        }

        public void DeleteCustomer(int Id)
        {
            tblAngularCustomer customer = db.tblAngularCustomers.Where(x => x.Id == Id).FirstOrDefault();
            db.tblAngularCustomers.Remove(customer);
            db.SaveChanges();
        }

        public tblAngularCustomer GetCustomerId(int Id)
        {
            var data = db.tblAngularCustomers.FirstOrDefault(x => x.Id == Id);
            return data;
        } 

        public void PutCustomer(tblAngularCustomer customer)
        {
            tblAngularCustomer obj = db.tblAngularCustomers.Single(x => x.Id == customer.Id);
            obj.Name = customer.Name;
            obj.Age = customer.Age;
            obj.City = customer.City;
            obj.Languages = customer.Languages;
            obj.Skills = customer.Skills;

            db.SaveChanges();
        }
    }
}
