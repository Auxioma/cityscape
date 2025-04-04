interface SubMenuItem {
    title: string;
    link: string;
  }
  
  interface MenuItem {
    title: string;
    link?: string;
    submenu?: SubMenuItem[];
  }
  
  export const menuData: MenuItem[] = [
    {
      title: "Home",
      submenu: [
        { title: "Home One", link: "index.html" },
        { title: "Home Two", link: "index-2.html" },
        { title: "Home Three", link: "index-3.html" },
        { title: "Home Four", link: "index-4.html" },
        { title: "Home Five", link: "index-5.html" },
        { title: "Home Video", link: "index-6.html" },
        { title: "Home Map", link: "index-7.html" },
      ],
    },
    {
      title: "Pages",
      submenu: [
        { title: "Property", link: "property.html" },
        { title: "Property Sidebar", link: "property-sidebar.html" },
        { title: "Property Details", link: "property-details.html" },
        { title: "Add New Listing", link: "add-listing.html" },
        { title: "Map Location", link: "map-location.html" },
        { title: "About Us", link: "about.html" },
        { title: "FAQ", link: "faq.html" },
        { title: "Checkout", link: "checkout.html" },
        { title: "Cart", link: "cart.html" },
        { title: "Login", link: "login.html" },
        { title: "Account", link: "account.html" },
      ],
    },
    {
      title: "Project",
      submenu: [
        { title: "Project", link: "project.html" },
        { title: "Project Details", link: "project-details.html" },
      ],
    },
    {
      title: "Blog",
      submenu: [
        { title: "Blog Classic", link: "blog-classic.html" },
        { title: "Blog Details", link: "blog-details.html" },
      ],
    },
    {
      title: "Contact",
      link: "contact.html",
    },
  ];
  