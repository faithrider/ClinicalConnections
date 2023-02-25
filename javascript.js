// Declaration
class organization_profile {
    constructor(name, trial_list, contact_rep, company_website) {
      this.name = name;
      this.trial_list = trial_list;
      this.contact_rep = contact_rep;
      this.company_website = company_website;
    }


  };
  
// Create company profile instances
  const companyA = new organization_profile(
    "Clinical Trail Org I",
    ["CT I - a"],
    "John Doe I",
    "www.websiteone.com"
  );

  const companyB = new organization_profile(
    "Clinical Trail Org II",
    ["CT II - a", "CT II - b", "CT II - c"],
    "John Doe II",
    "www.websitetwo.com"
  );

  const companyC = new organization_profile(
    "Clinical Trail Org III",
    ["CT III - a", "CT III - b"],
    "John Doe III",
    "www.websitethree.com"
  );

  document.addEventListener("DOMContentLoaded", function(event) {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");
  
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const target = this.getAttribute("href");
        const targetSection = document.querySelector(target);
        sections.forEach(function(section) {
          section.classList.remove("active");
        });
        targetSection.classList.add("active");
      });
    });
  });