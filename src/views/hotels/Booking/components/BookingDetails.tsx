import { Col, Container, Row } from 'react-bootstrap'
import GuestDetails from './GuestDetails'
import HotelInformation from './HotelInformation'
import LoginAdvantages from './LoginAdvantages'
import OfferAndDiscounts from './OfferAndDiscounts'
import PaymentOptions from './PaymentOptions'
import PriceSummary from './PriceSummary'

const BookingDetails = () => {
  return (
    <section>
      <Container>
        <Row className="g-4 g-lg-5">
          <Col xl={8}>
            <div className="vstack gap-5">
              <HotelInformation />

              <GuestDetails />

              <PaymentOptions />
            </div>
          </Col>
          <Col as="aside" xl={4}>
            <Row className="g-4">
              <Col md={6} xl={12}>
                <PriceSummary />
              </Col>
              <Col md={6} xl={12}>
                <OfferAndDiscounts />
              </Col>
              <Col md={6} xl={12}>
                <LoginAdvantages />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BookingDetails
