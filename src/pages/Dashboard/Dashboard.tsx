import { getMockUser } from '../../service/fakeService'
import AppHeader from '../../components/AppHeader/AppHeader'
import AppContainer from '../../components/AppContainer/AppContainer'
import AccountOwner from '../../components/AccountOwner/AccountOwner'
import AccountInfo from '../../components/AccountInfo/AccountInfo'
import Footer from '../../components/Footer/Footer'

import { useNavigate } from 'react-router-dom';

type Props = {}

const Dashboard = (props: Props) => {
  const user = getMockUser()
  const navigate = useNavigate()
  return (
    <div id="dashboard">
      <AppHeader title={'ArgentBank'} logoSrc={'/img/argentBankLogo.png'} />
      <AppContainer dark>
        <AccountOwner
          firstName={user?.firstName}
          lastName={user?.lastName}
          onEdit={(f, l) => {
          }}
        />
      <AccountInfo.Grid>
          <AccountInfo.Item title='Checing' amount={1082.5} onClick={()=>navigate('/profile/accounts/1')}></AccountInfo.Item>
          <AccountInfo.Item title='Saving' amount={1082.5} onClick={()=>navigate('/profile/accounts/1')}></AccountInfo.Item>
          <AccountInfo.Item title='Credit Card' amount={1082.5} onClick={()=>navigate('/profile/accounts/1')}></AccountInfo.Item>
      </AccountInfo.Grid>
      </AppContainer>
      <Footer/>
    </div>
  )
}

export default Dashboard