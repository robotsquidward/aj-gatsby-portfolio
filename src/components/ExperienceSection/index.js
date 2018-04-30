import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import zomatoLogo from '../../assets/images/experience/zomato-logo.svg'
import fitsoLogo from '../../assets/images/experience/fitso-logo.jpg'
import kayakoLogo from '../../assets/images/experience/kayako-logo-2.jpg'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={zomatoLogo}
            colour='#CB202D'
            title='Fifth Third Bank'
            link='https://www.zomato.com/'
            timeperiod='2014 - current'
            subtitle='Senior Application Developer, developing features for the Fifth Third Bank Mobile Banking application.  Previously an IT Leadership Program participant.'
          />
          <ExperienceUnit
            logo={fitsoLogo}
            colour='#FFFFFF'
            title='Base11 Studios'
            link='https://www.getfitso.com/'
            timeperiod='2017 - current'
            subtitle='Helped build iOS applications CaliCalo and fuzZzy as well as the Base11 Studios site and blog using Jekyll and GitHub Pages.'
          />
          <ExperienceUnit
            logo={kayakoLogo}
            colour='#403949'
            title='Teradata'
            link='https://www.kayako.com/'
            timeperiod='2013'
            subtitle='Updated intranet SSO solution using JavaScript and JSP, re-wrote and migrated reporting PL/SQL reporting app to production database.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
