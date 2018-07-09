import React from 'react';
import Helmet from 'react-helmet';

const CookiesPage = () => (
  <main className="container-fluid py-4">
    <Helmet bodyAttributes={{ style: 'background: #fff' }} />
    <h2 id="use-of-cookies">Use of cookies</h2>
    <p>Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site. The table below explains the cookies we use and why.</p>

    <table className="table">
      <thead>
        <tr>
          <th scope="col">Cookie</th>
          <th scope="col">Name</th>
          <th scope="col">Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cookie preference</td>
          <td>accepts-cookies</td>
          <td>Indicates if you’ve accepted cookies</td>
        </tr>
        <tr>
          <td>Universal Analytics (Google)</td>
          <td>_ga, _gat_gtag_*, _gid</td>
          <td>These cookies are used to collect information about how visitors use our website. We use the information to compile reports and to help us improve the website. The cookies collect information in an anonymous form, including the number of visitors to the website and blog, where visitors have come to the website from and the pages they visited.  <a href="https://support.google.com/analytics/answer/6004245" title="Opens in new window">Read Google’s overview of privacy and safeguarding data</a></td>
        </tr>
      </tbody>
    </table>
    
    <h2 id="how-do-i-change-my-cookie-settings">How do I change my cookie settings?</h2>
    <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="http://www.aboutcookies.org/">www.aboutcookies.org</a> or <a href="http://www.allaboutcookies.org/">www.allaboutcookies.org</a>.</p>
    <p>Find out how to manage cookies on popular browsers:</p>
    <ul>
      <li><a href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&amp;hl=en">Google Chrome</a></li>
      <li><a href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy">Microsoft Edge</a></li>
      <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">Mozilla Firefox</a></li>
      <li><a href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies">Microsoft Internet Explorer</a></li>
      <li><a href="https://www.opera.com/help/tutorials/security/privacy/">Opera</a></li>
      <li><a href="https://support.apple.com/kb/ph21411?locale=en_US">Apple Safari</a></li>
    </ul>
    <p>To find information relating to other browsers, visit the browser developer’s website.</p>
    <p>To opt out of being tracked by Google Analytics across all websites, visit  <a href="http://tools.google.com/dlpage/gaoptout">http://tools.google.com/dlpage/gaoptout</a>.</p>
  </main>
);

export default CookiesPage;
