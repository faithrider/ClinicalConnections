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