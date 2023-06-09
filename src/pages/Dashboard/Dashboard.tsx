import AppHeader from '../../components/AppHeader/AppHeader'
import AppContainer from '../../components/AppContainer/AppContainer'
import AccountOwner from '../../components/AccountOwner/AccountOwner'
import AccountInfo from '../../components/AccountInfo/AccountInfo'
import Footer from '../../components/Footer/Footer'

import { useNavigate } from 'react-router-dom';
import { useProfile } from '../../store/auth.slice'

type Props = {}

const Dashboard = (props: Props) => {
  const { data: user, updateProfile } = useProfile()
  const navigate = useNavigate()
  return (
    <div id="dashboard">
      <AppHeader title={'ArgentBank'} logoSrc={'/img/argentBankLogo.png'} />
      <AppContainer dark>
        <AccountOwner
          firstName={user?.firstName}
          lastName={user?.lastName}
          onEdit={(f, l) => {
            user && updateProfile({ ...user, firstName: f, lastName: l });
          }}
        />
        <AccountInfo.Grid>
          <AccountInfo.Item title='Checking' amount={1082.5} onClick={() => navigate('/profile/accounts/1')}></AccountInfo.Item>
          <AccountInfo.Item title='Saving' amount={1082.5} onClick={() => navigate('/profile/accounts/1')}></AccountInfo.Item>
          <AccountInfo.Item title='Credit Card' amount={1082.5} onClick={() => navigate('/profile/accounts/1')}></AccountInfo.Item>
        </AccountInfo.Grid>
      </AppContainer>
      <Footer />
    </div>
  )
}

export default Dashboard