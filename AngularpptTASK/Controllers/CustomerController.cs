using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularpptTASK.Controllers
{
    public class CustomerController : Controller
    {
        LocalProjectEntities db = new LocalProjectEntities();

        public ActionResult Register(tblAngularCustomer customer)
        {
            db.tblAngularCustomers.Add(customer);
            db.SaveChanges();

            return RedirectToAction("CustomerPages/Data");
        }

	}
}