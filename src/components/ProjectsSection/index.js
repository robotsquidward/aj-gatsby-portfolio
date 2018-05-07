import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import templatoAndroidLogo from '../../assets/images/projects/templato-android-logo.png'
import gregPuskaric from '../../assets/images/projects/gpuskaric-logo.png'
import midwestartdeco from '../../assets/images/projects/mwad-logo.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={templatoAndroidLogo}
            colour="#FFFFFF"
            title="Templato"
            link="https://ajkueterman.com/android/templato-android-template-app/"
            timeperiod="2017 - current"
            subtitle="An example/template Android application maintained to the latest specs."
          />
          <ExperienceUnit
            logo={gregPuskaric}
            colour="#FFFFFF"
            title="GregPuskaric.com"
            link="http://gregpuskaric.com/"
            timeperiod="2018"
            subtitle="A Jekyll site hosted by GitHub Pages built & shipped for a fellow developer."
          />
          <ExperienceUnit
            logo={midwestartdeco}
            colour="#FFFFFF"
            title="Midwest Art Deco"
            link="https://midwestartdeco.com/"
            timeperiod="2015 - Current"
            subtitle="Built and maintained an Instagram based photography portfolio."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
