

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App
      table="FREE"
      price="$0"
      line1="&#10004; Single User"
      line2="&#10004; 5GB Storage"
      line3="&#10004; Unlimited Public Projects"
      line4="&#10004; Community Access"
      line5="&#10006; Unlimited Private Projects"
      line6="&#10006; Dedicated Phone Support"
      line7="&#10006; Free Subdomain"
      line8="&#10006; Monthly Status Reports"
    />

    <App
      table="PLUS"
      price="$9"
      line1="&#10004; 5 User"
      line2="&#10004; 50GB Storage"
      line3="&#10004; Unlimited Public Projects"
      line4="&#10004; Community Access"
      line5="&#10004; Unlimited Private Projects"
      line6="&#10004; Dedicated Phone Support"
      line7="&#10004; Free Subdomain"
      line8="&#10006; Monthly Status Reports"
    />
    <App
      table="PRO"
      price="$49"
      line1="&#10004;Unlimited User"
      line2="&#10004; 150GB Storage"
      line3="&#10004; Unlimited Public Projects"
      line4="&#10004; Community Access"
      line5="&#10004; Unlimited Private Projects"
      line6="&#10004; Dedicated Phone Support"
      line7="&#10004; Unlimited Free Subdomains"
      line8="&#10004; Monthly Status Reports"
    />
  </StrictMode>,
  rootElement
);
