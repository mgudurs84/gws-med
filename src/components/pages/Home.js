import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div>
          <p className="lead">
            successfully authenticated with OKTA OPENID connect protocol,{' '}
            <Link to="/staff">click here  to go secure page</Link>
          </p>
          <button className="btn btn-light btn-lg" onClick={this.logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
         <div>
<table border="0" cellpadding="2">
<tbody>
<tr>
<td height="20">OMB No.0938-1236 |</td>
<td height="20">Expiration Date: 04/30/2017 (OMB Re-Certification Pending) |</td>
<td><a id="actionLink" tabindex="0" href="https://eidm.cms.gov/EIDMLogin/login?bmctx=5FD4A6A216B464561C26741E7EC7EE2D1D6DD0ED81C7E8D21490F78C5960C4C0&amp;contextType=external&amp;username=string&amp;OverrideRetryLimit=3&amp;contextValue=%2Foam&amp;password=secure_string&amp;challenge_url=https%3A%2F%2Feidm.cms.gov%2FEIDMLogin%2Flogin&amp;ssoCookie=Secure&amp;request_id=-4103163064226745915&amp;authn_try_count=0&amp;locale=en_US&amp;resource_url=%252Fuser%252Floginsso">Paperwork Reduction Act</a></td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>This warning banner provides privacy and security notices consistent with applicable federal laws, directives, and other federal guidance for accessing this Government system, which includes (1) this computer network, (2) all computers connected to this network, and (3) all devices and storage media attached to this network or to a computer on this network.</p>
<p>This system is provided for Government authorized use only.</p>
<p>Unauthorized or improper use of this system is prohibited and may result in disciplinary action and/or civil and criminal penalties.</p>
<p>Personal use of social media and networking sites on this system is limited as to not interfere with official work duties and is subject to monitoring.</p>
<p>By using this system, you understand and consent to the following:</p>
<ul>
<ul>
<li>The Government may monitor, record, and audit your system usage, including usage of personal devices and email systems for official duties or to conduct HHS business. Therefore, you have no reasonable expectation of privacy regarding any communication or data transiting or stored on this system. At any time, and for any lawful Government purpose, the government may monitor, intercept, and search and seize any communication or data transiting or stored on this system.</li>
<li>Any communication or data transiting or stored on this system may be disclosed or used for any lawful Government purpose.</li>
</ul>
</ul>
<p>&nbsp;</p>
<p>To continue, you must accept the terms and conditions. If you decline, your login will automatically be cancelled.</p>
</div>
          <button className="btn btn-dark btn-lg" onClick={this.login}>
            Login
          </button>
        </div>
      );

      return (
        <div className="jumbotron">
          <h1 className="display-4">Novitas Secure Portal</h1>
          {mainContent}
        </div>
      );
    }
  }
);
