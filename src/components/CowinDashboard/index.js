import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import {
  AppContainer,
  ContentContainer,
  LogoContainer,
  LogoImage,
  LogoText,
  VaccinationTitle,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    cowinData: {},
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()

      const updatedData = {
        last7DaysVaccination: data.last_7_days_vaccination.map(eachItem => ({
          vaccineDate: eachItem.vaccine_date,
          dose1: eachItem.dose_1,
          dose2: eachItem.dose_2,
        })),
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }

      this.setState({
        cowinData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      console.log('Failure')
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {cowinData} = this.state

    return (
      <div className="charts-container">
        <VaccinationCoverage
          last7DaysVaccination={cowinData.last7DaysVaccination}
        />
        <VaccinationByGender
          vaccinationByGender={cowinData.vaccinationByGender}
        />
        <VaccinationByAge vaccinationByAge={cowinData.vaccinationByAge} />
      </div>
    )
  }

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <FailureText>Something went wrong</FailureText>
    </FailureContainer>
  )

  renderLoader = () => (
    <LoaderContainer testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </LoaderContainer>
  )

  renderContent = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <AppContainer>
        <ContentContainer>
          <LogoContainer>
            <LogoImage
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
            <LogoText className="logo-title">Co-WIN</LogoText>
          </LogoContainer>
          <VaccinationTitle>CoWIN Vaccination in India</VaccinationTitle>
          {this.renderContent()}
        </ContentContainer>
      </AppContainer>
    )
  }
}

export default CowinDashboard
