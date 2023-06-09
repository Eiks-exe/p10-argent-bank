import React from 'react'
import AppHeader from '../../components/AppHeader/AppHeader'
import AppContainer from '../../components/AppContainer/AppContainer'
import Features from '../../components/Features/Features'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <AppHeader title='yeah' logoSrc='/img/argentBankLogo.png' />
      <AppContainer>
        <Banner>
          <h1>
          No fees.
          No minimum deposit.
          High interest rates.
          </h1>
          Open a savings account with Argent Bank today!
        </Banner>
        <Features.Grid>
          <Features.Item
            imgSrc='/img/icon-chat.png'
            title='You are our #1 priority'
            description=" Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
          />
          <Features.Item
            imgSrc='/img/icon-money.png'
            title='More savings means higher rates'
            description="The more you save with us, the higher your interest rate will be!"
          />
          <Features.Item
            imgSrc='/img/icon-security.png'
            title='Security you can trust'
            description=" We use top of the line encryption to make sure your data and money
            is always safe."
          />
        </Features.Grid>
        <Footer />
      </AppContainer>
    </div>
  )
}

export default Home
