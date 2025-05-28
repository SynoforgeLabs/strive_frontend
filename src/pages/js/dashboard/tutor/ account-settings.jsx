import React from "react"
import * as Snippets from "../../../../components/dashboards/tutor/snippets/snippets-index"
import TutorAccountSettings from "../../../../components/dashboards/tutor/account-settings/accounts-settings"
import "../../../css/dashboards/tutor/account-settings.css"


const AccountSettingsPage = () => {
    return (
      <div className="tutor-account-settings-page-main d-flex">
        <div className="tutor-account-settings-nav-bar w-auto">
          {/* tutor navbar */}
          <Snippets.TutorNavbar />
        </div>
        <div className="tutor-account-settinngs-content w-100">
          {/* tutor account-settings */}
          <TutorAccountSettings />
        </div>
        
      </div>
    );
  };
  
  export default AccountSettingsPage;