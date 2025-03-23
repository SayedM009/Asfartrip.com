import { SelectFormInput } from '@/components'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'react-bootstrap'
import { roomDetails } from '../data'
import PriceSummery from './PriceSummery'
import RoomCard from './RoomCard'

const RoomSelection = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col xl={7}>
            <Card className="bg-transparent p-0">
              <CardHeader className="bg-transparent border-bottom d-sm-flex justify-content-sm-between align-items-center p-0 pb-3">
                <h4 className="mb-2 mb-sm-0">Select Rooms</h4>
                <Col sm={4}>
                  <form className="form-control-bg-light">
                    <SelectFormInput className="form-select form-select-sm js-choice border-0">
                      <option value={-1}>Select Option</option>
                      <option>Recently search</option>
                      <option>Most popular</option>
                      <option>Top rated</option>
                    </SelectFormInput>
                  </form>
                </Col>
              </CardHeader>
              <CardBody className="p-0 pt-3">
                <div className="vstack gap-5">
                  {roomDetails.map((room, idx) => {
                    return <RoomCard key={idx} images={room.images} name={room.name} price={room.price} sqfeet={room.sqfeet} id={room.id} />
                  })}
                </div>
              </CardBody>
            </Card>
          </Col>

          <PriceSummery />
        </Row>
      </Container>
    </section>
  )
}

export default RoomSelection
