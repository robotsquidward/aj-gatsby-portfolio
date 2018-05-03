import React from 'react'
import Section from '../Section'
import DesignUnit from '../DesignUnit'

import fifthThirdLogo from '../../assets/images/experience/53-logo.png'

class DesignSection extends React.Component {
  render() {
    return (
      <Section>
        <div className="row">
          <DesignUnit
            logo={fifthThirdLogo}
            colour='#FFFFFF'
            title='Fifth Third Bank'
            link='https://www.53.com/'
            timeperiod='2014 - current'
            subtitle='Senior Application Developer, developing features for the Fifth Third Bank Mobile Banking application.  Previously an IT Leadership Program participant.'
          />
          <DesignUnit
            logo={fifthThirdLogo}
            colour='#FFFFFF'
            title='Fifth Third Bank'
            link='https://www.53.com/'
            timeperiod='2014 - current'
            subtitle='Senior Application Developer, developing features for the Fifth Third Bank Mobile Banking application.  Previously an IT Leadership Program participant.'
          />
          <DesignUnit
            logo={fifthThirdLogo}
            colour='#FFFFFF'
            title='Fifth Third Bank'
            link='https://www.53.com/'
            timeperiod='2014 - current'
            subtitle='Senior Application Developer, developing features for the Fifth Third Bank Mobile Banking application.  Previously an IT Leadership Program participant.'
          />
        </div>
      </Section>
    )
  }
}

export default DesignSection
