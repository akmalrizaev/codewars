// Description:

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    // Remove the protocol part (http:// or https://)
      url = url.replace(/(^\w+:|^)\/\//, '');
      
      // Remove www. if present
      url = url.replace(/^www\./, '');
  
      // Extract domain name (letters, numbers, hyphens)
      const domainMatch = url.match(/^([a-zA-Z0-9-]+)/);
  
      // Return the domain name or an empty string if not found
      return domainMatch ? domainMatch[1] : '';
  }

const domain1 = domainName("http://github.com/carbonfive/raygun");
console.log(domain1);  // Output: "github"

const domain2 = domainName("http://www.zombie-bites.com");
console.log(domain2);  // Output: "zombie-bites"

const domain3 = domainName("https://www.cnet.com");
console.log(domain3);  // Output: "cnet"