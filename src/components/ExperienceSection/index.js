import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import fifthThirdLogo from '../../assets/images/experience/53-logo.png'
import base11Logo from '../../assets/images/experience/base11-studios.svg'
import teradataLogo from '../../assets/images/experience/Teradata-Logo.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={fifthThirdLogo}
            colour='#FFFFFF'
            title='Fifth Third Bank'
            link='https://www.53.com/'
            timeperiod='2014 - current'
            subtitle='Senior Application Developer, developing features for the Fifth Third Bank Mobile Banking application.  Previously an IT Leadership Program participant.'
          />
          <ExperienceUnit
            logo={base11Logo}
            colour='#FFFFFF'
            title='Base11 Studios'
            link='https://www.base11studios.com/'
            timeperiod='2017 - current'
            subtitle='Helped build iOS applications CaliCalo and fuzZzy as well as the Base11 Studios site and blog using Jekyll and GitHub Pages.'
          />
          <ExperienceUnit
            logo={teradataLogo}
            colour='#FFFFFF'
            title='Teradata'
            link='https://www.teradata.com/'
            timeperiod='2013'
            subtitle='Updated intranet SSO solution using JavaScript and JSP, re-wrote and migrated reporting PL/SQL reporting app to production database.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
